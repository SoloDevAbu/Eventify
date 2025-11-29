import { kafka } from "./kafka";
import { KAFKA_CONSUMER_CONFIG } from "./config";
import { Consumer, EachMessagePayload } from "kafkajs";
import { isDev } from "@eventify/utils";

export interface MessageHandler<T = unknown> {
  (message: T, payload: EachMessagePayload): Promise<void>;
}

class KafkaConsumer {
  private consumer?: Consumer;
  private isConnected: boolean = false;
  private isSubscribed: boolean = false;
  private groupId: string;
  private initPromise?: Promise<void>;

  constructor(groupId?: string) {
    this.groupId = groupId || KAFKA_CONSUMER_CONFIG.groupId;
  }

  private async ensureInitialized(): Promise<void> {
    if (this.isConnected && this.consumer) {
      return;
    }

    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = this.init();
    try {
      await this.initPromise;
    } finally {
      this.initPromise = undefined;
    }
  }

  private async init(): Promise<void> {
    if (this.isConnected && this.consumer) {
      return;
    }

    try {
      this.consumer = kafka.consumer({
        ...KAFKA_CONSUMER_CONFIG,
        groupId: this.groupId,
      });
      await this.consumer.connect();
      this.isConnected = true;
      if (isDev) {
        console.log(`Kafka Consumer connected (groupId: ${this.groupId})`);
      }
    } catch (error) {
      console.error("Failed to connect Kafka Consumer:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (!this.isConnected || !this.consumer) {
      if (isDev) {
        console.warn("Consumer is not connected");
      }
      return;
    }

    try {
      await this.consumer.disconnect();
      this.isConnected = false;
      this.isSubscribed = false;
      this.consumer = undefined;
      if (isDev) {
        console.log(`Kafka Consumer disconnected (groupId: ${this.groupId})`);
      }
    } catch (error) {
      console.error("Failed to disconnect Kafka Consumer:", error);
      throw error;
    }
  }

  async subscribe(topic: string | string[], fromBeginning: boolean = false): Promise<void> {
    await this.ensureInitialized();

    if (!this.consumer) {
      throw new Error("Consumer is not initialized");
    }

    try {
      const topics = Array.isArray(topic) ? topic : [topic];
      await this.consumer.subscribe({ topics, fromBeginning });
      this.isSubscribed = true;
      if (isDev) {
        console.log(`Subscribed to topic(s): ${topics.join(", ")}`);
      }
    } catch (error) {
      console.error("Failed to subscribe to topic(s):", error);
      throw error;
    }
  }

  async run<T = unknown>(handler: MessageHandler<T>): Promise<void> {
    await this.ensureInitialized();

    if (!this.consumer) {
      throw new Error("Consumer is not initialized");
    }

    if (!this.isSubscribed) {
      throw new Error("Consumer is not subscribed to any topic. Call subscribe() first.");
    }

    try {
      await this.consumer.run({
        eachMessage: async (payload) => {
          try {
            const value = payload.message.value;
            if (!value) {
              if (isDev) {
                console.warn("Received message with no value");
              }
              return;
            }

            const parsed: T = JSON.parse(value.toString());
            await handler(parsed, payload);
          } catch (error) {
            console.error("Error processing message:", error);
            throw error;
          }
        },
      });
    } catch (error) {
      console.error("Failed to run consumer:", error);
      throw error;
    }
  }

  async stop(): Promise<void> {
    if (!this.consumer) {
      if (isDev) {
        console.warn("Consumer is not initialized");
      }
      return;
    }

    try {
      await this.consumer.stop();
      if (isDev) {
        console.log("Consumer stopped");
      }
    } catch (error) {
      console.error("Failed to stop consumer:", error);
      throw error;
    }
  }

  get connected(): boolean {
    return this.isConnected;
  }

  get subscribed(): boolean {
    return this.isSubscribed;
  }
}

const kafkaConsumer = new KafkaConsumer();

export default kafkaConsumer;
export { KafkaConsumer };
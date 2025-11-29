import { kafka } from "./kafka";
import { KAFKA_PRODUCER_CONFIG } from "./config";
import { Producer, ProducerRecord } from "kafkajs";
import { isDev } from "@eventify/utils";

class KafkaProducer {
  private producer?: Producer;
  private isConnected: boolean = false;
  private initPromise?: Promise<void>;

  private async ensureInitialized(): Promise<void> {
    if (this.isConnected && this.producer) {
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
    if (this.isConnected && this.producer) {
      return;
    }

    try {
      this.producer = kafka.producer(KAFKA_PRODUCER_CONFIG);
      await this.producer.connect();
      this.isConnected = true;
      if (isDev) {
        console.log("Kafka Producer connected");
      }
    } catch (error) {
      console.error("Failed to connect Kafka Producer:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (!this.isConnected || !this.producer) {
      if (isDev) {
        console.warn("Producer is not connected");
      }
      return;
    }

    try {
      await this.producer.disconnect();
      this.isConnected = false;
      this.producer = undefined;
      if (isDev) {
        console.log("Kafka Producer disconnected");
      }
    } catch (error) {
      console.error("Failed to disconnect Kafka Producer:", error);
      throw error;
    }
  }

  async send(topic: string, message: unknown, key?: string): Promise<void> {
    await this.ensureInitialized();

    if (!this.producer) {
      throw new Error("Producer is not initialized");
    }

    try {
      const record: ProducerRecord = {
        topic,
        messages: [
          {
            key: key || undefined,
            value: JSON.stringify(message),
            timestamp: Date.now().toString(),
          },
        ],
      };

      await this.producer.send(record);
    } catch (error) {
      console.error(`Failed to send message to topic ${topic}:`, error);
      throw error;
    }
  }

  async sendBatch(records: Array<{ topic: string; message: unknown; key?: string }>): Promise<void> {
    await this.ensureInitialized();

    if (!this.producer) {
      throw new Error("Producer is not initialized");
    }

    try {
      const producerRecords: ProducerRecord[] = records.map((record) => ({
        topic: record.topic,
        messages: [
          {
            key: record.key || undefined,
            value: JSON.stringify(record.message),
            timestamp: Date.now().toString(),
          },
        ],
      }));

      await Promise.all(producerRecords.map((record) => this.producer!.send(record)));
    } catch (error) {
      console.error("Failed to send batch messages:", error);
      throw error;
    }
  }

  get connected(): boolean {
    return this.isConnected;
  }
}

const kafkaProducer = new KafkaProducer();

export default kafkaProducer;
export { KafkaProducer };
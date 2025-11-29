import { kafka } from "./kafka";
import { Admin, ITopicConfig } from "kafkajs";

export class KafkaAdmin {
  private admin: Admin;

  constructor() {
    this.admin = kafka.admin();
  }

  async connect(): Promise<void> {
    try {
      await this.admin.connect();
      console.log("Kafka Admin connected");
    } catch (error) {
      console.error("Failed to connect Kafka Admin:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.admin.disconnect();
      console.log("Kafka Admin disconnected");
    } catch (error) {
      console.error("Failed to disconnect Kafka Admin:", error);
      throw error;
    }
  }

  async createTopic(topic: string, config?: ITopicConfig): Promise<void> {
    try {
      const existingTopics = await this.admin.listTopics();
      if (existingTopics.includes(topic)) {
        console.log(`Topic ${topic} already exists`);
        return;
      }

      await this.admin.createTopics({
        topics: [
          {
            topic,
            ...config,
          },
        ],
      });
      console.log(`Topic ${topic} created successfully`);
    } catch (error) {
      console.error(`Failed to create topic ${topic}:`, error);
      throw error;
    }
  }

  async createTopics(topics: Array<{ topic: string; config?: ITopicConfig }>): Promise<void> {
    try {
      const existingTopics = await this.admin.listTopics();
      const topicsToCreate = topics.filter((t) => !existingTopics.includes(t.topic));

      if (topicsToCreate.length === 0) {
        console.log("All topics already exist");
        return;
      }

      await this.admin.createTopics({
        topics: topicsToCreate.map((t) => ({
          topic: t.topic,
          ...t.config,
        })),
      });
      console.log(`Created ${topicsToCreate.length} topic(s) successfully`);
    } catch (error) {
      console.error("Failed to create topics:", error);
      throw error;
    }
  }

  async deleteTopic(topic: string): Promise<void> {
    try {
      await this.admin.deleteTopics({
        topics: [topic],
      });
      console.log(`Topic ${topic} deleted successfully`);
    } catch (error) {
      console.error(`Failed to delete topic ${topic}:`, error);
      throw error;
    }
  }

  async listTopics(): Promise<string[]> {
    try {
      return await this.admin.listTopics();
    } catch (error) {
      console.error("Failed to list topics:", error);
      throw error;
    }
  }
}

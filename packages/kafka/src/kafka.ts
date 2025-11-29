import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "eventify",
  brokers: process.env.KAFKA_BROKERS?.split(",") || ["localhost:9092"],
});


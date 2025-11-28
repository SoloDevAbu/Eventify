import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "eventify",
  brokers: process.env.KAFKA_BROKERS?.split(",") || ["localhost:9092"],
});

export const kafkaAdmin = kafka.admin();

export const initAdmin = async () => {
  await kafkaAdmin.connect();
  console.log("Kafka Admin initialized");
};

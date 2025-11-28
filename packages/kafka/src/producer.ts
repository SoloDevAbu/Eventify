import { kafka } from "./admin";
import { KAFKA_TOPICS } from "./topics";

export const kafkaProducer = kafka.producer();

export const initKafkaProducer = async () => {
  await kafkaProducer.connect();
  console.log("Kafka Producer initialized");
};

export const closeKafkaProducer = async () => {
  await kafkaProducer.disconnect();
  console.log("Kafka Producer closed");
};

export const produceKafkaEvent = async (topic: KAFKA_TOPICS, message: any) => {
  await kafkaProducer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(message),
        timestamp: Date.now().toString(),
      },
    ],
  });
};

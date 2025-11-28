import { kafka } from "./admin";
import { KAFKA_TOPICS } from "./topics";

export const createConsumer = async (groupId: string) => {
  return kafka.consumer({
    groupId,
  });
};
export const startConsumer = async (
  consumer: ReturnType<typeof createConsumer>,
  topic: KAFKA_TOPICS,
  handler: (value: any) => Promise<void>
) => {
  (await consumer).connect();
  (await consumer).subscribe({ topic, fromBeginning: false });
  (await consumer).run({
    eachMessage: async ({ message }) => {
      const parsed = JSON.stringify(message.value?.toString());

      await handler(parsed);
    },
  });
};

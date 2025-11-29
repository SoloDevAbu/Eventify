import { KAFKA_TOPICS, KafkaProducer } from "@eventify/kafka";
import { SigninEvent, SignupEvent } from "@eventify/types";

class AuthPublisher {
  async publishSigninEvent(event: SigninEvent): Promise<void> {
    await KafkaProducer.send(KAFKA_TOPICS.AUTH_EVENTS, event, event.eventId);
  }

  async publishSignupEvent(event: SignupEvent): Promise<void> {
    await KafkaProducer.send(KAFKA_TOPICS.AUTH_EVENTS, event, event.eventId);
  }
}

const authPublisher = new AuthPublisher();
export default authPublisher;
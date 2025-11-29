import { kafkaProducer, KAFKA_TOPICS } from "@eventify/kafka";
import { SigninEvent, SignupEvent } from "@eventify/types";

class AuthPublisher {
  async publishSigninEvent(event: SigninEvent): Promise<void> {
    await kafkaProducer.send(KAFKA_TOPICS.AUTH_EVENTS, event, event.eventId);
  }

  async publishSignupEvent(event: SignupEvent): Promise<void> {
    await kafkaProducer.send(KAFKA_TOPICS.AUTH_EVENTS, event, event.eventId);
  }
}

const authPublisher = new AuthPublisher();
export default authPublisher;
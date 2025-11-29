export const KAFKA_TOPICS = {
  AUTH_EVENTS: "auth_events",
  PAGE_EVENTS: "page_events",
  CUSTOMER_EVENTS: "customer_events",
} as const;

export type KAFKA_TOPICS = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];

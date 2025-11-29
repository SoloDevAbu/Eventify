export const KAFKA_GROUP_ID = "eventify";

export const KAFKA_PRODUCER_CONFIG = {
  maxInFlightRequests: 2,
  idempotent: true,
  transactionTimeout: 30000,
  retry: {
    initialRetryTime: 100,
    maxRetryTime: 10000,
  },
} as const;

export const KAFKA_CONSUMER_CONFIG = {
  groupId: KAFKA_GROUP_ID,
  sessionTimeout: 30000,
  heartbeatInterval: 10000,
  retry: {
    retries: 3,
    initialRetryTime: 100,
    maxRetryTime: 30000,
  },
} as const;

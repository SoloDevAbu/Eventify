import { z } from "zod";

export const eventContextSchema = z.object({
  ip: z.string().optional(),
  userAgent: z.string().optional(),

  device: z
    .object({
      type: z.enum(["mobile", "desktop", "tablet"]).optional(),
      os: z.string().optional(),
      browser: z.string().optional(),
    })
    .optional(),

  location: z
    .object({
      country: z.string().optional(),
      city: z.string().optional(),
    })
    .optional(),

  page: z
    .object({
      url: z.string().optional(),
      referrer: z.string().optional(),
      title: z.string().optional(),
    })
    .optional(),

  app: z
    .object({
      version: z.string().optional(),
      build: z.string().optional(),
    })
    .optional(),
});

export const baseEventSchema = z.object({
  eventId: z.string(),
  name: z.string(), // overridden by specific events or custom events
  timestamp: z.string(),
  userId: z.string().optional(),
  anonymousId: z.string().optional(),
  context: eventContextSchema.optional(),
  properties: z.record(z.string(), z.any()).optional(),
});

export type BaseEvent = z.infer<typeof baseEventSchema>;
export type EventContext = z.infer<typeof eventContextSchema>;

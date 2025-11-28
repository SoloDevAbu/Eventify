import { z } from "zod";

export enum AuthEventName {
  USER_SIGNUP = "user_signup",
  USER_SIGNIN = "user_signin",
}

export enum AuthMethod {
  EMAIL = "email",
  PHONE = "phone",
  GOOGLE = "google",
  FACEBOOK = "facebook",
  APPLE = "apple",
  GITHUB = "github",
  LINKEDIN = "linkedin",
  TWITTER = "twitter",
  DISCORD = "discord",
}

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

export type EventContext = z.infer<typeof eventContextSchema>;

export const authBaseEventSchema = z.object({
  eventId: z.string(),
  name: z.string(),
  timestamp: z.string(),
  userId: z.string().optional(),
  anonymousId: z.string().optional(),
  context: eventContextSchema.optional(),
  properties: z.record(z.any(), z.any()).optional(),
});
export type BaseEvent = z.infer<typeof authBaseEventSchema>;

export const authSignupEventSchema = authBaseEventSchema.extend({
  name: z.literal(AuthEventName.USER_SIGNUP),
  properties: z.object({
    method: z
      .enum([...Object.values(AuthMethod)] as [string, ...string[]])
      .optional(),
    source: z.string().optional(),
  }),
});

export type UserSignupEvent = z.infer<typeof authSignupEventSchema>;

export const authSigninEventSchema = authBaseEventSchema.extend({
  name: z.literal(AuthEventName.USER_SIGNIN),
  properties: z.object({
    method: z
      .enum([...Object.values(AuthMethod)] as [string, ...string[]])
      .optional(),
    success: z.boolean(),
  }),
});

export type UserSigninEvent = z.infer<typeof authSigninEventSchema>;

export const customEventInputSchema = z.object({
  name: z.string(), // ANY custom name
  userId: z.string().optional(),
  anonymousId: z.string().optional(),
  properties: z.record(z.any(), z.any()).optional(),
});

export type CustomEventInput = z.infer<typeof customEventInputSchema>;

export const authSignupInputSchema = z.object({
  userId: z.string().optional(),
  anonymousId: z.string().optional(),
  method: z
    .enum([...Object.values(AuthMethod)] as [string, ...string[]])
    .optional(),
  source: z.string().optional(),
});

export type AuthSignupInput = z.infer<typeof authSignupInputSchema>;

export const authSigninInputSchema = z.object({
  userId: z.string().optional(),
  anonymousId: z.string().optional(),
  method: z
    .enum([...Object.values(AuthMethod)] as [string, ...string[]])
    .optional(),
  success: z.boolean(),
});

export type AuthSigninInput = z.infer<typeof authSigninInputSchema>;

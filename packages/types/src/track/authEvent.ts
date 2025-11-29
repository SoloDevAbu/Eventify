import { z } from "zod";
import { baseEventSchema } from "./baseEvent";

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
  TWITTER = "twitter",
  LINKEDIN = "linkedin",
  DISCORD = "discord",
}

const authMethodEnum = z.nativeEnum(AuthMethod);

export const signupEventSchema = baseEventSchema.extend({
  name: z.literal(AuthEventName.USER_SIGNUP),
  properties: z.object({
    method: authMethodEnum.optional(),
    source: z.string().optional(),
  }),
});

export type SignupEvent = z.infer<typeof signupEventSchema>;

export const signinEventSchema = baseEventSchema.extend({
  name: z.literal(AuthEventName.USER_SIGNIN),
  properties: z.object({
    method: authMethodEnum.optional(),
    success: z.boolean(),
  }),
});

export type SigninEvent = z.infer<typeof signinEventSchema>;

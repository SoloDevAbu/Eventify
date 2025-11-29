import { signinEventSchema, signupEventSchema } from "@eventify/types";

export const validateSignupEvent = (event: unknown) => {
    return signupEventSchema.safeParse(event);
}

export const validateSigninEvent = (event: unknown) => {
    return signinEventSchema.safeParse(event);
}
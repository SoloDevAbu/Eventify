import { signinEventSchema, signupEventSchema } from "@eventify/types";
import { Request, Response } from "express";

export const trackSignup = (req: Request, res: Response) => {
  const { event } = req.body;

  if (!event) {
    return res.status(400).json({ message: "Event is required" });
  }

  const parsedEvent = signupEventSchema.safeParse(event);

  if (!parsedEvent.success) {
    return res.status(400).json({ message: "Invalid event" });
  }

  return res.status(200).json({ message: "Event tracked successfully" });
};

export const trackSignin = (req: Request, res: Response) => {
  const { event } = req.body;

  if (!event) {
    return res.status(400).json({ message: "Event is required" });
  }

  const parsedEvent = signinEventSchema.safeParse(event);

  if (!parsedEvent.success) {
    return res.status(400).json({ message: "Invalid event" });
  }

  return res.status(200).json({ message: "Event tracked successfully" });
};

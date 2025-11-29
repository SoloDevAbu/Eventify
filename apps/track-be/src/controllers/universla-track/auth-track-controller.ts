import { Request, Response } from "express";
import {
  validateSigninEvent,
  validateSignupEvent,
} from "../../services/validator/authValidator";
import authPublisher from "../../services/publishers/authPublisher";
import { isDev } from "@eventify/utils";

export const trackSignup = async (req: Request, res: Response): Promise<Response> => {
  const { event } = req.body;

  if (!event) {
    return res.status(400).json({ message: "Event is required" });
  }

  const parsedEvent = validateSignupEvent(event);

  if (!parsedEvent.success) {
    return res.status(400).json({ message: "Invalid event" });
  }

  try {
    await authPublisher.publishSignupEvent(parsedEvent.data);

    if (isDev) {
      console.log("[AUTH] Signup event published to Kafka");
      console.log(parsedEvent.data);
    }
    return res.status(200).json({ message: "Event tracked successfully" });
  } catch (error) {
    console.error("[AUTH] Failed to publish signup event:", error);
    return res.status(500).json({ message: "Failed to track event" });
  }
};

export const trackSignin = async (req: Request, res: Response): Promise<Response> => {
  const { event } = req.body;

  if (!event) {
    return res.status(400).json({ message: "Event is required" });
  }

  const parsedEvent = validateSigninEvent(event);

  if (!parsedEvent.success) {
    return res.status(400).json({ message: "Invalid event" });
  }

  try {
    await authPublisher.publishSigninEvent(parsedEvent.data);
    if (isDev) {
      console.log("[AUTH] Signin event published to Kafka");
      console.log(parsedEvent.data);
    }
    return res.status(200).json({ message: "Event tracked successfully" });
  } catch (error) {
    console.error("[AUTH] Failed to publish signin event:", error);
    return res.status(500).json({ message: "Failed to track event" });
  }
};

import { pageViewEventSchema } from "@eventify/types";
import { Response, Request } from "express";

export const trackPageView = (req: Request, res: Response) => {
  const { event } = req.body;

  if (!event) {
    return res.status(400).json({ message: "Event is required" });
  }

  const parsedEvent = pageViewEventSchema.safeParse(event);

  if (!parsedEvent.success) {
    return res.status(400).json({ message: "Invalid event" });
  }

  return res.status(200).json({ message: "Event tracked successfully" });
};

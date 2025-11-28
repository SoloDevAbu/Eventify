import { z } from "zod";
import { baseEventSchema } from "./baseEvent";

export const pageViewEventSchema = baseEventSchema.extend({
  name: z.literal("page_view"),
  properties: z.object({
    url: z.string(),
    referrer: z.string().optional(),
    title: z.string().optional(),
  }),
});

export type PageViewEvent = z.infer<typeof pageViewEventSchema>;

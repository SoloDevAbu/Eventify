import { z } from "zod";
import { baseEventSchema } from "./baseEvent";

export const customEventSchema = baseEventSchema.extend({
  name: z.string(), // free-form custom name
  properties: z.record(z.string(), z.any()).optional(),
});

export type CustomEvent = z.infer<typeof customEventSchema>;

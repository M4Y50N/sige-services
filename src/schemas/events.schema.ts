import { z } from "zod";
import { createEventInfosSchema } from "./eventInfos.schema";

const createEventsSchema = z.object({
	description: z.string(),
	location: z.string(),
	eventInfos: createEventInfosSchema,
});

const eventsReturnSchema = z
	.object({
		id: z.number(),
	})
	.merge(createEventsSchema)
	.extend({
		createdAt: z.string(),
		updatedAt: z.string(),
	});

export { createEventsSchema, eventsReturnSchema };

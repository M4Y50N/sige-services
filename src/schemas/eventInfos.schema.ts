import { z } from "zod";

const createEventInfosSchema = z.object({
		vacancies: z.number(),
		registerStartDate: z.string(),
		registerEndDate: z.string(),
		eventStartDate: z.string(),
		eventEndDate: z.string(),
	}),
	eventInfosSchema = createEventInfosSchema.extend({
		id: z.number(),
	});

export { createEventInfosSchema, eventInfosSchema };

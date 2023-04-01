import { z } from "zod";
import { createUserInfosSchema } from "./userInfos.schema";

const createUserSchema = z.object({
	userName: z.string(),
	password: z.string(),
	email: z.string(),
	isAdmin: z.boolean(),
	userInfos: createUserInfosSchema,
});

const userWithoutPassSchema = z
	.object({
		id: z.number(),
	})
	.merge(createUserSchema)
	.omit({ password: true })
	.extend({
		createdAt: z.string(),
		updatedAt: z.string(),
		deletedAt: z.string().nullish(),
	});

const updateUserSchema = createUserSchema.partial();

export { createUserSchema, userWithoutPassSchema, updateUserSchema };

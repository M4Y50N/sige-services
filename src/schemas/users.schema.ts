import { z } from "zod";
import { createUserInfosSchema } from "./userInfos.schema";

const createUserSchema = z.object({
	userName: z.string(),
	password: z.string(),
	mail: z.string(),
	isAdmin: z.string(),
	userInfos: createUserInfosSchema,
});

export { createUserSchema };

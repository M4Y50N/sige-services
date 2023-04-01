import { z } from "zod";
import {
	createUserSchema,
	userWithoutPassSchema,
} from "../schemas/users.schema";
import { updateUserSchema } from "../schemas/users.schema";

type tCreateUser = z.infer<typeof createUserSchema>;
type tUsersWithoutPass = z.infer<typeof userWithoutPassSchema>;
type tUpdateUser = z.infer<typeof updateUserSchema>;

export { tCreateUser, tUsersWithoutPass, tUpdateUser };

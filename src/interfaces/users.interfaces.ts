import { z } from "zod";
import {
	createUserSchema,
	userWithoutPassSchema,
} from "../schemas/users.schema";

type tCreateUser = z.infer<typeof createUserSchema>;
type tUsersWithoutPass = z.infer<typeof userWithoutPassSchema>;

export { tCreateUser, tUsersWithoutPass };

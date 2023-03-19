import { z } from "zod";
import { createUserSchema } from "../schemas/users.schema";

type tCreateUser = z.infer<typeof createUserSchema>;

export { tCreateUser };

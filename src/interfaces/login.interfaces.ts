import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

type tLogin = z.infer<typeof loginSchema>;

export { tLogin };

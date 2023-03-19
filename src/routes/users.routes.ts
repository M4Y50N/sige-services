import { Request, Response, Router } from "express";
import createUserController from "../controllers/users/createUser.controller";

const usersRoutes: Router = Router();

usersRoutes.get("", async (req: Request, res: Response): Promise<Response> => {
	return res.status(200).json({ message: "Get all users" });
});

usersRoutes.post("", createUserController);

export default usersRoutes;

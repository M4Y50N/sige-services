import { Request, Response, Router } from "express";

const loginRoutes: Router = Router();

loginRoutes.post(
	"/login",
	async (req: Request, res: Response): Promise<Response> => {
		return res.status(200).json({ message: "Login route" });
	}
);

export default loginRoutes;

import { Request, Response, Router } from "express";

const accreditationRoutes: Router = Router();

accreditationRoutes.post(
	"/login",
	async (req: Request, res: Response): Promise<Response> => {
		return res.status(200).json({ message: "Login route" });
	}
);
accreditationRoutes.post(
	"/register",
	async (req: Request, res: Response): Promise<Response> => {
		return res.status(200).json({ message: "Register route" });
	}
);

export default accreditationRoutes;

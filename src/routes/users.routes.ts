import { Request, Response, Router } from "express";

const usersRoutes: Router = Router();

usersRoutes.get("", async (req: Request, res: Response): Promise<Response> => {
	return res.status(200).json({ message: "Get all users" });
});

export default usersRoutes;

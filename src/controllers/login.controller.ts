import { Request, Response } from "express";
import loginService from "../services/login.service";

const loginController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const loginData = req.body;

	const token = await loginService(loginData);

	return res.status(200).json({ token });
};

export default loginController;

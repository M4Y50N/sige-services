import { Request, Response } from "express";
import User from "../../entities/users.entity";
import { tCreateUser } from "../../interfaces/users.interfaces";
import createUserService from "../../services/usersCreate.service";

const createUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: tCreateUser = req.body;

	const userCreated: User = await createUserService(userData);

	return res.status(201).json(userCreated);
};

export default createUserController;

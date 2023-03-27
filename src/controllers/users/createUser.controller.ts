import { Request, Response } from "express";
import {
	tCreateUser,
	tUsersWithoutPass,
} from "../../interfaces/users.interfaces";
import createUserService from "../../services/users/usersCreate.service";

const createUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: tCreateUser = req.body;

	const userCreated: tUsersWithoutPass = await createUserService(userData);

	return res.status(201).json(userCreated);
};

export default createUserController;

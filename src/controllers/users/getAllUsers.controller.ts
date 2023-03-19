import { Request, Response } from "express";
import { tUsersWithoutPass } from "../../interfaces/users.interfaces";
import getAllUsersService from "../../services/users/usersGetAll.service";

const getAllUsersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const users: tUsersWithoutPass[] = await getAllUsersService();

	return res.status(200).json(users);
};

export default getAllUsersController;

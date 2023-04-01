import { Request, Response } from "express";
import {
	tCreateUser,
	tUsersWithoutPass,
} from "../../interfaces/users.interfaces";
import updateUserService from "../../services/users/usersUpdate.service";

const updateUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: tCreateUser = req.body,
		userId: number = parseInt(req.params.id);

	const userUpdated: tUsersWithoutPass = await updateUserService(
		userData,
		userId
	);

	return res.status(200).json(userUpdated);
};

export default updateUserController;

import { Request, Response } from "express";
import deleteUsersService from "../../services/users/usersDelete.service";

const deleteUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(req.params.id);

	await deleteUsersService(userId);

	return res.status(204).json();
};

export default deleteUserController;

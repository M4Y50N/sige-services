import { Request, Response } from "express";
import { tUsersWithoutPass } from "../../interfaces/users.interfaces";
import getUserService from "../../services/users/usersGet.service";

const getUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(req.params.id);

	const user: tUsersWithoutPass = await getUserService(userId);

	return res.status(200).json(user);
};

export default getUserController;

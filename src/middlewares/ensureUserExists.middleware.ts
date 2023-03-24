import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../errors";

const ensureUserExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const userId = parseInt(req.params.id);

	const usersRepo: Repository<User> = AppDataSource.getRepository(User);

	const user = await usersRepo.findOne({
		where: { id: userId },
		withDeleted: true,
	});

	if (!user || user?.deletedAt) {
		throw new AppError("User not found", 404);
	}

	return next();
};

export default ensureUserExistsMiddleware;

import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";
import { tUsersWithoutPass } from "../../interfaces/users.interfaces";
import { userWithoutPassSchema } from "../../schemas/users.schema";

const getAllUsersService = async (): Promise<tUsersWithoutPass[]> => {
	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const users = await userRepo.find({
		relations: {
			userInfos: {
				academic: true,
				address: true,
				phone: true,
			},
		},
	});

	const usersWithoutPass = userWithoutPassSchema.array().parse(users);

	return usersWithoutPass;
};

export default getAllUsersService;

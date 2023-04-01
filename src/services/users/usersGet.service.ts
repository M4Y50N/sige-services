import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";
import { tUsersWithoutPass } from "../../interfaces/users.interfaces";
import { userWithoutPassSchema } from "../../schemas/users.schema";

const getUserService = async (userId: number): Promise<tUsersWithoutPass> => {
	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepo.findOne({
		relations: {
			userInfos: {
				academic: true,
				address: true,
				phone: true,
			},
		},
		where: { id: userId },
	});

	const userWithoutPass = userWithoutPassSchema.parse(user);

	return userWithoutPass;
};

export default getUserService;

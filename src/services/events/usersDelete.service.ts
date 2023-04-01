import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";

const deleteUsersService = async (userId: number): Promise<void> => {
	const userRepo: Repository<User> = AppDataSource.getRepository(User);

	await userRepo.softDelete({ id: userId });
};

export default deleteUsersService;

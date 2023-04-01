import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entity";
import {
	updateUserSchema,
	userWithoutPassSchema,
} from "../../schemas/users.schema";
import { tUsersWithoutPass } from "../../interfaces/users.interfaces";
import UserInfos from "../../entities/userInfos.entity";
import Academic from "../../entities/academic.entity";
import Address from "../../entities/address.entity";
import Phone from "../../entities/phone.entity";

const updateUserService = async (
	payload: any,
	userId: number
): Promise<tUsersWithoutPass> => {
	const userRepo: Repository<User> = AppDataSource.getRepository(User),
		userInfosRepo: Repository<UserInfos> =
			AppDataSource.getRepository(UserInfos),
		phoneRepo: Repository<Phone> = AppDataSource.getRepository(Phone),
		addressRepo: Repository<Address> = AppDataSource.getRepository(Address),
		academicRepo: Repository<Academic> = AppDataSource.getRepository(Academic);

	const { userInfos: userInfosWithChildrenData, ...userData } = payload,
		{
			academic: academicData,
			address: addressData,
			phone: phoneData,
			...userInfosData
		} = userInfosWithChildrenData;

	const user = await userRepo.findOne({
		where: { id: userId },
		relations: {
			userInfos: {
				academic: true,
				address: true,
				phone: true,
			},
		},
	});

	const academicId = user!.userInfos.academic.id,
		addressId = user!.userInfos.address.id,
		phoneId = user!.userInfos.phone.id;

	await academicRepo.update(
		{
			id: academicId,
		},
		{
			...academicData,
		}
	);

	await addressRepo.update(
		{
			id: addressId,
		},
		{
			...addressData,
		}
	);

	await phoneRepo.update(
		{
			id: phoneId,
		},
		{
			...phoneData,
		}
	);

	const userInfosId = user!.userInfos.id;

	await userInfosRepo.update(
		{
			id: userInfosId,
		},
		{
			...userInfosData,
		}
	);

	if (!user?.isAdmin) {
		payload.admin = false;
	}

	await userRepo.update(
		{
			id: userId,
		},
		{
			...userData,
		}
	);

	const userWithoutPass = userWithoutPassSchema.parse(user);

	return userWithoutPass;
};

export default updateUserService;

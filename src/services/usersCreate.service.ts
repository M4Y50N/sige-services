import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Academic from "../entities/academic.entity";
import Address from "../entities/address.entity";
import Phone from "../entities/phone.entity";
import UserInfos from "../entities/userInfos.entity";
import User from "../entities/users.entity";
import { tCreateUser } from "../interfaces/users.interfaces";

const createUserService = async (payload: tCreateUser): Promise<any> => {
	const userRepo: Repository<User> = AppDataSource.getRepository(User),
		userInfosRepo: Repository<UserInfos> =
			AppDataSource.getRepository(UserInfos),
		phoneRepo: Repository<Phone> = AppDataSource.getRepository(Phone),
		addressRepo: Repository<Address> = AppDataSource.getRepository(Address),
		academicRepo: Repository<Academic> = AppDataSource.getRepository(Academic);

	const { userInfos: userInfosData, ...userData } = payload,
		{
			phone: phoneData,
			address: addressData,
			academic: academicData,
		} = userInfosData;

	const createAcademic = academicRepo.create(academicData);
	await academicRepo.save(createAcademic);

	return;
};

export default createUserService;

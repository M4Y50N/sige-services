import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import User from "../entities/users.entity";
import { AppError } from "../errors";
import { tLogin } from "../interfaces/login.interfaces";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginService = async (loginData: tLogin): Promise<any> => {
	const usersRepo: Repository<User> = AppDataSource.getRepository(User);

	const user = await usersRepo.find({
		where: {
			email: loginData.email,
		},
	});

	if (!user.length) {
		throw new AppError("Invalid credentials", 401);
	}

	const matchPass: boolean = await compare(
		loginData.password,
		user[0].password
	);

	console.log(matchPass);

	if (!matchPass) {
		throw new AppError("Invalid credentials", 401);
	}

	// const token: string = jwt.sign(
	// 	{ admin: user[0].isAdmin },
	// 	process.env.SECRET_KEY!,
	// 	{
	// 		expiresIn: "72h",
	// 		subject: user[0].id.toString(),
	// 	}
	// );

	// return token;
};

export default loginService;

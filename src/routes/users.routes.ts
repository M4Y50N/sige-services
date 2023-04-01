import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import getAllUsersController from "../controllers/users/getAllUsers.controller";
import getUserController from "../controllers/users/getUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import ensureAdminMiddleware from "../middlewares/ensureAdmin.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";

const usersRoutes: Router = Router();

usersRoutes.get(
	"",
	ensureTokenIsValidMiddleware,
	ensureAdminMiddleware,
	getAllUsersController
);
usersRoutes.get("/:id", ensureUserExistsMiddleware, getUserController);

usersRoutes.post("", createUserController);

usersRoutes.patch("/:id", updateUserController);

usersRoutes.delete("/:id", deleteUserController);

export default usersRoutes;

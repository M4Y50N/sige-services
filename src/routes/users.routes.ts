import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import getAllUsersController from "../controllers/users/getAllUsers.controller";

const usersRoutes: Router = Router();

usersRoutes.get("", getAllUsersController);

usersRoutes.post("", createUserController);

usersRoutes.delete("/:id", deleteUserController);

export default usersRoutes;

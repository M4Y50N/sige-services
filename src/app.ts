import "express-async-errors";
import express, { Application, json } from "express";
import { handleError } from "./errors";
import loginRoutes from "./routes/login.routes";
import usersRoutes from "./routes/users.routes";

const app: Application = express();
app.use(json());

app.use("/login", loginRoutes);

app.use("/users", usersRoutes);

app.use(handleError);

export default app;

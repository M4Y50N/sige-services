import "express-async-errors";
import express, { Application, json } from "express";
import { handleError } from "./errors";
import accreditationRoutes from "./routes/accreditation.routes";

const app: Application = express();
app.use(json());

app.use("/accreditation", accreditationRoutes);

app.use(handleError);

export default app;

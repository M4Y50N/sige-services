import { Router } from "express";
import createEventsController from "../controllers/events/createEvent.controller";

const eventsRoutes: Router = Router();

eventsRoutes.post("", createEventsController);

export default eventsRoutes;

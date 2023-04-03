import { Router } from "express";
import createEventsController from "../controllers/events/createEvent.controller";
import deleteEventController from "../controllers/events/deleteEvent.controller";
import getAllEventsController from "../controllers/events/getAllEvents.controller";

const eventsRoutes: Router = Router();

eventsRoutes.get("", getAllEventsController);

eventsRoutes.post("", createEventsController);

eventsRoutes.delete("", deleteEventController);

export default eventsRoutes;

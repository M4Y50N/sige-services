import { Router } from "express";
import createEventsController from "../controllers/events/createEvent.controller";
import deleteEventController from "../controllers/events/deleteEvent.controller";
import getAllEventsController from "../controllers/events/getAllEvents.controller";
import getEventController from "../controllers/events/getEvent.controller";

const eventsRoutes: Router = Router();

eventsRoutes.get("/:id", getEventController);

eventsRoutes.get("", getAllEventsController);

eventsRoutes.post("", createEventsController);

eventsRoutes.delete("/:id", deleteEventController);

export default eventsRoutes;

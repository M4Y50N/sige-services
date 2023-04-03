import { Request, Response } from "express";
import createEventsService from "../../services/events/eventsCreate.service";

const createEventsController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const eventData = req.body;

	const eventCreated = await createEventsService(eventData);

	return res.status(200).json(eventCreated);
};

export default createEventsController;

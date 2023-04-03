import { Request, Response } from "express";
import deleteEventsService from "../../services/events/eventsDelete.service";

const deleteEventController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const eventId: number = parseInt(req.params.id);

	await deleteEventsService(eventId);

	return res.status(204).json();
};

export default deleteEventController;

import { Request, Response } from "express";
import getEventService from "../../services/events/eventsGet.service";

const getEventController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const eventId: number = parseInt(req.params.id);

	const event: any = await getEventService(eventId);

	return res.status(200).json(event);
};

export default getEventController;

import { Request, Response } from "express";
import getAllEventsService from "../../services/events/eventsGetAll.service";

const getAllEventsController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const events: any = await getAllEventsService();

	return res.status(200).json(events);
};

export default getAllEventsController;

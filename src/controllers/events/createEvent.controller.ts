import { Request, Response } from "express";

const createEventsController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	return res.status(200);
};

export default createEventsController;

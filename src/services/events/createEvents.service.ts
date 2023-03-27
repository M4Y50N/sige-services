import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Events from "../../entities/events.entity";

const createEventsService = async (payload: any): Promise<any> => {
	const eventRepo: Repository<Events> = AppDataSource.getRepository(Events);

	const createEvent = eventRepo.create({
		...payload,
	});
	await eventRepo.save(createEvent);

	return createEvent;
};

export default createEventsService;

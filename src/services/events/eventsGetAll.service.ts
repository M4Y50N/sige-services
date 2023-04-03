import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Events from "../../entities/events.entity";
import { eventsReturnSchema } from "../../schemas/events.schema";

const getAllEventsService = async (): Promise<any> => {
	const eventRepo: Repository<Events> = AppDataSource.getRepository(Events);

	const events = await eventRepo.find({
		relations: {
			eventInfos: true,
		},
	});

	const eventsReturn = eventsReturnSchema.array().parse(events);

	return eventsReturn;
};

export default getAllEventsService;

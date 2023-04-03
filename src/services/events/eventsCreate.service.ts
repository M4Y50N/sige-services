import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Events from "../../entities/events.entity";
import EventInfos from "../../entities/eventInfos.entity";
import { eventsReturnSchema } from "../../schemas/events.schema";

const createEventsService = async (payload: any): Promise<any> => {
	const eventRepo: Repository<Events> = AppDataSource.getRepository(Events),
		eventInfosRepo: Repository<EventInfos> =
			AppDataSource.getRepository(EventInfos);

	const { eventInfos: eventInfosData, ...eventData } = payload;

	const createEventInfos = eventInfosRepo.create(eventInfosData);
	await eventInfosRepo.save(createEventInfos);

	const createEvent = eventRepo.create({
		...eventData,
		eventInfos: createEventInfos,
	});
	await eventRepo.save(createEvent);

	const eventReturn = eventsReturnSchema.parse(createEvent);

	return eventReturn;
};

export default createEventsService;

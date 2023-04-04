import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { eventsReturnSchema } from "../../schemas/events.schema";
import Events from "../../entities/events.entity";

const getEventService = async (eventId: number): Promise<any> => {
	const eventRepo: Repository<Events> = AppDataSource.getRepository(Events);

	const event = await eventRepo.findOne({
		relations: {
			eventInfos: true,
		},
		where: { id: eventId },
	});

	const eventWithoutPass = eventsReturnSchema.parse(event);

	return eventWithoutPass;
};

export default getEventService;

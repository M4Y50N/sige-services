import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Events from "../../entities/events.entity";

const deleteEventsService = async (eventId: number): Promise<void> => {
	const eventRepo: Repository<Events> = AppDataSource.getRepository(Events);

	await eventRepo.delete({ id: eventId });
};

export default deleteEventsService;

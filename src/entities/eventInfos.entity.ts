import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("event_infos")
class EventInfos {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	vacancies: number;

	@Column({ type: "date" })
	registerStartDate: string;

	@Column({ type: "date" })
	registerEndDate: string;

	@Column({ type: "date" })
	eventStartDate: string;

	@Column({ type: "date" })
	eventEndDate: string;
}

export default EventInfos;

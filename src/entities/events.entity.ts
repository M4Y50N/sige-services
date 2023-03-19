import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import EventInfos from "./eventInfos.entity";
import UsersEvents from "./usersEvents.entity";

@Entity("events")
class Events {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ type: "text" })
	description: string;

	@Column({ type: "text" })
	location: string;

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@CreateDateColumn({ type: "date" })
	updatedAt: string;

	@OneToOne(() => EventInfos)
	@JoinColumn()
	eventInfos: EventInfos;

	@OneToMany(() => UsersEvents, (usersEvents) => usersEvents.events)
	usersEvents: UsersEvents[];
}

export default Events;

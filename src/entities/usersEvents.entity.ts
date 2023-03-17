import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import Events from "./events.entity";

import User from "./users.entity";

@Entity("users_events")
class UsersEvents {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({
		type: "enum",
		enum: ["participant", "owner"],
		default: "participant",
	})
	usersType: "participant" | "owner";

	@CreateDateColumn({ type: "date" })
	addedIn: string;

	@ManyToOne(() => User, (user) => user.usersEvents)
	user: User;

	@ManyToOne(() => Events, (event) => event.usersEvents)
	events: Events;
}

export default UsersEvents;

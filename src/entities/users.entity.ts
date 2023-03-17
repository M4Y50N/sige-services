import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import UserInfo from "./userInfos.entity";
import UsersEvents from "./usersEvents.entity";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 45 })
	userName: string;

	@Column({ length: 30 })
	password: string;

	@Column({ length: 30 })
	email: string;

	@Column({ default: false })
	isAdmin: boolean;

	@OneToOne(() => UserInfo)
	@JoinColumn()
	usersInfo: UserInfo;

	@OneToMany(() => UsersEvents, (usersEvent) => usersEvent.user)
	usersEvents: UsersEvents[];
}

export default User;

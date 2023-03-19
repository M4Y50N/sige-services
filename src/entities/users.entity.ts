import {
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import UserInfos from "./userInfos.entity";
import UsersEvents from "./usersEvents.entity";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 45 })
	userName: string;

	@Column({ length: 30 })
	password: string;

	@Column({ length: 30, unique: true })
	email: string;

	@Column({ default: false })
	isAdmin: boolean;

	@CreateDateColumn({ type: "date" })
	createdAt: string;

	@UpdateDateColumn({ type: "date" })
	updatedAt: string;

	@DeleteDateColumn({ type: "date" })
	deletedAt: string;

	@OneToOne(() => UserInfos)
	@JoinColumn()
	userInfos: UserInfos;

	@OneToMany(() => UsersEvents, (usersEvent) => usersEvent.user)
	usersEvents: UsersEvents[];
}

export default User;

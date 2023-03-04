import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";

@Entity("phone")
class Phone {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 11 })
	cellPhone: string;

	@Column({ length: 15, nullable: true })
	landLine: string;
}

@Entity("academic")
class Academic {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 70 })
	institution: string;

	@Column({ length: 70 })
	degree: string;

	@Column({ length: 70, nullable: true })
	lattes: string;
}

@Entity("address")
class Address {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 45 })
	address: string;

	@Column({ length: 45 })
	district: string;

	@Column({ length: 8 })
	cep: string;

	@Column({ length: 30 })
	state: string;

	@Column({ length: 30 })
	city: string;
}

@Entity("users_info")
class UserInfo {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 45 })
	name: string;

	@Column({ length: 11 })
	cpf: string;

	@Column()
	birthDate: Date;

	@OneToOne(() => Phone)
	@JoinColumn()
	phone: Phone;

	@OneToOne(() => Academic)
	@JoinColumn()
	academic: Academic;

	@OneToOne(() => Address)
	@JoinColumn()
	address: Address;
}

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
	isCoord: boolean;

	@OneToOne(() => UserInfo)
	@JoinColumn()
	usersInfo: UserInfo;
}

export { User, Academic, Address, Phone, UserInfo };

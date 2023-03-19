import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import Academic from "./academic.entity";
import Address from "./address.entity";
import Phone from "./phone.entity";

@Entity("user_infos")
class UserInfos {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 45 })
	name: string;

	@Column({ length: 11 })
	cpf: string;

	@Column({ type: "date" })
	birthDate: string;

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

export default UserInfos;

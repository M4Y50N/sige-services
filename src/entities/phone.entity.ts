import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("phone")
class Phone {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 11, unique: true })
	cellPhone: string;

	@Column({ length: 15, unique: true })
	landLine: string;
}

export default Phone;

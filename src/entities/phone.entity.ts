import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("phone")
class Phone {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ length: 11 })
	cellPhone: string;

	@Column({ length: 15, nullable: true })
	landLine: string;
}

export default Phone;

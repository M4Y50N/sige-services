import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

export default Address;

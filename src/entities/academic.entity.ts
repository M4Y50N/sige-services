import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

export default Academic;

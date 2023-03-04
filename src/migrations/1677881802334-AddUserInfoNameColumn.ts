import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserInfoNameColumn1677881802334 implements MigrationInterface {
    name = 'AddUserInfoNameColumn1677881802334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_info" ADD "name" character varying(45) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_info" DROP COLUMN "name"`);
    }

}

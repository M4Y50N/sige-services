import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1677881643757 implements MigrationInterface {
    name = 'InitialMigration1677881643757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "phone" ("id" SERIAL NOT NULL, "cellPhone" character varying(11) NOT NULL, "landLine" character varying(15), CONSTRAINT "PK_f35e6ee6c1232ce6462505c2b25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "academic" ("id" SERIAL NOT NULL, "institution" character varying(70) NOT NULL, "degree" character varying(70) NOT NULL, "lattes" character varying(70), CONSTRAINT "PK_9f6acee16f3390e38f141cbcdd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "address" character varying(45) NOT NULL, "district" character varying(45) NOT NULL, "cep" character varying(8) NOT NULL, "state" character varying(30) NOT NULL, "city" character varying(30) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_info" ("id" SERIAL NOT NULL, "cpf" character varying(11) NOT NULL, "birthDate" TIMESTAMP NOT NULL, "phoneId" integer, "academicId" integer, "addressId" integer, CONSTRAINT "REL_cde6fbac33d26d6016edca830a" UNIQUE ("phoneId"), CONSTRAINT "REL_c08754d573fd1f4288a15bf9e0" UNIQUE ("academicId"), CONSTRAINT "REL_e518efc0b0289d20510bfaf105" UNIQUE ("addressId"), CONSTRAINT "PK_9bcc2add2d98c69cbb75a0cba27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userName" character varying(45) NOT NULL, "password" character varying(30) NOT NULL, "email" character varying(30) NOT NULL, "isCoord" boolean NOT NULL DEFAULT false, "usersInfoId" integer, CONSTRAINT "REL_c1c171d2376a7b118e3a4836ac" UNIQUE ("usersInfoId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_info" ADD CONSTRAINT "FK_cde6fbac33d26d6016edca830a3" FOREIGN KEY ("phoneId") REFERENCES "phone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_info" ADD CONSTRAINT "FK_c08754d573fd1f4288a15bf9e0f" FOREIGN KEY ("academicId") REFERENCES "academic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_info" ADD CONSTRAINT "FK_e518efc0b0289d20510bfaf1056" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_c1c171d2376a7b118e3a4836ac3" FOREIGN KEY ("usersInfoId") REFERENCES "users_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_c1c171d2376a7b118e3a4836ac3"`);
        await queryRunner.query(`ALTER TABLE "users_info" DROP CONSTRAINT "FK_e518efc0b0289d20510bfaf1056"`);
        await queryRunner.query(`ALTER TABLE "users_info" DROP CONSTRAINT "FK_c08754d573fd1f4288a15bf9e0f"`);
        await queryRunner.query(`ALTER TABLE "users_info" DROP CONSTRAINT "FK_cde6fbac33d26d6016edca830a3"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "users_info"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "academic"`);
        await queryRunner.query(`DROP TABLE "phone"`);
    }

}

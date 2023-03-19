import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679193897771 implements MigrationInterface {
    name = 'InitialMigration1679193897771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "academic" ("id" SERIAL NOT NULL, "institution" character varying(70) NOT NULL, "degree" character varying(70) NOT NULL, "lattes" character varying(70), CONSTRAINT "PK_9f6acee16f3390e38f141cbcdd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "address" character varying(45) NOT NULL, "district" character varying(45) NOT NULL, "cep" character varying(8) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(30) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event_infos" ("id" SERIAL NOT NULL, "vacancies" integer NOT NULL, "registerStartDate" date NOT NULL, "registerEndDate" date NOT NULL, "eventStartDate" date NOT NULL, "eventEndDate" date NOT NULL, CONSTRAINT "PK_7a623fc4c3959aad1497a84f248" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phone" ("id" SERIAL NOT NULL, "cellPhone" character varying(11) NOT NULL, "landLine" character varying(15), CONSTRAINT "PK_f35e6ee6c1232ce6462505c2b25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_infos" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "cpf" character varying(11) NOT NULL, "birthDate" date NOT NULL, "phoneId" integer, "academicId" integer, "addressId" integer, CONSTRAINT "REL_7278178ce47139edffb26e8761" UNIQUE ("phoneId"), CONSTRAINT "REL_ced452591dbc36372302ade4c0" UNIQUE ("academicId"), CONSTRAINT "REL_b1e7826c6e000efbdb948060b2" UNIQUE ("addressId"), CONSTRAINT "PK_dff10c2d65f58909fbd2f88bff5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userName" character varying(45) NOT NULL, "password" character varying(30) NOT NULL, "email" character varying(30) NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "userInfosId" integer, CONSTRAINT "REL_4329ac939f3429725d8afbcd61" UNIQUE ("userInfosId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_events" ("id" SERIAL NOT NULL, "usersType" "public"."users_events_userstype_enum" NOT NULL DEFAULT 'participant', "addedIn" date NOT NULL DEFAULT now(), "userId" integer, "eventsId" integer, CONSTRAINT "PK_1dcc1bcf1914f93a195ad806889" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "description" text NOT NULL, "location" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "eventInfosId" integer, CONSTRAINT "REL_fa5c91b9d1a078117c01fddab9" UNIQUE ("eventInfosId"), CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD CONSTRAINT "FK_7278178ce47139edffb26e8761f" FOREIGN KEY ("phoneId") REFERENCES "phone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD CONSTRAINT "FK_ced452591dbc36372302ade4c05" FOREIGN KEY ("academicId") REFERENCES "academic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD CONSTRAINT "FK_b1e7826c6e000efbdb948060b28" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_4329ac939f3429725d8afbcd619" FOREIGN KEY ("userInfosId") REFERENCES "user_infos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_events" ADD CONSTRAINT "FK_c371d3d447bb0dfd99409808f98" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_events" ADD CONSTRAINT "FK_37c9532f961927c3ad2db6adc42" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_fa5c91b9d1a078117c01fddab9e" FOREIGN KEY ("eventInfosId") REFERENCES "event_infos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_fa5c91b9d1a078117c01fddab9e"`);
        await queryRunner.query(`ALTER TABLE "users_events" DROP CONSTRAINT "FK_37c9532f961927c3ad2db6adc42"`);
        await queryRunner.query(`ALTER TABLE "users_events" DROP CONSTRAINT "FK_c371d3d447bb0dfd99409808f98"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_4329ac939f3429725d8afbcd619"`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP CONSTRAINT "FK_b1e7826c6e000efbdb948060b28"`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP CONSTRAINT "FK_ced452591dbc36372302ade4c05"`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP CONSTRAINT "FK_7278178ce47139edffb26e8761f"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TABLE "users_events"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user_infos"`);
        await queryRunner.query(`DROP TABLE "phone"`);
        await queryRunner.query(`DROP TABLE "event_infos"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "academic"`);
    }

}

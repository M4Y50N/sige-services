import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679008557840 implements MigrationInterface {
    name = 'InitialMigration1679008557840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_events_userstype_enum" AS ENUM('participant', 'owner')`);
        await queryRunner.query(`CREATE TABLE "users_events" ("id" SERIAL NOT NULL, "usersType" "public"."users_events_userstype_enum" NOT NULL DEFAULT 'participant', "userId" integer, "eventsId" integer, CONSTRAINT "PK_1dcc1bcf1914f93a195ad806889" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_events" ADD CONSTRAINT "FK_c371d3d447bb0dfd99409808f98" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_events" ADD CONSTRAINT "FK_37c9532f961927c3ad2db6adc42" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_events" DROP CONSTRAINT "FK_37c9532f961927c3ad2db6adc42"`);
        await queryRunner.query(`ALTER TABLE "users_events" DROP CONSTRAINT "FK_c371d3d447bb0dfd99409808f98"`);
        await queryRunner.query(`DROP TABLE "users_events"`);
        await queryRunner.query(`DROP TYPE "public"."users_events_userstype_enum"`);
    }

}

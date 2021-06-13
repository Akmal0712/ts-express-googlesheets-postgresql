import {MigrationInterface, QueryRunner} from "typeorm";

export class Employees1623570765758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "employees" ("id" SERIAL NOT NULL PRIMARY KEY, "login" character varying(40) UNIQUE, "name" character varying(40), "position_id" smallint`, undefined
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`, undefined);

    }

}

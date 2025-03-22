import { MigrationInterface, QueryRunner } from "typeorm";

export class ResetsuppliersTable1742679142827 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE suppliers`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

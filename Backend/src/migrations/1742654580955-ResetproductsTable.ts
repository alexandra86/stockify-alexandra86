import { MigrationInterface, QueryRunner } from "typeorm";

export class ResetproductsTable1742654580955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE products`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

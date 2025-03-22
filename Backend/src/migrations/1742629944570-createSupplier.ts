import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSupplier1742629944570 implements MigrationInterface {
    name = 'CreateSupplier1742629944570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nameproduct\` text NOT NULL, \`codbarras\` text NOT NULL, \`description\` text NOT NULL, \`qdestoque\` text NOT NULL, \`category\` enum ('Alimentos', 'Bebidas', 'Eletrônicos', 'Outros', 'Presentes', 'Suplementos', 'Vestuário', 'Selecione') NOT NULL DEFAULT 'Selecione', \`datavalidade\` text NULL, \`imgproduct\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`suppliers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nameempresa\` text NOT NULL, \`cnpj\` varchar(14) NOT NULL, \`address\` text NOT NULL, \`telephone\` text NOT NULL, \`email\` varchar(256) NOT NULL, \`contactprincipal\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`suppliers\``);
        await queryRunner.query(`DROP TABLE \`products\``);
    }

}

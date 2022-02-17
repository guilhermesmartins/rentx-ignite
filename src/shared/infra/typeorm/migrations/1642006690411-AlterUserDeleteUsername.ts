import { MigrationInterface, QueryRunner, TableColumn } from "@shared/infra/typeorm";

export class AlterUserDeleteUsername1642006690411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'username');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users',
            new TableColumn({
                name: 'username',
                type: 'varchar',
            }),
        );
    }

}

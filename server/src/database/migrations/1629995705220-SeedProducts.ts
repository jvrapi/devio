import { MigrationInterface, QueryRunner } from 'typeorm'
import products from '../default-values/products.json'

export class SeedProducts1629995705220 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    products.forEach(async ({ name, description, price }) => {
      await queryRunner.query(
        'INSERT INTO products(name,description,price) VALUES ($1, $2, $3)',
        [name, description, price]
      )
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM products CASCADE')
  }
}

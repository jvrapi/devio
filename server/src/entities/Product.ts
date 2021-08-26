import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number
}

export { Product }

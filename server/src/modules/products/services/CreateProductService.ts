import { getRepository } from 'typeorm'
import { Product } from '../../../entities/Product'

type IProduct = {
  name: string
  description: string
  price: number
}

class CreateProductService {
  async execute(product: IProduct) {
    const repository = getRepository(Product)
    try {
      const newProduct = repository.create(product)
      await repository.save(newProduct)
      return newProduct
    } catch (error) {
      throw new Error('Error when trying create product')
    }
  }
}
export { CreateProductService }

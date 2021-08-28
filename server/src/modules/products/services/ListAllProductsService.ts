import { getRepository } from 'typeorm'
import { Product } from '../../../entities/Product'

class ListAllProductsService {
  async execute() {
    const repository = getRepository(Product)

    try {
      const products = await repository.find()

      return products
    } catch {
      throw new Error('Error when try list all products')
    }
  }
}

export { ListAllProductsService }

import { getRepository } from 'typeorm'
import { Product } from '../../../entities/Product'

class ListProductsByIdService {
  async execute(id: number) {
    const repository = getRepository(Product)
    try {
      const products = await repository.find({ where: { id } })
      return products
    } catch (error) {
      throw new Error('Error when try list products by id')
    }
  }
}
export { ListProductsByIdService }

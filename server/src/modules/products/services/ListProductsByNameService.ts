import { getRepository } from 'typeorm'
import { Product } from '../../../entities/Product'
import { removeAccents } from '../../../utils/functions'

class ListProductsByNameService {
  async execute(name: string) {
    const repository = getRepository(Product)
    try {
      const products = await repository.find()
      const productsFiltered = products.filter(product =>
        removeAccents(product.name)
          .toLowerCase()
          .includes(removeAccents(name).toLowerCase())
      )

      return productsFiltered
    } catch {
      throw new Error('Error when try list products by name')
    }
  }
}

export { ListProductsByNameService }

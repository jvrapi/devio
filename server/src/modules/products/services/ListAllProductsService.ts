import { getRepository } from 'typeorm'
import { Product } from '../../../entities/Product'
import { removeAccents } from '../../../utils/functions'

class ListAllProductsService {
  async execute(name: string, id: number, limit?: number) {
    const repository = getRepository(Product)
    let products: Product[]
    try {
      products = await repository.find({
        take: limit
      })

      if (name) {
        products = await repository.find()
        const productsFiltered = products.filter(product =>
          removeAccents(product.name)
            .toLowerCase()
            .includes(removeAccents(name).toLowerCase())
        )

        return productsFiltered
      }

      if (id) {
        products = await repository.find({
          where: {
            id
          },
          take: limit
        })
      }

      return products
    } catch {
      throw new Error('Error when try list all products')
    }
  }
}

export { ListAllProductsService }

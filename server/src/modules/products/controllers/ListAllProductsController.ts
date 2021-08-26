import { Request, Response } from 'express'
import { ListAllProductsService } from '../services/ListAllProductsService'

class ListAllProductsController {
  async handle(request: Request, response: Response) {
    const { limit, name, id } = request.query
    const listAllProductsService = new ListAllProductsService()
    const products = await listAllProductsService.execute(
      name ? name.toString() : '',
      +id,
      +limit
    )
    return response.json(products)
  }
}
export { ListAllProductsController }

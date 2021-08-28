import { Request, Response } from 'express'
import { ListProductsByNameService } from '../services/ListProductsByNameService'

class ListProductsByNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.params
    const listProductsByNameService = new ListProductsByNameService()
    const products = await listProductsByNameService.execute(name)
    return response.json(products)
  }
}

export { ListProductsByNameController }

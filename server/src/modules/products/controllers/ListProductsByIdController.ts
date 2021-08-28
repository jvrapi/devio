import { Request, Response } from 'express'
import { ListProductsByIdService } from '../services/ListProductsByIdService'

class ListProductsByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const listProductsByIdService = new ListProductsByIdService()
    const products = await listProductsByIdService.execute(+id)
    return response.json(products)
  }
}

export { ListProductsByIdController }

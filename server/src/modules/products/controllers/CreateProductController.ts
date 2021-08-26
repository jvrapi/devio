import { Request, Response } from 'express'
import { CreateProductService } from '../services/CreateProductService'

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body
    const createProductService = new CreateProductService()
    const product = await createProductService.execute({
      name,
      description,
      price
    })

    return response.status(201).json(product)
  }
}

export { CreateProductController }

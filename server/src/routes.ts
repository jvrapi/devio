import { Router } from 'express'
import { CreateProductController } from './modules/products/controllers/CreateProductController'
import { ListAllProductsController } from './modules/products/controllers/ListAllProductsController'

const routes = Router()
const createProductController = new CreateProductController()
const listAllProductsController = new ListAllProductsController()

routes.post('/products', createProductController.handle)
routes.get('/products', listAllProductsController.handle)

export { routes }

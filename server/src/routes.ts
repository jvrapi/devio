import { Router } from 'express'
import { CreateProductController } from './modules/products/controllers/CreateProductController'
import { ListAllProductsController } from './modules/products/controllers/ListAllProductsController'
import { ListProductsByIdController } from './modules/products/controllers/ListProductsByIdController'
import { ListProductsByNameController } from './modules/products/controllers/ListProductsByNameController'

const routes = Router()
const createProductController = new CreateProductController()
const listAllProductsController = new ListAllProductsController()
const listProductByNameController = new ListProductsByNameController()
const listProductByIdController = new ListProductsByIdController()

routes.post('/products', createProductController.handle)
routes.get('/products', listAllProductsController.handle)
routes.get('/products/name/:name', listProductByNameController.handle)
routes.get('/products/code/:id', listProductByIdController.handle)

export { routes }

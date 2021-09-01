import { app } from './app'
import './database/connection'
import { Server } from 'socket.io'
import { ListAllProductsService } from './modules/products/services/ListAllProductsService'
import { ListProductsByNameService } from './modules/products/services/ListProductsByNameService'
import { ListProductsByIdService } from './modules/products/services/ListProductsByIdService'
const PORT = process.env.PORT

const httpServer = app.listen(PORT, () =>
  console.log('🖥  server is running on port ' + PORT)
)

const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

io.on('connection', socket => {
  socket.on('products.get', async () => {
    const listAllProductsService = new ListAllProductsService()
    const products = await listAllProductsService.execute()
    socket.emit('products.get', products)
  })

  socket.on('products.get.name', async (name: string) => {
    const listProductsByNameService = new ListProductsByNameService()
    const products = await listProductsByNameService.execute(name)
    socket.emit('products.get.name', products)
  })

  socket.on('products.get.id', async (id: number) => {
    const listProductsByIdService = new ListProductsByIdService()
    const products = await listProductsByIdService.execute(id)
    socket.emit('products.get.id', products)
  })

  socket.on('orders.update', data => {
    const orders = data.map(order => Object.assign(order, { id: data.length }))
    io.emit('orders.update', orders)
  })
})

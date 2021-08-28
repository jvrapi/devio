import { AxiosResponse } from 'axios'
import { api } from './Api'

export type Product = {
  id: number
  name: string
  description: string
  price: number
}

const baseUrl = '/products'

const productsService = {
  async getProducts(): Promise<AxiosResponse<Product[]>> {
    const response = api.get(`${baseUrl}`)
    return response
  }
}

export { productsService }

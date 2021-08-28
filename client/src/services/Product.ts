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
  },
  async getProductsByName(name: string): Promise<AxiosResponse<Product[]>> {
    const response = api.get(`${baseUrl}/name/${name}`)
    return response
  },
  async getProductsById(id: number): Promise<AxiosResponse<Product[]>> {
    const response = api.get(`${baseUrl}/code/${id}`)
    return response
  }
}

export { productsService }

import { AxiosResponse } from 'axios'
import { api } from './Api'

export type IProduct = {
  id: number
  name: string
  description: string
  price: number
}

const baseUrl = '/products'

const productsService = {
  async getProducts(): Promise<AxiosResponse<IProduct[]>> {
    const response = api.get(`${baseUrl}`)
    return response
  }
}

export { productsService }

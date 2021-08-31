import React, { useEffect, useState } from 'react'

import { ListProducts } from '../../components/ListProducts'
import { Product, productsService } from '../../services/Product'

import { Container, Main, Title } from './styles'
import { Header } from '../../components/Header'
import { ListOrder } from '../../components/ListOrder'

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchText, setSearchText] = useState('')

  const getProducts = async () => {
    const { data } = await productsService.getProducts()
    setProducts(data)
  }

  const searchProduct = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchText(value)
    if (!value) {
      await getProducts()
    } else if (isNaN(parseInt(value))) {
      const { data } = await productsService.getProductsByName(value)
      setProducts(data)
    } else {
      const { data } = await productsService.getProductsById(+value)
      setProducts(data)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Header />
      <Title>Novo Pedido</Title>
      <Main>
        <ListProducts
          data={products}
          searchText={searchText}
          searchProduct={searchProduct}
        />

        <ListOrder />
      </Main>
    </Container>
  )
}

export { Home }

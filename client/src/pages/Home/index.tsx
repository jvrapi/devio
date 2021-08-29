import React, { useEffect, useRef, useState } from 'react'

import { ListProducts } from '../../components/ListProducts'
import { Product, productsService } from '../../services/Product'
import { useOrders } from '../../hooks/useOrders'

import { Container, Main, Menu, Order } from './styles'
import { Header } from '../../components/Header'
import { ListOrder } from '../../components/ListOrder'

const Home: React.FC = () => {
  const { order } = useOrders()
  const [amountProducts, setAmountProducts] = useState(0)
  const [products, setProducts] = useState<Product[]>([])
  const [searchText, setSearchText] = useState('')
  const initialRender = useRef(true)

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
    if (initialRender.current) {
      initialRender.current = false
    } else {
      let amount = 0
      order?.products.forEach(product => (amount += product.amount))
      setAmountProducts(amount)
    }
  }, [order])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Header />
      <Main>
        <Menu>
          <ListProducts
            data={products}
            searchText={searchText}
            searchProduct={searchProduct}
          />
        </Menu>
        <Order>
          <ListOrder />
        </Order>
      </Main>
    </Container>
  )
}

export { Home }

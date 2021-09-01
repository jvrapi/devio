import React, { useEffect, useState } from 'react'

import { ListProducts } from '../../components/ListProducts'

import { Container, Main, Title } from './styles'
import { Header } from '../../components/Header'
import { ListOrder } from '../../components/ListOrder'

import { socket } from '../../services/Socket'
import { CloseOrder } from '../../components/CloseOrder'

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchText, setSearchText] = useState('')

  const getProducts = () => {
    socket.emit('products.get')
    socket.on('products.get', data => setProducts(data))
  }

  const searchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchText(value)
    if (!value) {
      getProducts()
    } else if (isNaN(parseInt(value))) {
      socket.emit('products.get.name', value)
      socket.on('products.get.name', data => setProducts(data))
    } else {
      socket.emit('products.get.id', +value)
      socket.on('products.get.id', data => setProducts(data))
    }
  }

  useEffect(() => {
    getProducts()
    return () => {
      socket.off('products.get', getProducts)
    }
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
        <CloseOrder />
      </Main>
    </Container>
  )
}

export { Home }

import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import { RiFileEditLine } from 'react-icons/ri'

import { ListProducts } from '../../components/ListProducts'
import { Product, productsService } from '../../services/Product'
import { useOrders } from '../../hooks/useOrders'

import {
  Container,
  Main,
  RightContainer,
  SearchBox,
  SearchInput,
  TotalItemsContainer,
  TotalItems,
  TotalOrder
} from './styles'
import { Header } from '../../components/Header'

const Home: React.FC = () => {
  const history = useHistory()
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

  const navigateToCheckoutPage = () => {
    history.push('/checkout')
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
      <Header>
        <RightContainer>
          <TotalOrder onClick={navigateToCheckoutPage}>
            <RiFileEditLine size={30} />
            <TotalItemsContainer>
              <TotalItems>{amountProducts}</TotalItems>
            </TotalItemsContainer>
          </TotalOrder>
          <SearchBox>
            <SearchInput
              placeholder="pesquisar produto"
              value={searchText}
              onChange={searchProduct}
            />
            <GoSearch size={25} />
          </SearchBox>
        </RightContainer>
      </Header>
      <Main>
        <ListProducts data={products} />
      </Main>
    </Container>
  )
}

export { Home }

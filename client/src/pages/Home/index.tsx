import React, { useEffect, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { RiFileEditLine } from 'react-icons/ri'
import {
  Container,
  Header,
  Main,
  RightContainer,
  SearchBox,
  SearchInput,
  Title,
  TotalItemsContainer,
  TotalItems,
  TotalOrder
} from './styles'

import { ListProducts } from '../../components/ListProducts'
import { IProduct, productsService } from '../../services/Product'

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const getProducts = async () => {
    const { data } = await productsService.getProducts()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Header>
        <Title>Devs Rest</Title>
        <RightContainer>
          <TotalOrder>
            <RiFileEditLine size={30} />
            <TotalItemsContainer>
              <TotalItems>0</TotalItems>
            </TotalItemsContainer>
          </TotalOrder>
          <SearchBox>
            <SearchInput placeholder="pesquisar produto" />
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

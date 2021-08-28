import React from 'react'
import { IProduct } from '../services/Product'
import { IoIosRestaurant } from 'react-icons/io'
import {
  Container,
  ProductContainer,
  ProductBox,
  ProductBoxHeader,
  ProductBoxMain,
  ProductName,
  ProductBoxFooter,
  ProductDescription,
  ProductPrice,
  AddProductToOrderButton
} from './styles'

type Props = {
  data: IProduct[]
}

const ListProducts: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.slice(0, 5).map(product => (
        <ProductContainer key={product.id}>
          <ProductBox>
            <ProductBoxHeader>
              <ProductName>{product.name}</ProductName>
            </ProductBoxHeader>
            <ProductBoxMain>
              <IoIosRestaurant size={70} />
            </ProductBoxMain>
            <ProductBoxFooter>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductBoxFooter>
          </ProductBox>
          <ProductPrice>R$ {product.price}</ProductPrice>
          <AddProductToOrderButton>Adicionar produto</AddProductToOrderButton>
        </ProductContainer>
      ))}
    </Container>
  )
}

export { ListProducts }

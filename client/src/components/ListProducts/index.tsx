import React from 'react'
import { Product } from '../../services/Product'
import { GoSearch } from 'react-icons/go'

import {
  Container,
  Title,
  Menu,
  SearchInput,
  SearchBox,
  Main,
  Products,
  ProductName,
  ProductPrice,
  ProductRow,
  LeftContainer,
  RightContainer
} from './styles'
import { useOrders } from '../../hooks/useOrders'
import { Order, OrderProducts } from '../../contexts/OrdersContext'
import { formatPrice } from '../../utils/formatters'

type Props = {
  data: Product[]
  searchText: string
  searchProduct(event: React.ChangeEvent<HTMLInputElement>): void
}

const ListProducts: React.FC<Props> = ({ data, searchText, searchProduct }) => {
  const { order, orders, updateOrder } = useOrders()

  const addProductToOrder = (product: Product) => {
    const orderState: Order = { ...order } as Order

    orderState.id = orderState.id ? orderState.id : orders.length + 1

    const productAlreadyAdded = orderState.products
      ?.filter(productInserted => productInserted.id === product.id)
      .shift()

    if (productAlreadyAdded) {
      productAlreadyAdded.amount += 1
    } else {
      const insertProduct: OrderProducts = {
        price: product.price,
        id: product.id,
        name: product.name,
        amount: 1
      }

      orderState.products = orderState.products ? [...orderState.products] : []
      orderState.products.push(insertProduct)
      orderState.ready = false
      orderState.withdrawn = false
    }

    updateOrder(orderState)
  }

  return (
    <Container>
      <Title>Cardapio</Title>
      <Menu>
        <SearchBox>
          <SearchInput
            placeholder="pesquisar produto"
            value={searchText}
            onChange={searchProduct}
          />
          <GoSearch size={25} />
        </SearchBox>
        <Main>
          {data.slice(0, 17).map(product => (
            <Products
              key={product.id}
              onClick={() => addProductToOrder(product)}
              title="Adicionar produto ao pedido"
            >
              <ProductRow>
                <LeftContainer>
                  <ProductName>{product.name}</ProductName>
                </LeftContainer>

                <RightContainer>
                  <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                </RightContainer>
              </ProductRow>
            </Products>
          ))}
        </Main>
      </Menu>
    </Container>
  )
}

export { ListProducts }

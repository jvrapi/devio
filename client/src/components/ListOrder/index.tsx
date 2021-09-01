import React from 'react'
import { useOrders } from '../../hooks/useOrders'
import { TiTimesOutline } from 'react-icons/ti'

import {
  Container,
  Main,
  Title,
  OrderDetails,
  LeftContainer,
  ProductAmount,
  ProductName,
  ProductRow,
  RightContainer,
  TotalProduct
} from './styles'
import { Order } from '../../contexts/OrdersContext'

const ListOrder: React.FC = () => {
  const { order, updateOrder } = useOrders()

  const removeProductFromOrder = (productId: number) => {
    const orderState = { ...order } as Order
    const orderProducts = orderState.products.filter(
      product => product.id !== productId
    )
    orderState.products = orderProducts
    updateOrder(orderState)
  }

  return (
    <Container>
      <Title>Pedido</Title>
      <OrderDetails>
        <Main>
          {order?.products.map(product => (
            <ProductRow key={product.id}>
              <LeftContainer>
                <ProductName>{product.name}</ProductName>
              </LeftContainer>
              <RightContainer>
                <ProductAmount>{product.amount}x</ProductAmount>

                <TotalProduct>
                  Total: R${product.price * product.amount}
                </TotalProduct>
                <TiTimesOutline
                  size={25}
                  onClick={() => removeProductFromOrder(product.id)}
                  color="#FF605c"
                  title="Remover produto do pedido"
                  style={{ cursor: 'pointer' }}
                />
              </RightContainer>
            </ProductRow>
          ))}
        </Main>
      </OrderDetails>
    </Container>
  )
}

export { ListOrder }

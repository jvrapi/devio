import React from 'react'
import { useOrders } from '../../hooks/useOrders'
import { TiTimesOutline } from 'react-icons/ti'
import { IoIosPerson } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import {
  Container,
  Main,
  Footer,
  Title,
  Order,
  LeftContainer,
  ProductAmount,
  ProductName,
  ProductRow,
  RightContainer,
  TotalProduct,
  Change,
  ClientName,
  FinishOrder,
  ReceivedMoney,
  TotalOrder,
  ReceivedMoneyInput,
  ClientNameInput
} from './styles'

const ListOrder: React.FC = () => {
  const { order } = useOrders()

  const totalOrderSum = () => {
    let sum = 0
    order?.products.forEach(product => (sum += product.price * product.amount))
    return sum
  }
  return (
    <Container>
      <Title>Pedido</Title>
      <Order>
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
                  onClick={() => alert('Product removed')}
                  color="#FF605c"
                  title="Remover produto do pedido"
                />
              </RightContainer>
            </ProductRow>
          ))}
        </Main>
        <Footer>
          <TotalOrder>
            Total: R$
            {totalOrderSum()}
          </TotalOrder>
          <ClientName>
            <ClientNameInput placeholder="Nome do cliente" />
            <IoIosPerson />
          </ClientName>
          <ReceivedMoney>
            <ReceivedMoneyInput
              placeholder="Insira o valor recebido"
              required
            />
            <GiReceiveMoney size={35} />
          </ReceivedMoney>
          <Change>Troco: R$</Change>

          <FinishOrder>Finalizar pedido</FinishOrder>
        </Footer>
      </Order>
    </Container>
  )
}

export { ListOrder }

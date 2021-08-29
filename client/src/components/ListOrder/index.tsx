import React, { useCallback, useState } from 'react'
import { useOrders } from '../../hooks/useOrders'
import { TiTimesOutline } from 'react-icons/ti'
import { IoIosPerson } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import NumberFormat from 'react-number-format'
import {
  Container,
  Main,
  Footer,
  Title,
  OrderDetails,
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
import { Order } from '../../contexts/OrdersContext'

const initialValues = {
  clientName: '',
  receivedMoney: ''
}

const ListOrder: React.FC = () => {
  const { order, updateOrder } = useOrders()
  const [orderDetails, setOrderDetails] = useState(initialValues)

  const totalOrderSum = () => {
    let sum = 0
    order?.products.forEach(product => (sum += product.price * product.amount))
    return sum
  }

  const removeProductFromOrder = (productId: number) => {
    const orderState = { ...order } as Order
    const orderProducts = orderState.products.filter(
      product => product.id !== productId
    )
    orderState.products = orderProducts
    updateOrder(orderState)
  }

  const updateFieldValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setOrderDetails({ ...orderDetails, [name]: value })
  }

  const currencyUpdate = (event: any, maskedvalue: any, floatvalue: any) => {
    setOrderDetails({ ...orderDetails, receivedMoney: floatvalue })
  }

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(\d{2})$/, '$1,$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

    e.currentTarget.value = value
    return e
  }, [])

  const finishOrder = () => {
    console.log(orderDetails)
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
                />
              </RightContainer>
            </ProductRow>
          ))}
        </Main>
        <Footer>
          <TotalOrder>
            Total:
            <NumberFormat
              value={totalOrderSum()}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'R$'}
            />
          </TotalOrder>
          <ClientName>
            <ClientNameInput
              value={orderDetails.clientName}
              name="clientName"
              onChange={updateFieldValues}
              placeholder="Nome do cliente"
            />
            <IoIosPerson size={35} />
          </ClientName>
          <ReceivedMoney>
            <ReceivedMoneyInput
              value={orderDetails.receivedMoney}
              name="receivedMoney"
              placeholder="Insira o valor recebido"
              onKeyUp={handleKeyUp}
              required
              onChangeEvent={currencyUpdate}
            />
            <GiReceiveMoney size={35} />
          </ReceivedMoney>
          <Change>Troco: R$</Change>

          <FinishOrder onClick={finishOrder}>Finalizar pedido</FinishOrder>
        </Footer>
      </OrderDetails>
    </Container>
  )
}

export { ListOrder }

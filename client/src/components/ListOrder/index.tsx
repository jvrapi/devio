import React, { useState } from 'react'
import { useOrders } from '../../hooks/useOrders'
import { TiTimesOutline } from 'react-icons/ti'
import { IoIosPerson } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import { toast } from 'react-toastify'
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
import { formatPrice } from '../../utils/formatters'

const initialValues = {
  clientName: '',
  receivedMoney: ''
}

const ListOrder: React.FC = () => {
  const { order, updateOrder, updateOrders, orders } = useOrders()
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

  const currencyUpdate = (value: string | undefined) => {
    setOrderDetails({ ...orderDetails, receivedMoney: value as string })
  }

  const calculateChange = () => {
    const totalOrder = +totalOrderSum()
    if (+orderDetails.receivedMoney < totalOrder) {
      return 0
    } else {
      return formatPrice(+orderDetails.receivedMoney - totalOrder)
    }
  }

  const finishOrder = () => {
    const { clientName, receivedMoney } = orderDetails
    const errors: string[] = []

    if (!clientName) {
      errors.push('Por favor, insira o nome do cliente')
    }
    if (!receivedMoney) {
      errors.push('Por favor, insira o valor recebido')
    }
    if (order?.products.length === 0 || order?.products === undefined) {
      errors.push('Por favor, insira algum produto antes de finalizar o pedido')
    }

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error))
    } else {
      orders.push({ ...order, clientName } as Order)
      updateOrders(orders, 'Pedido finalizado e encaminhado a cozinha!')

      const orderState = { ...order } as Order
      orderState.id = orders.length + 1
      orderState.products = []
      updateOrder(orderState)
    }

    setOrderDetails(initialValues)
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
        <Footer>
          <TotalOrder>Total: {formatPrice(totalOrderSum())}</TotalOrder>
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
              onValueChange={currencyUpdate}
              decimalSeparator="."
              groupSeparator=","
              prefix="R$ "
            />
            <GiReceiveMoney size={35} />
          </ReceivedMoney>
          <Change>Troco: {calculateChange()}</Change>

          <FinishOrder onClick={finishOrder}>Finalizar pedido</FinishOrder>
        </Footer>
      </OrderDetails>
    </Container>
  )
}

export { ListOrder }

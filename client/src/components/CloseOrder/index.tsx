import React, { useState } from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { GrNotes } from 'react-icons/gr'
import { IoIosPerson } from 'react-icons/io'
import { MdAttachMoney } from 'react-icons/md'
import { BsCreditCard } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { Order } from '../../contexts/OrdersContext'
import { useOrders } from '../../hooks/useOrders'
import { formatPrice } from '../../utils/formatters'
import { CurrencyInput } from '../CurrencyInput'
import { InputComponent } from '../Input'
import Pix from '../../assets/icons/pix.svg'
import {
  Change,
  Container,
  FinishOrder,
  TotalOrder,
  Title,
  Main,
  IconsContainer,
  PixIcon,
  IconsTitle,
  IconsContainerMain
} from './styles'

const initialValues = {
  clientName: '',
  receivedMoney: '',
  note: ''
}

const CloseOrder: React.FC = () => {
  const { order, updateOrder, finishOrder } = useOrders()
  const [orderDetails, setOrderDetails] = useState(initialValues)
  const [showCurrencyInput, setShowCurrencyInput] = useState(false)
  const [showIconsContainer, setShowIconsContainer] = useState(true)

  const totalOrderSum = () => {
    let sum = 0
    order?.products.forEach(product => (sum += product.price * product.amount))
    return sum
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

  const closeOrder = () => {
    const { clientName, receivedMoney, note } = orderDetails
    const errors: string[] = []

    if (!clientName) {
      errors.push('Por favor, insira o nome do cliente')
    }
    if (!receivedMoney) {
      errors.push('Por favor, insira o valor recebido')
    }
    if (+receivedMoney < totalOrderSum()) {
      errors.push('Valor inserido é menor que o total do pedido')
    }
    if (order?.products.length === 0 || order?.products === undefined) {
      errors.push('Por favor, insira algum produto antes de finalizar o pedido')
    }

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error))
    } else {
      finishOrder({ ...order, clientName, note } as Order)

      const orderState = { ...order } as Order
      orderState.products = []
      orderState.id = Math.floor(Math.random() * 1000 + 100)
      updateOrder(orderState)
      setOrderDetails(initialValues)
    }
  }

  const paymentSelected = (payment: string) => {
    const orderState = { ...order }
    orderState.payment = payment
    updateOrder(orderState as Order)
    if (payment === 'dinheiro') {
      setShowCurrencyInput(!showCurrencyInput)
    }
    setShowIconsContainer(!showIconsContainer)
  }

  return (
    <Container>
      <Title>Checkout</Title>
      <Main>
        <TotalOrder>Total: {formatPrice(totalOrderSum())}</TotalOrder>

        <InputComponent
          value={orderDetails.clientName}
          name="clientName"
          onChange={updateFieldValues}
          placeholder="Nome do cliente"
          icon={<IoIosPerson size={30} />}
        />

        <InputComponent
          value={orderDetails.note}
          name="note"
          placeholder="Observação"
          onChange={updateFieldValues}
          icon={<GrNotes size={30} />}
        />

        {showIconsContainer && (
          <IconsContainer>
            <IconsTitle>Formas de pagamento:</IconsTitle>
            <IconsContainerMain>
              <MdAttachMoney
                size={30}
                style={{ cursor: 'pointer' }}
                title="Dinheiro"
                onClick={() => paymentSelected('dinheiro')}
              />
              <BsCreditCard
                size={30}
                style={{ cursor: 'pointer' }}
                title="Cartão"
                onClick={() => paymentSelected('cartão')}
              />
              <PixIcon
                src={Pix}
                title="Pix"
                onClick={() => paymentSelected('pix')}
              />
            </IconsContainerMain>
          </IconsContainer>
        )}

        {showCurrencyInput && (
          <>
            <CurrencyInput
              value={orderDetails.receivedMoney}
              name="receivedMoney"
              placeholder="Insira o valor recebido"
              onValueChange={currencyUpdate}
              decimalSeparator="."
              groupSeparator=","
              prefix="R$ "
              icon={<GiReceiveMoney size={35} />}
            />

            <Change>Troco: {calculateChange()}</Change>
          </>
        )}

        <FinishOrder onClick={closeOrder}>Finalizar pedido</FinishOrder>
      </Main>
    </Container>
  )
}

export { CloseOrder }

import React, { useState } from 'react'
import { BsCreditCard } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { GrNotes } from 'react-icons/gr'
import { IoIosPerson } from 'react-icons/io'
import { toast } from 'react-toastify'
import Pix from '../../assets/icons/pix.svg'
import { Order } from '../../contexts/OrdersContext'
import { useOrders } from '../../hooks/useOrders'
import { formatPrice } from '../../utils/formatters'
import { CurrencyInput } from '../CurrencyInput'
import { InputComponent } from '../Input'
import { InputMask } from '../InputMask'
import {
  Button,
  CardField,
  Change,
  Container,
  FinishOrder,
  IconsContainer,
  IconsContainerMain,
  IconsTitle,
  InputContainer,
  Main,
  MoneyText,
  PaymentInput,
  PaymentMethods,
  PaymentMethodsScreen,
  PaymentScreen,
  PaymentScreenFooter,
  PaymentScreenHeader,
  PaymentScreenHeaderText,
  PaymentScreenTitle,
  PixIcon,
  Title,
  TotalOrder,
  UpdateOrder
} from './styles'

const initialValues = {
  clientName: '',
  note: '',
  payment: {
    card: {
      number: '',
      expirationDate: '',
      securityCode: '',
      receivedMoney: ''
    },
    pix: {
      receivedMoney: ''
    },
    money: {
      receivedMoney: ''
    }
  }
}

const paymentsMethodsData = [
  {
    title: 'dinheiro',
    name: 'money',
    selected: false,
    icon: <FaRegMoneyBillAlt size={50} />
  },

  {
    title: 'pix',
    name: 'pix',
    selected: false,
    icon: <PixIcon src={Pix} />
  },
  {
    title: 'cartão',
    name: 'card',
    selected: false,
    icon: <BsCreditCard size={50} />
  }
]

const CloseOrder: React.FC = () => {
  const { order, updateOrder, finishOrder } = useOrders()
  const [orderDetails, setOrderDetails] = useState(initialValues)
  const [paymentMethods, setPaymentMethods] = useState(paymentsMethodsData)
  const [showPaymentScreen, setShowPaymentScreen] = useState(false)

  const totalOrderSum = () => {
    let sum = 0
    order?.products.forEach(product => (sum += product.price * product.amount))
    return sum
  }

  const updateFieldValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setOrderDetails({ ...orderDetails, [name]: value })
  }

  const updateCardPaymentValues = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    const state = { ...orderDetails }
    state.payment.card[name] = value
    setOrderDetails(state)
  }

  const currencyUpdate = (
    value: string | undefined,
    name: string | undefined
  ) => {
    const state = { ...orderDetails }
    state.payment[name as string].receivedMoney = value as string
    setOrderDetails(state)
  }

  const receivedMoneySum = () => {
    const { card, pix, money } = orderDetails.payment
    const totalReceivedMoney =
      +card.receivedMoney + +pix.receivedMoney + +money.receivedMoney
    return totalReceivedMoney
  }

  const calculateChange = () => {
    const totalOrder = +totalOrderSum()

    const totalReceivedMoney = receivedMoneySum()

    if (+totalReceivedMoney < totalOrder || isNaN(totalReceivedMoney)) {
      return 0
    } else {
      return formatPrice(totalReceivedMoney - totalOrder)
    }
  }

  const closeOrder = () => {
    const totalOrder = +totalOrderSum()
    const { clientName, note } = orderDetails
    const errors: string[] = []
    const totalReceivedMoney = receivedMoneySum()
    const cardPaymentSelect = paymentMethods
      .filter(({ name }) => name === 'card')
      .shift()?.selected

    /*
      Verifica se a opção de cartão foi selecionada
      Caso ela seja selecionada, é verificado se os campos do objeto estão vazio.
      Se estiverem, ele gera um erro
    */
    if (cardPaymentSelect) {
      const keys = Object.keys(orderDetails.payment.card)
      let countErros = 0
      keys.forEach(key => {
        if (orderDetails.payment.card[key] === '') {
          countErros += 1
        }

        // Verifica o tamanho do numero do cartao
        if (
          key === 'number' &&
          orderDetails.payment.card[key].replace(/\D/g, '').length < 16
        ) {
          countErros += 1
        }

        // Verifica o tamanho do codigo de segurança
        if (
          key === 'securityCode' &&
          orderDetails.payment.card[key].replace(/\D/g, '').length < 3
        ) {
          countErros += 1
        }

        // Verifica o tamanho da validade do cartao
        if (
          key === 'expirationDate' &&
          orderDetails.payment.card[key].replace(/\D/g, '').length < 6
        ) {
          countErros += 1
        }
      })

      if (countErros > 0) {
        errors.push('Informações do cartão incorretas')
      }
    }

    if (totalReceivedMoney < totalOrder) {
      errors.push('Total recebido é inferior ao total da lista')
    }

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error))
    } else {
      const payment = { ...orderDetails.payment }
      payment.card.number = payment.card.number.replace(/\D/g, '')
      payment.card.expirationDate = payment.card.expirationDate.replace(
        /\D/g,
        ''
      )

      finishOrder({
        ...order,
        clientName,
        note,
        payment
      } as Order)

      const orderState = { ...order } as Order
      orderState.products = []
      orderState.id = Math.floor(Math.random() * 1000 + 100)
      orderState.payment = initialValues.payment
      const clearPaymentMethods = paymentMethods.map(payment => {
        payment.selected = false
        if (payment.name === 'card') {
          const keys = Object.keys(orderDetails.payment.card)
          keys.forEach(key => (orderDetails.payment.card[key] = ''))
        } else {
          orderDetails.payment[payment.name].receivedMoney = ''
        }
        return payment
      })
      updateOrder(orderState)
      setOrderDetails(initialValues)
      setShowPaymentScreen(false)
      setPaymentMethods(clearPaymentMethods)
    }
  }

  const paymentSelected = (name: string) => {
    const updatePaymentState = paymentMethods.map(payment => {
      if (name === payment.name) {
        payment.selected = !payment.selected
      }
      return payment
    })
    if (name === 'card') {
      const keys = Object.keys(orderDetails.payment.card)
      keys.forEach(key => (orderDetails.payment.card[key] = ''))
    } else {
      orderDetails.payment[name].receivedMoney = ''
    }
    setPaymentMethods(updatePaymentState)
  }

  const upperCase = (str: string) => {
    return str[0].toUpperCase() + str.substr(1)
  }

  const verifyOrderDetails = () => {
    const { clientName } = orderDetails
    const errors: string[] = []

    const selectedPayment = paymentMethods.filter(({ selected }) => selected)

    if (!clientName) {
      errors.push('Por favor, insira o nome do cliente')
    }
    if (order?.products.length === 0 || order?.products === undefined) {
      errors.push('Por favor, insira algum produto antes de finalizar o pedido')
    }

    if (selectedPayment.length === 0) {
      errors.push('Por favor, selecione um método de pagamento')
    }

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error))
    } else {
      setShowPaymentScreen(true)
    }
  }

  return (
    <Container>
      <Title>Checkout</Title>
      {!showPaymentScreen && (
        <Main>
          <TotalOrder>Total: {formatPrice(totalOrderSum())}</TotalOrder>
          <InputContainer>
            <InputComponent
              value={orderDetails.clientName}
              name="clientName"
              onChange={updateFieldValues}
              placeholder="Nome do cliente"
              icon={<IoIosPerson size={30} color="#000000" />}
            />

            <InputComponent
              value={orderDetails.note}
              name="note"
              placeholder="Observação"
              onChange={updateFieldValues}
              icon={<GrNotes size={30} />}
            />
          </InputContainer>

          <IconsContainer>
            <IconsTitle>Formas de pagamento:</IconsTitle>
            <IconsContainerMain>
              {paymentMethods.map(({ icon, selected, title, name }, i) => (
                <PaymentMethods key={i} title={upperCase(title)}>
                  <PaymentInput
                    type="checkbox"
                    onChange={() => paymentSelected(name)}
                    checked={selected}
                  />
                  {icon}
                </PaymentMethods>
              ))}
            </IconsContainerMain>
          </IconsContainer>

          <Button onClick={verifyOrderDetails}>Realizar pagamento</Button>
        </Main>
      )}
      {showPaymentScreen && (
        <Main>
          <PaymentScreenHeader>
            <PaymentScreenHeaderText>
              Total da lista: {formatPrice(totalOrderSum())}
            </PaymentScreenHeaderText>
            <PaymentScreenHeaderText>
              Total recebido:{' '}
              <MoneyText isEnough={receivedMoneySum() >= totalOrderSum()}>
                {formatPrice(receivedMoneySum())}
              </MoneyText>
            </PaymentScreenHeaderText>
          </PaymentScreenHeader>

          <PaymentScreen>
            {paymentMethods
              .filter(({ selected }) => selected)
              .map(({ name, title }, i) => {
                if (name === 'card') {
                  return (
                    <PaymentMethodsScreen key={i}>
                      <PaymentScreenTitle>
                        {upperCase(title)}
                      </PaymentScreenTitle>
                      <InputMask
                        mask="9999 9999 9999 9999"
                        value={orderDetails.payment.card.number}
                        name="number"
                        placeholder="Insira o numero do cartão"
                        onChange={updateCardPaymentValues}
                        icon={<BsCreditCard size={35} color="#000000" />}
                      />
                      <CardField>
                        <InputMask
                          mask="99/9999"
                          value={orderDetails.payment.card.expirationDate}
                          name="expirationDate"
                          placeholder="Validade"
                          onChange={updateCardPaymentValues}
                          icon={<BsCreditCard size={35} color="#000000" />}
                        />

                        <InputMask
                          mask="999"
                          value={orderDetails.payment.card.securityCode}
                          name="securityCode"
                          placeholder="CVC"
                          onChange={updateCardPaymentValues}
                          icon={<BsCreditCard size={35} color="#000000" />}
                        />
                      </CardField>
                      <CurrencyInput
                        name={name}
                        value={orderDetails.payment.card.receivedMoney}
                        placeholder="Insira o valor recebido"
                        onValueChange={currencyUpdate}
                        icon={<GiReceiveMoney size={35} color="#000000" />}
                      />
                    </PaymentMethodsScreen>
                  )
                }
                return (
                  <PaymentMethodsScreen key={i}>
                    <PaymentScreenTitle>{upperCase(title)}</PaymentScreenTitle>
                    <CurrencyInput
                      name={name}
                      value={orderDetails.payment[name].receivedMoney}
                      placeholder="Insira o valor recebido"
                      onValueChange={currencyUpdate}
                      icon={<GiReceiveMoney size={35} color="#000000" />}
                    />
                  </PaymentMethodsScreen>
                )
              })}
          </PaymentScreen>
          <PaymentScreenFooter>
            <Change>Troco: {calculateChange()}</Change>

            <FinishOrder onClick={closeOrder}>Finalizar Pedido</FinishOrder>

            <UpdateOrder
              onClick={() => setShowPaymentScreen(false)}
              title="Atualizar pedido"
            >
              &larr; Alterar informações do pedido
            </UpdateOrder>
          </PaymentScreenFooter>
        </Main>
      )}
    </Container>
  )
}

export { CloseOrder }

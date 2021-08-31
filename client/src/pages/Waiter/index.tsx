import React from 'react'
import { Header } from '../../components/Header'
import { ListOrders } from '../../components/ListOrders'

import { Container, Main, Title } from './styles'

const Waiter: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Retirar pedidos</Title>
      <Main>
        <ListOrders listAllOrdersReady />
      </Main>
    </Container>
  )
}

export { Waiter }

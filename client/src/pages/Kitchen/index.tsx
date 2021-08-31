import React from 'react'
import { Header } from '../../components/Header'
import { ListOrders } from '../../components/ListOrders'
import { Container, Main, Title } from './styles'

const Kitchen: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Cozinha</Title>
      <Main>
        <ListOrders listAllOrdersReady={false} />
      </Main>
    </Container>
  )
}

export { Kitchen }

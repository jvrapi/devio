import React from 'react'
import { Header } from '../../components/Header'
import { useOrders } from '../../hooks/useOrders'
import { IoCloudOffline } from 'react-icons/io5'

import {
  ClientName,
  Container,
  EmptyOrders,
  EmptyOrdersText,
  FinishOrder,
  LeftContainer,
  ListOrders,
  Main,
  OrderCode,
  OrderProductAmount,
  OrderProductName,
  OrderProducts,
  OrdersBox,
  OrdersBoxFooter,
  OrdersBoxHeader,
  OrdersBoxMain,
  RightContainer,
  Separator
} from './styles'

/* const orders = [
  {
    id: 1,
    clientName: 'João Vitor',
    ready: false,
    products: [
      {
        amount: 1,
        id: 1,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 2,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 3,
        name: 'Camarão na champagne com arroz de maçã',
        price: 150
      },
      {
        amount: 1,
        id: 4,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 5,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 6,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 7,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 8,
        name: 'Espaguete ao frutos do mar',
        price: 150
      }
    ]
  },
  {
    id: 2,
    clientName: 'João Vitor',
    ready: false,
    products: [
      {
        amount: 1,
        id: 1,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 2,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 3,
        name: 'Camarão na champagne com arroz de maçã',
        price: 150
      },
      {
        amount: 1,
        id: 4,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 5,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 6,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 7,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 8,
        name: 'Espaguete ao frutos do mar',
        price: 150
      }
    ]
  },
  {
    id: 3,
    clientName: 'João Vitor',
    ready: false,
    products: [
      {
        amount: 1,
        id: 1,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 2,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 3,
        name: 'Camarão na champagne com arroz de maçã',
        price: 150
      },
      {
        amount: 1,
        id: 4,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 5,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 6,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 7,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 8,
        name: 'Espaguete ao frutos do mar',
        price: 150
      }
    ]
  },
  {
    id: 3,
    clientName: 'João Vitor',
    ready: false,
    products: [
      {
        amount: 1,
        id: 1,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 2,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 3,
        name: 'Camarão na champagne com arroz de maçã',
        price: 150
      },
      {
        amount: 1,
        id: 4,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 5,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 6,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 7,
        name: 'Espaguete ao frutos do mar',
        price: 150
      },
      {
        amount: 1,
        id: 8,
        name: 'Espaguete ao frutos do mar',
        price: 150
      }
    ]
  }
] */

const Kitchen: React.FC = () => {
  const { orders, updateOrders } = useOrders()
  const finishOrder = (id: number) => {
    const orderUpdated = orders.map(order => {
      if (order.id === id) {
        order.ready = true
      }
      return order
    })
    updateOrders(orderUpdated, 'Baixa de pedido realizada com sucesso')
  }
  return (
    <Container>
      <Header />
      <Main>
        {orders.length > 0 && (
          <ListOrders>
            {orders
              .filter(({ ready }) => !ready)
              .map(({ id, clientName, products }) => (
                <OrdersBox key={id}>
                  <OrdersBoxHeader>
                    <ClientName>{clientName}</ClientName>
                    &nbsp;
                    <OrderCode>#{id}</OrderCode>
                  </OrdersBoxHeader>

                  <OrdersBoxMain>
                    {products.map(({ id, name, amount }) => (
                      <OrderProducts key={id}>
                        <LeftContainer>
                          <OrderProductName>{name} </OrderProductName>
                        </LeftContainer>

                        <Separator>&raquo;</Separator>

                        <RightContainer>
                          <OrderProductAmount>{amount}x</OrderProductAmount>
                        </RightContainer>
                      </OrderProducts>
                    ))}
                  </OrdersBoxMain>
                  <OrdersBoxFooter>
                    <FinishOrder onClick={() => finishOrder(id)}>
                      Dar baixa no pedido
                    </FinishOrder>
                  </OrdersBoxFooter>
                </OrdersBox>
              ))}
          </ListOrders>
        )}
        {(orders.length === 0 || orders === undefined) && (
          <EmptyOrders>
            <IoCloudOffline size={70} color="#bbb" />
            <EmptyOrdersText>Sem pedidos para mostrar</EmptyOrdersText>
          </EmptyOrders>
        )}
      </Main>
    </Container>
  )
}

export { Kitchen }

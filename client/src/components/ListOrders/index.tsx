import React, { useState, useEffect } from 'react'
import { Order } from '../../contexts/OrdersContext'
import { useOrders } from '../../hooks/useOrders'
import { IoCloudOffline } from 'react-icons/io5'

import {
  ClientName,
  Container,
  EmptyOrders,
  EmptyOrdersText,
  LeftContainer,
  ListOrdersContainer,
  OrderButton,
  OrderCode,
  OrderNoteBox,
  OrderNoteText,
  OrderNoteTitle,
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

type Props = {
  listAllOrdersReady: boolean
}

const ListOrders: React.FC<Props> = ({ listAllOrdersReady }) => {
  const { orders, updateOrders } = useOrders()
  const [data, setData] = useState<Order[]>([])

  const onClickHandle = (id: number) => {
    if (!listAllOrdersReady) {
      const orderUpdated = orders.map(order => {
        if (order.id === id) {
          order.ready = true
        }
        return order
      })
      updateOrders(orderUpdated, 'Baixa de pedido realizada com sucesso')
    } else {
      const orderUpdated = orders.map(order => {
        if (order.id === id) {
          order.withdrawn = true
        }
        return order
      })
      updateOrders(orderUpdated, 'Pedido retirado com sucesso')
    }
  }

  useEffect(() => {
    if (listAllOrdersReady) {
      const newOrders = orders.filter(({ ready }) => ready)
      console.log(orders)
      setData(newOrders)
    } else {
      const newOrders = orders.filter(({ ready }) => !ready)
      setData(newOrders)
    }
  }, [orders])
  return (
    <Container>
      {data.length > 0 && (
        <ListOrdersContainer>
          {data
            .filter(({ withdrawn }) => !withdrawn)
            .map(({ id, clientName, products, ready, note }) => (
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
                  {note && (
                    <OrderNoteBox>
                      <OrderNoteTitle>Observações</OrderNoteTitle>
                      <OrderNoteText>{note}</OrderNoteText>
                    </OrderNoteBox>
                  )}
                  <OrderButton onClick={() => onClickHandle(id)}>
                    {ready ? 'Retirar pedido' : 'Dar baixa no pedido'}
                  </OrderButton>
                </OrdersBoxFooter>
              </OrdersBox>
            ))}
        </ListOrdersContainer>
      )}
      {(data.length === 0 || data === undefined) && (
        <EmptyOrders>
          <IoCloudOffline size={70} color="#bbb" />
          <EmptyOrdersText>Sem pedidos para mostrar</EmptyOrdersText>
        </EmptyOrders>
      )}
    </Container>
  )
}

export { ListOrders }

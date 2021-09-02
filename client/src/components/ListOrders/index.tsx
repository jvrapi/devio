import React, { useState, useEffect } from 'react'
import { Order } from '../../contexts/OrdersContext'
import { useOrders } from '../../hooks/useOrders'
import { IoCloudOffline } from 'react-icons/io5'
import ReactTooltip from 'react-tooltip'
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
  const { orders, orderReady, withdrawOrder } = useOrders()
  const [data, setData] = useState<Order[]>([])

  const onClickHandle = (id: number) => {
    listAllOrdersReady ? withdrawOrder(id) : orderReady(id)
  }

  useEffect(() => {
    if (listAllOrdersReady) {
      const newOrders = orders.filter(({ ready }) => ready)
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
                {note && (
                  <OrderNoteBox>
                    <OrderNoteTitle data-tip data-for={id.toString()}>
                      Observações
                    </OrderNoteTitle>
                    <ReactTooltip
                      id={id.toString()}
                      place="top"
                      type="light"
                      effect="float"
                    >
                      <OrderNoteText>{note}</OrderNoteText>
                    </ReactTooltip>
                  </OrderNoteBox>
                )}
                <OrdersBoxFooter>
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

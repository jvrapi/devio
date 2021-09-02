import React, { ReactNode, createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { socket } from '../services/Socket'

type Payment = {
  card?: {
    number: string
    expirationDate: string
    securityCode: string
    receivedMoney: string
  }
  pix?: {
    receivedMoney: string
  }
  money?: {
    receivedMoney: string
  }
}

export type OrderProducts = {
  amount: number
  price: number
  id: number
  name: string
}

export type Order = {
  id: number
  ready: boolean
  withdrawn: boolean
  clientName: string
  note: string
  payment: Payment
  products: OrderProducts[]
}

export type OrdersContextProps = {
  orders: Order[]
  order: Order | undefined
  finishOrder(orders: Order): void
  updateOrder(order: Order): void
  orderReady(orderId: number): void
  withdrawOrder(orderId: number): void
}

type OrdersContextProviderProps = {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrdersContextProps)

export const OrdersContextProvider: React.FC<OrdersContextProviderProps> = ({
  children
}) => {
  const [orders, setOrders] = useState<Order[]>([])
  const [order, setOrder] = useState<Order>()

  const updateOrders = (orders: Order[]) => {
    socket.emit('orders.update', orders)
    socket.on('orders.update', data => {
      setOrders(data)
    })
  }

  const orderReady = (orderId: number) => {
    const updateOrder = orders.map(order => {
      if (order.id === orderId) {
        order.ready = true
      }
      return order
    })
    updateOrders(updateOrder)
    toast.success('Pedido finalizado e pronto para ser retirado')
  }

  const withdrawOrder = (orderId: number) => {
    const updateOrder = orders.map(order => {
      if (order.id === orderId) {
        order.withdrawn = true
      }
      return order
    })
    updateOrders(updateOrder)

    toast.success('Pedido retirado com sucesso')
  }

  const finishOrder = (newOrder: Order) => {
    orders.push(newOrder)
    updateOrders(orders)

    toast.success('Pedido finalizado com sucesso')
  }

  const updateOrder = (newOrder: Order) => {
    setOrder(newOrder)
  }

  useEffect(() => {
    socket.on('orders.update', data => {
      setOrders(data)
    })
    return () => {
      socket.off('orders.update')
    }
  }, [orders])

  return (
    <OrdersContext.Provider
      value={{
        orders,
        finishOrder,
        order,
        updateOrder,
        orderReady,
        withdrawOrder
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

import React, { ReactNode, createContext, useState } from 'react'

export type OrderProducts = {
  amount: number
  price: number
  id: number
  name: string
}

export type Order = {
  id: number
  products: OrderProducts[]
}

export type OrdersContextProps = {
  orders: Order[]
  order: Order | undefined
  updateOrders(orders: Order[]): void
  updateOrder(order: Order): void
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

  const updateOrders = (newOrders: Order[]) => {
    setOrders(newOrders)
  }

  const updateOrder = (newOrder: Order) => {
    setOrder(newOrder)
  }

  return (
    <OrdersContext.Provider
      value={{ orders, updateOrders, order, updateOrder }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

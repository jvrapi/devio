import React, { ReactNode, createContext, useState } from 'react'
import { toast } from 'react-toastify'

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
  products: OrderProducts[]
}

export type OrdersContextProps = {
  orders: Order[]
  order: Order | undefined
  updateOrders(orders: Order[], message?: string): void
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

  const updateOrders = (newOrders: Order[], message?: string) => {
    setOrders(newOrders)
    !!message && toast.success(message)
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

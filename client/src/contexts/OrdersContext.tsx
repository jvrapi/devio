import React, {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect
} from 'react'
import { toast } from 'react-toastify'
import { socket } from '../services/Socket'
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

  const updateOrders = useCallback((newOrders: Order[], message?: string) => {
    socket.emit('orders.update', newOrders)
    socket.on('orders.update', data => {
      setOrders(data)
    })
    !!message && toast.success(message)
  }, [])

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
      value={{ orders, updateOrders, order, updateOrder }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

import { useContext } from 'react'
import { OrdersContext, OrdersContextProps } from '../contexts/OrdersContext'

export function useOrders(): OrdersContextProps {
  const value = useContext(OrdersContext)
  return value
}

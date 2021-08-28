import React from 'react'
import { Product } from '../services/Product'
import { IoIosRestaurant } from 'react-icons/io'
import {
  Container,
  ProductContainer,
  ProductBox,
  ProductBoxHeader,
  ProductBoxMain,
  ProductName,
  ProductBoxFooter,
  ProductDescription,
  ProductPrice,
  AddProductToOrderButton
} from './styles'
import { useOrders } from '../hooks/useOrders'
import { Order, OrderProducts } from '../contexts/OrdersContext'

type Props = {
  data: Product[]
}

const ListProducts: React.FC<Props> = ({ data }) => {
  const { order, orders, updateOrder } = useOrders()

  const addProductToOrder = (product: Product) => {
    const orderState: Order = { ...order } as Order

    orderState.id = orderState.id ? orderState.id : orders.length + 1

    const productAlreadyAdded = orderState.products
      ?.filter(productInserted => productInserted.id === product.id)
      .shift()

    if (productAlreadyAdded) {
      productAlreadyAdded.amount += 1
    } else {
      const insertProduct: OrderProducts = {
        price: product.price,
        id: product.id,
        name: product.name,
        amount: 1
      }

      orderState.products = orderState.products ? [...orderState.products] : []
      orderState.products.push(insertProduct)
    }

    updateOrder(orderState)
  }
  return (
    <Container>
      {data.slice(0, 5).map(product => (
        <ProductContainer key={product.id}>
          <ProductBox>
            <ProductBoxHeader>
              <ProductName>{product.name}</ProductName>
            </ProductBoxHeader>

            <ProductBoxMain>
              <IoIosRestaurant size={70} />
            </ProductBoxMain>

            <ProductBoxFooter>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductBoxFooter>
          </ProductBox>
          <ProductPrice>R$ {product.price}</ProductPrice>

          <AddProductToOrderButton onClick={() => addProductToOrder(product)}>
            Adicionar produto
          </AddProductToOrderButton>
        </ProductContainer>
      ))}
    </Container>
  )
}

export { ListProducts }

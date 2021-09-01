import styled from 'styled-components'

export const Container = styled.div``

export const ListOrdersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 5px;
  padding: 20px;
`

export const OrdersBox = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.cardTextColor};
  width: 600px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :not(:last-child) {
    margin-right: 10px;
  }
`

export const OrdersBoxHeader = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ClientName = styled.h1`
  font-size: 25px;
  font-weight: 700;
`

export const OrderCode = styled.h2`
  font-size: 25px;
  font-weight: 500;
`

export const OrdersBoxMain = styled.main`
  margin-top: 15px;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
`

export const OrderProducts = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`

export const LeftContainer = styled.div`
  width: 85%;
  padding: 0 10px;
`

export const Separator = styled.div`
  font-size: 30px;
`

export const RightContainer = styled.div`
  width: 10%;
  padding: 0 10px;
`

export const OrderProductName = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const OrderProductAmount = styled.span`
  font-size: 20px;
  font-weight: 500;
`

export const OrdersBoxFooter = styled.footer`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px 0%;
`

export const OrderButton = styled.button`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  border-radius: 30px;
`

export const EmptyOrders = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 40%;
  right: 43%;
  width: 250px;
  height: 200px;
`
export const EmptyOrdersText = styled.span`
  color: #bbb;
  font-weight: 700;
  font-size: 18px;
`
export const OrderNoteBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const OrderNoteText = styled.p`
  font-size: 17px;
  font-weight: 500;
`
export const OrderNoteTitle = styled.h2``

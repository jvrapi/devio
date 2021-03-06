import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h2`
  text-align: center;
`

export const OrderDetails = styled.div`
  height: 650px;
  width: 500px;
  border: 1px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px;
`

export const Main = styled.main`
  width: 100%;
  color: ${props => props.theme.colors.cardTextColor};
  overflow: auto;
`

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  :nth-child(n + 2) {
    margin-top: 20px;
  }
`

export const LeftContainer = styled.div`
  width: 60%;
  padding: 0 10px;
`

export const ProductName = styled.p`
  font-size: 18px;
`

export const RightContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductAmount = styled.p`
  font-weight: 500;
  font-size: 20px;
`

export const TotalProduct = styled.p`
  margin: 0 10px;
  font-size: 20px;
  font-weight: 700;
`

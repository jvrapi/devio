import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h2`
  text-align: center;
`

export const Menu = styled.div`
  height: 650px;
  width: 500px;
  border: 1px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const SearchBox = styled.header`
  width: 350px;
`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.cardTextColor};
  overflow: auto;
`

export const Products = styled.div``

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  cursor: pointer;
`
export const LeftContainer = styled.div`
  width: 80%;
  padding: 0 10px;
`
export const RightContainer = styled.div`
  width: 20%;
`
export const ProductName = styled.p`
  font-size: 18px;
`

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 20px;
`

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
  height: 40px;
  width: 350px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 20px;
  padding: 5px 10px;
  background: #ffffff;
  margin: 10px 0;
`

export const SearchInput = styled.input`
  height: 100%;
  width: 300px;
  border: none;
  background: transparent;
  padding: 5px;
`
export const Main = styled.main`
  width: 100%;
  height: 100%;
  color: #fff;
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

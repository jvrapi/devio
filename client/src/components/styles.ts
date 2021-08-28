import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProductBox = styled.div`
  height: 600px;
  width: 370px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 20px;
  margin-right: 10px;
`
export const ProductBoxHeader = styled.header`
  display: flex;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
`

export const ProductName = styled.h3`
  line-height: 20px;
  word-wrap: break-word;
`
export const ProductBoxMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 380px;
`

export const ProductBoxFooter = styled.footer`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ProductDescription = styled.p`
  text-align: center;
  font-weight: 500;
  line-height: 30px;
`
export const ProductPrice = styled.span`
  margin-top: 10px;
`
export const AddProductToOrderButton = styled.button`
  margin-top: 20px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.secondary};
  width: 200px;
  height: 40px;
  border-radius: 20px;

  :hover {
    background: #eee;
    cursor: pointer;
  }
`

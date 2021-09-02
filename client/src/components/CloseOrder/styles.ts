import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h2`
  text-align: center;
`

export const Main = styled.main`
  height: 650px;
  width: 500px;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.cardTextColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`

export const TotalOrder = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 20px 0;
`

export const Change = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
`

export const Button = styled.button`
  background: #ffffff;
  margin-top: 10px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  :hover {
    background: #ccc;
  }
`
export const IconsContainer = styled.div`
  display: flex;
  width: 400px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0;
`

export const IconsTitle = styled.h2``

export const PixIcon = styled.img`
  width: 45px;
  height: 45px;
`

export const IconsContainerMain = styled.main`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  align-self: center;
  margin-top: 10px;
  > {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`
export const InputContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > {
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const PaymentInput = styled.input`
  margin-right: 10px;
  width: 17px;
  height: 17px;
  cursor: pointer;
`

export const PaymentScreen = styled.div`
  padding: 0 30px;
  margin: 25px 0;
  width: 100%;
  > {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`

export const PaymentMethodsScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PaymentScreenTitle = styled.h2``

export const CardField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    width: 40%;
  }
  margin-bottom: 15px;
`
export const PaymentScreenFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const FinishOrder = styled.button`
  background: #22bb33;
  margin: 10px 0;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  transition: 0.2s;

  border: 3px solid #ffffff;
  :hover {
    background: #14701e;
  }
`
export const UpdateOrder = styled.a`
  cursor: pointer;
  text-decoration: underline;
  font-size: 17px;
`
export const PaymentScreenHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const PaymentScreenHeaderText = styled.h3`
  font-weight: 700;
`

export const MoneyText = styled.span<{ isEnough: boolean }>`
  color: ${({ isEnough }) => (isEnough ? '#22bb33' : '#FF605C')};
`

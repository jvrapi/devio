import styled from 'styled-components'

export const Container = styled.div`
  color: ${props => props.theme.colors.cardTextColor};
`

export const Title = styled.h2`
  text-align: center;
`

export const Main = styled.main`
  height: 650px;
  width: 500px;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
`

export const TotalOrder = styled.p`
  font-size: 25px;
  font-weight: 700;
`

export const Change = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
`

export const FinishOrder = styled.button`
  background: #ffffff;
  margin-top: 10px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
`
export const IconsContainer = styled.div`
  display: flex;
  width: 300px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0;
`

export const IconsTitle = styled.h2``

export const PixIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const IconsContainerMain = styled.main`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  margin-top: 10px;
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Header = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: ${props => props.theme.colors.primary};
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.title};
`
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SearchBox = styled.div`
  height: 40px;
  width: 270px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 20px;
  padding: 5px 10px;
  background: #ffffff;
`

export const TotalOrder = styled.div`
  background: #ffffff;
  border: 2px solid ${props => props.theme.colors.secondary};
  width: 50px;
  height: 50px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export const TotalItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 90px;
  right: 309.5px;
  background: #ffffff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`
export const TotalItems = styled.p`
  font-size: 20px;
`

export const SearchInput = styled.input`
  height: 100%;
  width: 240px;
  border: none;
  background: transparent;
  padding: 5px;
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

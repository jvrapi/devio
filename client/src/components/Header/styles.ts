import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  background: ${props => props.theme.colors.primary};
`
export const Title = styled.h1`
  color: ${props => props.theme.colors.title};
`

export const Menu = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MenuItem = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid ${props => props.theme.colors.secondary};
  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    cursor: pointer;
    background: #ccc;
  }
`
export const MenuIcon = styled.div``
export const MenuName = styled.label``

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`

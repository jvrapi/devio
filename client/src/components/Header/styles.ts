import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: ${props => props.theme.colors.primary};
`
export const Title = styled.h1`
  color: ${props => props.theme.colors.title};
`

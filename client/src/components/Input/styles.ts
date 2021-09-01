import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 20px;
  padding: 5px 10px;
  margin: 5px 0;
`
export const Input = styled.input`
  width: 95%;
  height: 100%;
  padding: 5px;
  border: none;
  background: transparent;
`

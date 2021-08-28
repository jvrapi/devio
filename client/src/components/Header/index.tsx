import React from 'react'

import { Container, Title } from './styles'

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>Devs Rest</Title>
      {children}
    </Container>
  )
}

export { Header }

import React, { InputHTMLAttributes } from 'react'

import { Container, Input } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: JSX.Element
}

const InputComponent: React.FC<Props> = ({ icon, ...props }) => {
  return (
    <Container>
      <Input {...props} />
      {icon}
    </Container>
  )
}

export { InputComponent }

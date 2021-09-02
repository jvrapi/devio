import React from 'react'
import { Props } from 'react-input-mask'

import { Container, Input } from './styles'
type InputProps = Props & {
  icon?: JSX.Element
}
const InputMask: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <Container>
      <Input {...props} />
      {icon}
    </Container>
  )
}

export { InputMask }

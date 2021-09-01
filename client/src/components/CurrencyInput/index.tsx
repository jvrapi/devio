import React from 'react'
import { Container, Input } from './styles'
import { CurrencyInputProps } from 'react-currency-input-field'

type Props = CurrencyInputProps & {
  icon?: JSX.Element
}

const CurrencyInput: React.FC<Props> = ({ icon, ...props }) => {
  return (
    <Container>
      <Input {...props} />
      {icon}
    </Container>
  )
}
export { CurrencyInput }

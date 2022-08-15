import React from 'react'
import styled from 'styled-components'
import { Input, InputProps } from './Input'

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

export const Form = ({ handleSubmit, children, ...rest }: FormProps) => {
  const items = React.Children.map(
    React.Children.toArray(
      children,
    ) as React.FunctionComponentElement<InputProps>[],
    (child) =>
      React.cloneElement(child, {
        ...child.props,
      }),
  )

  return (
    <form onSubmit={handleSubmit} {...rest}>
      {items}
    </form>
  )
}

const ErrorMsg = styled('span')`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const FieldInput = styled(Input)`
  & + & {
    margin-top: 1rem;
  }
`

Form.Input = FieldInput
Form.Error = ErrorMsg

import React, { forwardRef } from 'react'
import styled from 'styled-components'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value?: string
  name: string
  password?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, name, placeholder, password, ...rest }, ref) => {
    return (
      <Wrapper>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <InputBase
          ref={ref}
          value={value}
          type={password ? 'password' : 'text'}
          placeholder={placeholder}
          id={name}
          name={name}
          data-testid="input"
          {...rest}
        />
      </Wrapper>
    )
  },
)

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  &:first-child {
    margin-top: 0;
  }
`

const InputLabel = styled('label')`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY_60};
`

const InputBase = styled('input')`
  border: 1px solid ${({ theme }) => theme.colors.GRAY_30};
  padding: 8px;
  width: 100%;
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY_60};

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY_90};
  }
`

import React, { forwardRef } from 'react'
import styled from 'styled-components'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', children, ...rest }, ref) => {
    return (
      <ButtonBase type={type} ref={ref} {...rest}>
        {children}
      </ButtonBase>
    )
  },
)

const ButtonBase = styled('button')`
  border: none;
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.PINK};
  color: #fff;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.PINK_30};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.PINK_30};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.GRAY_30};
  }
`

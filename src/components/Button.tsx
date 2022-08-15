import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>
}

import React from 'react'
import { useTimer } from '@/hooks'
import styled from 'styled-components'

interface TimerProps {
  timer: number
  onFinish: () => void
}

export const Timer = ({ timer, onFinish, ...rest }: TimerProps) => {
  const { minute, second } = useTimer(timer, onFinish)
  return (
    <Wrapper data-testid="timer" {...rest}>
      {minute}:{second}
    </Wrapper>
  )
}

export const Wrapper = styled('span')`
  display: inline-block;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.PINK};
`

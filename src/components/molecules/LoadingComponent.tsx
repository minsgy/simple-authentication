import styled from 'styled-components'
import { Spinner } from '@/components'

interface LoadingComponentProps {
  label?: string
}

export const LoadingComponent = ({ label }: LoadingComponentProps) => {
  return (
    <Wrapper>
      <Spinner />
      {label && <Label>{label}</Label>}
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Label = styled('p')`
  margin-top: 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.GRAY_60};
`

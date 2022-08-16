import { LAYOUT_MAX_WIDTH } from '@/constants/size'
import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  children: React.ReactNode
}

export const Header = ({ children, ...rest }: HeaderProps) => {
  const items = React.Children.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.Children.toArray(children) as React.FunctionComponentElement<any>[],
    (child) =>
      React.cloneElement(child, {
        ...child.props,
      }),
  )

  return <Wrapper {...rest}>{items}</Wrapper>
}

const Wrapper = styled('div')`
  max-width: ${LAYOUT_MAX_WIDTH}px;
  margin: 0 auto 16px;
  text-align: center;
`
const HeaderTitle = styled('h1')`
  font-size: 22px;
`

const HeaderSubTitle = styled('h2')`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.GRAY_60};
  font-size: 18px;
  font-weight: normal;
`

const HeaderContent = styled('p')`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY_90};
`
Header.Title = HeaderTitle
Header.SubTitle = HeaderSubTitle
Header.Content = HeaderContent

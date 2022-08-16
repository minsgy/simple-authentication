import { LAYOUT_MAX_WIDTH } from '@/constants/size'
import React from 'react'
import styled from 'styled-components'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <LayoutBase>{children}</LayoutBase>
)

const LayoutBase = styled('div')`
  max-width: ${LAYOUT_MAX_WIDTH}px;
  min-height: 100%;
  margin: 0 auto;
  padding: 16px;
`

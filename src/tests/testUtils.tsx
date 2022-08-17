/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { theme } from '@/styles/common/theme'
import { ThemeProvider } from 'styled-components'

interface AllTheProvidersProperties {
  children: any
}

const AllTheProviders = ({ children }: AllTheProvidersProperties) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

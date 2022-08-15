import { ThemeProvider } from 'styled-components'
import { Routes } from './pages/Routes'
import { theme } from '@/styles/common/theme'
import GlobalStyle from '@/styles/global'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Routes } from '@/router/Routes'
import GlobalStyle from '@/styles/global'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes />
      <GlobalStyle />
    </>
  )
}

export default App

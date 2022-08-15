import { MainPage } from './MainPage'
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainPage />} />
    </ReactRouterRoutes>
  )
}

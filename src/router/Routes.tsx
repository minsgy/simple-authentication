import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom'
import {
  LoginPage,
  MyProfilePage,
  ResetPasswordPage,
  AuthCodeConfirmPage,
  AuthCodeRequestPage,
  UnauthorizedPage,
} from '@/pages'
import { RequireAuth } from './RequireAuth'
import { PublicAuth } from './PublicAuth'

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<PublicAuth />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset">
          <Route path="email" element={<AuthCodeRequestPage />} />
          <Route path="confirm" element={<AuthCodeConfirmPage />} />
          <Route path="password" element={<ResetPasswordPage />} />
        </Route>
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/my" element={<MyProfilePage />} />
      </Route>
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </ReactRouterRoutes>
  )
}

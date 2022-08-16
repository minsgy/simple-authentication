import { tokenState } from '@/store/auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

export const RequireAuth = () => {
  const token = useRecoilValue(tokenState)
  const location = useLocation()
  const isRedirect = location.key === 'default'

  return token ? (
    <Outlet />
  ) : isRedirect ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/login" replace />
  )
}

import { tokenState } from '@/store/auth'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

export const PublicAuth = () => {
  const token = useRecoilValue(tokenState)
  return token ? <Navigate to="/my" replace /> : <Outlet />
}

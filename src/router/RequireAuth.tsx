import { tokenState } from '@/store/auth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

export const RequireAuth = () => {
  const token = useRecoilValue(tokenState)
  return token ? <Outlet /> : <Navigate to="/unauthorized" />
}

import { LogoutResponse } from '@/@types/api'
import { axiosInstance } from '@/utils/axios'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

const LOGOUT_URL = '/logout'

export const useLogout = (
  options?: UseMutationOptions<LogoutResponse, Error, never>,
) => {
  const fetchLogin = async (): Promise<LogoutResponse> =>
    await axiosInstance.post<never, LogoutResponse>(LOGOUT_URL)

  return useMutation<LogoutResponse, Error, never>(fetchLogin, options)
}

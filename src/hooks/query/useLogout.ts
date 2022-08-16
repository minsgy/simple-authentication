import { LogoutResponse } from '@/@types/api'
import { tokenState } from '@/store/auth'
import { axiosInstance } from '@/utils/axios'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

const LOGOUT_URL = '/logout'

export const useLogout = (
  options?: UseMutationOptions<LogoutResponse, Error, never>,
) => {
  const accessToken = useRecoilValue(tokenState)
  const fetchLogout = async (): Promise<LogoutResponse> =>
    await axiosInstance.post<never, LogoutResponse>(LOGOUT_URL, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

  return useMutation<LogoutResponse, Error, never>(fetchLogout, options)
}

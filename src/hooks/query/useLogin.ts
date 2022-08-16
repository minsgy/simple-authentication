import { LoginRequest, LoginResponse } from '@/@types/api'
import { axiosInstance } from '@/utils/axios'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

const LOGIN_URL = '/login'

export const useLogin = (
  options?: UseMutationOptions<LoginResponse, Error, LoginRequest>,
) => {
  const fetchLogin = async (values: LoginRequest): Promise<LoginResponse> =>
    await axiosInstance.post<LoginRequest, LoginResponse>(LOGIN_URL, values)

  return useMutation<LoginResponse, Error, LoginRequest>(fetchLogin, options)
}

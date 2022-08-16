import { AuthenticationEmailResponse } from '@/@types/api'
import { REACT_QUERY_KEY } from '@/constants/query'
import { axiosInstance } from '@/utils/axios'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useAuthEmail = (
  email: string,
  options?: UseQueryOptions<AuthenticationEmailResponse, Error>,
) => {
  const fetchAuthentication = async (): Promise<AuthenticationEmailResponse> =>
    await axiosInstance.get('/reset-password', {
      params: {
        email,
      },
    })

  return useQuery<AuthenticationEmailResponse, Error>(
    REACT_QUERY_KEY.EMAIL(email),
    fetchAuthentication,
    options,
  )
}

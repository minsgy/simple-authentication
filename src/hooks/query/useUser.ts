import { UserInfoResponse } from '@/@types/api'
import { REACT_QUERY_KEY } from '@/constants/query'
import { axiosInstance } from '@/utils/axios'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useUser = (
  accessToken: string,
  options?: UseQueryOptions<UserInfoResponse, Error>,
) => {
  const fetchUser = async (): Promise<UserInfoResponse> =>
    await axiosInstance.get('/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

  return useQuery<UserInfoResponse, Error>(
    REACT_QUERY_KEY.USER(accessToken),
    fetchUser,
    options,
  )
}

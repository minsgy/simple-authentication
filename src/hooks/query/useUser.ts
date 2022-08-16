import { UserInfoResponse } from '@/@types/api'
import { REACT_QUERY_KEY } from '@/constants/query'
import { tokenState } from '@/store/auth'
import { axiosInstance } from '@/utils/axios'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

export const useUser = (options?: UseQueryOptions<UserInfoResponse, Error>) => {
  const accessToken = useRecoilValue(tokenState)
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

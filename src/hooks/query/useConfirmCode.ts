import { ConfirmCodeResponse, ConfirmCodeRequest } from '@/@types/api'
import { axiosInstance } from '@/utils/axios'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

const CONFIRM_URL = '/reset-password'

export const useConfirmCode = (
  options?: UseMutationOptions<ConfirmCodeResponse, Error, ConfirmCodeRequest>,
) => {
  const fetchLogin = async (
    values: ConfirmCodeRequest,
  ): Promise<ConfirmCodeResponse> =>
    await axiosInstance.post<ConfirmCodeRequest, ConfirmCodeResponse>(
      CONFIRM_URL,
      values,
    )

  return useMutation<ConfirmCodeResponse, Error, ConfirmCodeRequest>(
    fetchLogin,
    options,
  )
}

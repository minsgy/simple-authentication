import { ResetPasswordRequest, ResetPasswordResponse } from '@/@types/api'
import { axiosInstance } from '@/utils/axios'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

const RESET_PWD_URL = '/reset-password'

export const useResetPwd = (
  options?: UseMutationOptions<
    ResetPasswordResponse,
    Error,
    ResetPasswordRequest
  >,
) => {
  const fetchResetPwd = async (
    values: ResetPasswordRequest,
  ): Promise<ResetPasswordResponse> =>
    await axiosInstance.patch<ResetPasswordRequest, ResetPasswordResponse>(
      RESET_PWD_URL,
      values,
    )

  return useMutation<ResetPasswordResponse, Error, ResetPasswordRequest>(
    fetchResetPwd,
    options,
  )
}

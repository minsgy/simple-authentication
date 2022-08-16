import { CustomAxiosError } from '@/@types/api'
import { API_POINT } from '@/constants/api'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`,
      )
    }
    return config
  },
  (error: AxiosError<CustomAxiosError>) => {
    return Promise.reject(error.response?.data.error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error: AxiosError<CustomAxiosError>) => {
    return Promise.reject(error.response?.data.error)
  },
)

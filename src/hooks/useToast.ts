import { BREAKPOINT } from '@/constants/breakpoint'
import { toast, ToastOptions } from 'react-toastify'
import { useWindowSize } from './useWindowSize'

export const POSITION = toast.POSITION

export const useToast = (options?: ToastOptions) => {
  const size = useWindowSize()

  // @NOTE: 반응형 처리
  const position =
    size?.width > BREAKPOINT.TABLET
      ? toast.POSITION.TOP_RIGHT
      : toast.POSITION.BOTTOM_CENTER

  const initialOptions = {
    position,
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    ...options,
  }

  const success = (message: string) => toast.success(message, initialOptions)
  const error = (message: string) => toast.error(message, initialOptions)

  return { success, error }
}

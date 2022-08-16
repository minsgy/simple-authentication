import { toast, ToastPosition, ToastOptions } from 'react-toastify'

export const POSITION = toast.POSITION

export const useToast = (options?: ToastOptions) => {
  const initialOptions = {
    position: toast.POSITION.BOTTOM_CENTER as ToastPosition,
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

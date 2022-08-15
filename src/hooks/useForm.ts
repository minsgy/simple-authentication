/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

type FormValues = {
  [key: string]: string
}

export interface UseFormProps<T> {
  initialState: T
  onSubmit: (values: T) => void
  validate?: (values: T) => T
}

export const useForm = <T>({
  initialState,
  onSubmit,
  validate,
}: UseFormProps<T>) => {
  const [forms, setForms] = useState<T>(initialState)
  const [errors, setErrors] = useState<FormValues>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForms({ ...forms, [name]: value })
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setIsLoading(true)
    e.preventDefault()
    const newErrors = validate ? validate(forms) : {}
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(forms)
    }
    setErrors(newErrors)
    setIsLoading(false)
  }

  return { errors, isLoading, setIsLoading, handleChange, handleSubmit }
}

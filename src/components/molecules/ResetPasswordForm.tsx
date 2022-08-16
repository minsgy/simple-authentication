import { useForm, useAutoFocus, useResetPwd, useToast } from '@/hooks'
import { validate } from '@/utils/validate'
import { Spinner, Form, Button as ButtonBase } from '@/components'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { MESSAGE } from '@/constants/toast'

const PASSWORD_PLACEHOLDER = 'ex) 123456'
const CONFIRM_PASSWORD_PLACEHOLDER = 'ex) 123456'

interface ResetPasswordFormProps {
  email: string
  confirmToken: string
}

export const ResetPasswordForm = ({
  email,
  confirmToken,
}: ResetPasswordFormProps) => {
  const toast = useToast()
  const navigate = useNavigate()
  const focusRef = useAutoFocus<HTMLInputElement>()
  const { mutate: resetPwd, isLoading } = useResetPwd({
    onSuccess: () => {
      toast.success(MESSAGE.RESET_PASSWORD_SUCCESS)
      navigate('/login', { replace: true })
    },
    onError: (error) => {
      toast.error(error.message)
      if (confirm('인증 에러로 다시 시도해주세요. 계속하시겠습니까?')) {
        navigate('/reset/email', { replace: true })
      }
    },
  })
  const { errors, handleChange, handleSubmit } = useForm<{
    newPassword: string
    newPasswordConfirm: string
  }>({
    initialState: {
      newPassword: '',
      newPasswordConfirm: '',
    },
    onSubmit: async (data) =>
      resetPwd({
        email,
        confirmToken,
        newPassword: data.newPassword,
        newPasswordConfirm: data.newPasswordConfirm,
      }),
    validate: (data) => {
      const errors = {} as { newPassword: string; newPasswordConfirm: string }
      const isSamePassword = data.newPassword === data.newPasswordConfirm

      if (!isSamePassword) {
        errors.newPasswordConfirm = '두 비밀번호가 일치하지 않습니다.'
      }

      if (!isEmpty(validate.password(data.newPassword))) {
        errors.newPassword = validate.password(data.newPassword)
      }

      if (!isEmpty(validate.password(data.newPasswordConfirm))) {
        errors.newPasswordConfirm = validate.password(data.newPasswordConfirm)
      }
      return errors
    },
  })

  return (
    <Form handleSubmit={handleSubmit}>
      <Form.Input
        onChange={handleChange}
        name="newPassword"
        label="새 비밀번호"
        placeholder={PASSWORD_PLACEHOLDER}
        ref={focusRef}
        password
      />
      {errors.newPassword && <Form.Error>{errors.newPassword}</Form.Error>}
      <Form.Input
        onChange={handleChange}
        name="newPasswordConfirm"
        label="비밀번호 확인"
        placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
        password
      />
      {errors.newPasswordConfirm && (
        <Form.Error>{errors.newPasswordConfirm}</Form.Error>
      )}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Spinner /> : '비밀번호 변경'}
      </Button>
    </Form>
  )
}

const Button = styled(ButtonBase)`
  margin-top: 16px;
`

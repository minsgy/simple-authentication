import { Form, Button as ButtonBase, Spinner } from '@/components'
import { useForm, useConfirmCode, useToast, useAutoFocus } from '@/hooks'
import { validate } from '@/utils/validate'
import { isEmpty } from 'lodash'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const AUTH_CODE_PLACEHOLDER = 'ex) 인증코드 6자리'

interface ConfirmAuthFormProps {
  email: string
  issueToken: string
}

export const ConfirmAuthForm = ({
  email,
  issueToken,
}: ConfirmAuthFormProps) => {
  const toast = useToast()
  const focusRef = useAutoFocus<HTMLInputElement>()
  const navigate = useNavigate()
  const { mutate: confirm, isLoading } = useConfirmCode({
    onSuccess({ confirmToken }) {
      toast.success('인증이 완료되었습니다.')
      navigate('/reset/password', {
        state: {
          email,
          confirmToken,
        },
        replace: true,
      })
    },
    onError(error) {
      toast.error(error.message)
    },
  })
  const { errors, handleChange, handleSubmit } = useForm<{
    confirmCode: string
  }>({
    initialState: {
      confirmCode: '',
    },
    onSubmit: (data) =>
      confirm({
        email,
        issueToken,
        authCode: data.confirmCode,
      }),
    validate: (data) => {
      const errors = {} as { confirmCode: string }
      if (!isEmpty(validate.confirmCode(data.confirmCode))) {
        errors.confirmCode = validate.confirmCode(data.confirmCode)
      }
      return errors
    },
  })

  return (
    <Form handleSubmit={handleSubmit}>
      <Form.Input
        name="confirmCode"
        placeholder={AUTH_CODE_PLACEHOLDER}
        onChange={handleChange}
        ref={focusRef}
      />
      {errors.confirmCode && <Form.Error>{errors.confirmCode}</Form.Error>}
      <NextStepButton type="submit" disabled={isLoading}>
        {isLoading ? <Spinner /> : '제출하기'}
      </NextStepButton>
    </Form>
  )
}

const NextStepButton = styled(ButtonBase)`
  margin-top: 16px;
`

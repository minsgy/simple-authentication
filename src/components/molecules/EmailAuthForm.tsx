import { Form, Button as ButtonBase, Spinner } from '@/components'
import { useAutoFocus, useForm, useAuthEmail, useToast } from '@/hooks'
import styled from 'styled-components'
import { validate } from '@/utils/validate'
import { useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'

const EMAIL_PLACEHOLDER = 'ex) ably@ably.com'

export const EmailAuthForm = () => {
  const focusRef = useAutoFocus<HTMLInputElement>()
  const toast = useToast()
  const navigate = useNavigate()
  const { errors, forms, handleChange, handleSubmit } = useForm<{
    email: string
  }>({
    initialState: {
      email: '',
    },
    onSubmit: () => fetchAuthentication(),
    validate: (data) => {
      const errors = {} as { email: string }

      if (!isEmpty(validate.email(data.email))) {
        errors.email = validate.email(data.email)
      }
      return errors
    },
  })

  const { refetch: fetchAuthentication, isFetching: isLoading } = useAuthEmail(
    forms.email,
    {
      enabled: false,
      onSuccess: ({ issueToken, remainMillisecond }) => {
        toast.success('인증 메일이 발송되었습니다.')
        navigate('/reset/confirm', {
          state: {
            email: forms.email,
            issueToken,
            remainMillisecond,
          },
          replace: true,
        })
      },
      onError: (error) => {
        toast.error(error.message)
      },
    },
  )

  return (
    <Form handleSubmit={handleSubmit}>
      <Form.Input
        name="email"
        value={forms.email}
        ref={focusRef}
        onChange={handleChange}
        placeholder={EMAIL_PLACEHOLDER}
      />
      {errors.email && <Form.Error>{errors.email}</Form.Error>}
      <NextStepButton type="submit" disabled={isLoading}>
        {isLoading ? <Spinner /> : '다음 단계'}
      </NextStepButton>
    </Form>
  )
}

const NextStepButton = styled(ButtonBase)`
  margin-top: 16px;
`

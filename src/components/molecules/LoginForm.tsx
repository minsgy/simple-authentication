import { LoginRequest } from '@/@types/api'
import { Button, Spinner, Form } from '@/components'
import { MESSAGE } from '@/constants/toast'
import { useForm, useAutoFocus, useLogin, useToast } from '@/hooks'
import { tokenState } from '@/store/auth'
import { validate } from '@/utils/validate'
import { isEmpty } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

const EMAIL_PLACEHOLDER = 'ex) ably@ably.com'
const PASSWORD_PLACEHOLDER = 'ex) 123456'

export const LoginForm = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const setAccessToken = useSetRecoilState(tokenState)
  const focusRef = useAutoFocus<HTMLInputElement>()
  const { mutate: login, isLoading } = useLogin({
    onSuccess: ({ accessToken }) => {
      toast.success(MESSAGE.LOGIN_SUCCESS)
      setAccessToken(accessToken)
      navigate('/my')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const { errors, handleChange, handleSubmit } = useForm<LoginRequest>({
    initialState: {
      email: '',
      password: '',
    },
    onSubmit: async (data) => login(data),
    validate: (data) => {
      const errors = {} as LoginRequest

      if (!isEmpty(validate.email(data.email))) {
        errors.email = validate.email(data.email)
      }

      if (!isEmpty(validate.password(data.password))) {
        errors.password = validate.password(data.password)
      }

      return errors
    },
  })

  return (
    <Wrapper>
      <Form handleSubmit={handleSubmit}>
        <Form.Input
          onChange={handleChange}
          name="email"
          label="이메일"
          placeholder={EMAIL_PLACEHOLDER}
          ref={focusRef}
        />
        {errors.email && <Form.Error>{errors.email}</Form.Error>}
        <Form.Input
          onChange={handleChange}
          name="password"
          label="비밀번호"
          placeholder={PASSWORD_PLACEHOLDER}
          password
        />
        {errors.password && <Form.Error>{errors.password}</Form.Error>}
        <ButtonGroup>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Spinner /> : '로그인'}
          </Button>
          <Button onClick={() => navigate('/reset/email')}>
            비밀번호 재설정
          </Button>
        </ButtonGroup>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`

const ButtonGroup = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
`

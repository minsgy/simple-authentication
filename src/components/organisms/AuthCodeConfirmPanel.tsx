import { Layout } from '@/layouts'
import { Header, Timer, ConfirmAuthForm } from '@/components'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { isEmpty } from 'lodash'

export const AuthCodeConfirmPanel = () => {
  const { state } = useLocation() as {
    state: {
      email: string
      issueToken: string
      remainMillisecond: number
    }
  }

  if (isEmpty(state)) {
    alert('정상적인 경로가 아닙니다.')
    return <Navigate to="/reset/email" replace />
  }

  const navigate = useNavigate()

  return (
    <Layout>
      <Header>
        <Header.Title>A B L Y</Header.Title>
        <Header.SubTitle>인증 번호 확인</Header.SubTitle>
        <Header.Content>
          이메일로 전송된 인증번호를 입력해주세요. <br />
          (테스트 코드 : 171009)
        </Header.Content>
      </Header>
      <TimerWrapper>
        남은 시간
        <Timer
          timer={state.remainMillisecond}
          onFinish={() => {
            alert('인증 시간이 초과되었습니다. 다시 인증해주세요.')
            navigate(-1)
          }}
        />
      </TimerWrapper>
      <ConfirmAuthForm issueToken={state.issueToken} email={state.email} />
    </Layout>
  )
}

const TimerWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 6px;

  font-size: 12px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.GRAY_60};
`

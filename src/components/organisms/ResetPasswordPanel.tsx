import { Layout } from '@/layouts'
import { Header, ResetPasswordForm } from '@/components'
import { Navigate, useLocation } from 'react-router-dom'
import { useToast } from '@/hooks'
import { MESSAGE } from '@/constants/toast'
import { isEmpty } from 'lodash'

export const ResetPasswordPanel = () => {
  const toast = useToast()
  const { state } = useLocation() as {
    state: {
      email: string
      confirmToken: string
    }
  }

  if (isEmpty(state)) {
    toast.error(MESSAGE.ROUTE_ERROR)
    return <Navigate to="/login" replace />
  }

  return (
    <Layout>
      <Header>
        <Header.Title>A B L Y</Header.Title>
        <Header.SubTitle>새 비밀번호 변경</Header.SubTitle>
        <Header.Content>
          사용 하실 새로운 비밀 번호를 입력해주세요. (8자 이상)
        </Header.Content>
      </Header>
      <ResetPasswordForm
        email={state.email}
        confirmToken={state.confirmToken}
      />
    </Layout>
  )
}

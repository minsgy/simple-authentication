import { Layout } from '@/layouts'
import {
  Header,
  Button as ButtonBase,
  ProfileCard,
  LoadingComponent,
} from '@/components'
import { useLogout, useUser, useToast } from '@/hooks'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import { tokenState } from '@/store/auth'
import { MESSAGE } from '@/constants/toast'

export const ProfilePanel = () => {
  const navigator = useNavigate()
  const toast = useToast()
  const resetToken = useResetRecoilState(tokenState)

  const { mutate: logout } = useLogout({
    onSuccess: () => {
      toast.success(MESSAGE.LOGOUT_SUCCESS)
      resetToken()
      navigator('/login')
    },
    onError: (error) => {
      toast.success(error.message)
      resetToken()
    },
  })

  const { data: user, isLoading } = useUser({
    onError: () => {
      toast.success(MESSAGE.FETCH_USER_ERROR)
      navigator('/login')
    },
  })

  if (isLoading) {
    return <LoadingComponent label="유저 정보를 불러오는 중입니다.." />
  }

  if (!user) {
    return null
  }

  return (
    <Layout>
      <Header>
        <Header.Title>A B L Y</Header.Title>
        <Header.SubTitle>프로필</Header.SubTitle>
        <Header.Content>접속한 내 정보를 확인할 수 있어요.</Header.Content>
      </Header>
      <ProfileCard user={user} />
      <LogoutButton onClick={logout}>로그아웃</LogoutButton>
    </Layout>
  )
}

const LogoutButton = styled(ButtonBase)`
  margin-top: 16px;
`

import { LoginForm, Header } from '@/components'
import { Layout } from '@/layouts'

export const LoginPanel = () => {
  return (
    <Layout>
      <Header>
        <Header.Title>A B L Y</Header.Title>
        <Header.Content>서비스 이용을 위해 로그인을 해주세요.</Header.Content>
      </Header>
      <LoginForm />
    </Layout>
  )
}

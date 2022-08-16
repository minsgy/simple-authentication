import { Header, EmailAuthForm } from '@/components'
import { Layout } from '@/layouts'

export const AuthCodeRequestPanel = () => {
  return (
    <Layout>
      <Header>
        <Header.Title>A B L Y</Header.Title>
        <Header.SubTitle>인증 코드 요청</Header.SubTitle>
        <Header.Content>
          가입한 이메일을 입력하여 인증 후<br />
          다음 단계로 이동합니다.
        </Header.Content>
      </Header>
      <EmailAuthForm />
    </Layout>
  )
}

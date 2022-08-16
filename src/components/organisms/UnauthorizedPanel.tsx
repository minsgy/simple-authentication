import { Layout } from '@/layouts'
import { Header } from '@/components'
import { Link as LinkBase } from 'react-router-dom'
import styled from 'styled-components'

export const UnauthorizedPanel = () => {
  return (
    <Layout>
      <Header>
        <Header.Title>A B L Y</Header.Title>
        <Header.SubTitle>
          해당 페이지는 로그인을 해야 이용 가능합니다.
        </Header.SubTitle>
        <Header.Content>
          <Link to="/login">로그인 페이지</Link>로 이동하여 로그인 후
          이용해주세요.
        </Header.Content>
      </Header>
    </Layout>
  )
}

const Link = styled(LinkBase)`
  color: ${({ theme }) => theme.colors.PINK};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.PINK};
    text-decoration: underline;
  }
`

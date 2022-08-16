import { UserInfoResponse } from '@/@types/api'
import { Image } from '@/components'
import styled from 'styled-components'

interface ProfileCardProps {
  user: UserInfoResponse
}

export const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <Wrapper>
      <ProfileImage>
        <Image alt="이미지" src={user.profileImage} mode="cover" />
      </ProfileImage>
      <ProfileContentBox>
        <Content>이름 : {user.name}</Content>
        <Content>이메일 : {user.email}</Content>
      </ProfileContentBox>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  border-radius: 16px;
  text-align: center;
`

const ProfileImage = styled('div')`
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
`

const ProfileContentBox = styled('div')`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Content = styled('span')`
  display: inline-block;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.GRAY_60};
`

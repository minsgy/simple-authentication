import { EMAIL_REGEX, NUMBER_REGEX } from '@/constants/regexp'
import { isEmpty } from 'lodash'

export const validate = {
  email: (email: string) => {
    if (isEmpty(email)) {
      return '이메일이 입력되지 않았습니다.'
    }

    if (!EMAIL_REGEX.test(email)) {
      return '이메일 형식이 올바르지 않습니다.'
    }

    return ''
  },
  password: (password: string) => {
    if (isEmpty(password)) {
      return '비밀번호가 입력되지 않았습니다.'
    }

    if (password.length < 8) {
      return '비밀번호는 8자 이상이어야 합니다.'
    }

    return ''
  },
  confirmCode: (number: string) => {
    if (isEmpty(number)) {
      return '인증번호가 입력되지 않았습니다.'
    }

    if (!NUMBER_REGEX.test(number)) {
      return '인증번호는 숫자만 입력해주세요.'
    }

    return ''
  },
}

/**
 * API response from /api/login
 */
export interface LoginRequest {
  email: string
  password: string
}
export interface LoginResponse {
  accessToken: string
}

/**
 * API response from /api/logout
 */

export interface LogoutResponse {
  lastConnectedAt: Date
}

/**
 * API response from /api/user
 */
export interface UserInfoResponse {
  name: string // 이름
  email: string // 이메일
  profileImage: string // 프로필 사진 URL
  lastConnectedAt: Date // 마지막 접속 일자
}

/**
 * API response from /api/reset-password?email=...
 * methods: GET, POST, PATCH
 */

export interface AuthenticationEmailResponse {
  issueToken: string // 인증 코드 발급 요청 토큰
  remainMillisecond: number // 인증 코드 확인 남은 시간
}

export interface ConfirmCodeRequest {
  email: string
  authCode: string
  issueToken: string
}

export interface ConfirmCodeResponse {
  confirmToken: string
}

export interface ResetPasswordRequest {
  email: string
  confirmToken: string
  newPassword: string
  newPasswordConfirm: string
}

export interface ResetPasswordResponse {
  email: string
}

/**
 * Custom Error type for API response
 */
export interface CustomAxiosError {
  error: {
    response?: {
      data: {
        error: {
          message: string
        }
      }
    }
  }
}

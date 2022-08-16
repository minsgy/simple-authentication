export const QUERY_KEY = {
  USER: 'user',
  EMAIL: 'email',
} as const

export const REACT_QUERY_KEY = {
  USER: (token: string) => [QUERY_KEY.USER, token],
  EMAIL: (email: string) => [QUERY_KEY.USER, email],
}

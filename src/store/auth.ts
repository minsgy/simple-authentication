import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const tokenState = atom<string>({
  key: 'auth/accessToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
})

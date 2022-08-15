import { Colors } from '@/styles/common/colors'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
  }
}

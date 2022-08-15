export interface Colors {
  GRAY_30: string
  GRAY_60: string
  GRAY_90: string
  BLACK: string
  WHITE: string
  PINK: string
  PINK_30: string
  PINK_60: string
}

const colors: Colors = {
  BLACK: '#000',
  WHITE: '#fff',
  GRAY_30: '#ccc',
  GRAY_60: '#666',
  GRAY_90: '#999',
  PINK: '#ff3d67',
  PINK_30: '#ff3d97',
  PINK_60: '#ff1d87',
} as const

export default colors

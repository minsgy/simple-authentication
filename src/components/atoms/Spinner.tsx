import { theme } from '@/styles/common/theme'
import styled from 'styled-components'

interface SpinnerProps {
  size?: number
  isLoading?: boolean
}

export const Spinner = ({ size = 16, isLoading = true }: SpinnerProps) => {
  const sizeStyle = {
    width: size,
    height: size,
  }

  return isLoading ? (
    <IconBase>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke={theme.colors.WHITE}
        style={sizeStyle}
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </IconBase>
  ) : null
}

const IconBase = styled('i')`
  display: flex;
`

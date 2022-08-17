import { useEffect } from 'react'
import { useState, useRef } from 'react'
import styled, { css } from 'styled-components'

export interface ImageProps {
  ref?: React.RefObject<HTMLImageElement>
  lazy?: boolean
  threshold?: number
  src?: string
  placeholder?: string
  alt: string
  width?: number
  height?: number
  block?: boolean
  mode?: 'contain' | 'cover' | 'none'
  style?: React.CSSProperties
}

let observer: IntersectionObserver | null = null

// CUSTOM EVENT TYPE
const LOAD_IMG_EVENT_TYPE = 'loadImage'

// Custom Event 생성
const onIntersection: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // IntersectionObserver가 인식한 이미지가 보여지는 영역에 들어왔을 때,
      observer.unobserve(entry.target) // 기존 element observe를 해제한다.
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE)) // 커스텀 이벤트를 호출한다.
    }
  })
}

export const Image = ({
  lazy,
  threshold = 0.3,
  src,
  placeholder = 'https://via.placeholder.com/360x360',
  alt,
  width,
  height,
  mode,
  block,
  style,
  ...props
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!lazy) {
      // Lazy가 false라면, 바로 로딩 시작.
      setIsLoaded(true)
      return
    }
    // 만약 Lazy가 true라면, IntersectionObserver를 사용하여 로딩 시작.
    const handleLoadImage = () => setIsLoaded(true)
    const imgElement = imgRef.current

    // imgElement가 지정되었다면, 로딩 이벤트를 적용
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
    }
  }, [lazy])

  useEffect(() => {
    if (!lazy) return
    if (!observer) {
      // observer가 없다면 새로 만든다.
      observer = new IntersectionObserver(onIntersection, { threshold })
    }
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])

  return (
    <ImageBase
      ref={imgRef}
      alt={alt}
      src={isLoaded ? src : placeholder}
      width={width}
      height={height}
      mode={mode}
      block={block}
      style={style}
      {...props}
    />
  )
}

const ImageBase = styled('img')<ImageProps>`
  ${(props) => {
    const { width, height, mode, block } = props
    return css`
      width: ${width ? `${width}px` : '100%'};
      height: ${height ? `${height}px` : '100%'};
      object-fit: ${mode ?? 'fill'};
      display: ${block ? 'block' : 'inline-block'};
    `
  }}
  vertical-align: top;
`

import { useEffect, useRef } from 'react'

type IntervalCallback = () => void

export const useInterval = (
  callback: IntervalCallback,
  delay: number | null,
) => {
  const savedCallback = useRef<IntervalCallback>() // @NOTE : Ref를 활용하여 콜백함수가 변경되어도 Interval이 끝나지않음.
  // 함수 최적화를 위한 변수 (최초 한번만 실행)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const callback = () => {
      // @NOTE : 콜백함수가 없을 경우, Interval을 중지한다.
      savedCallback.current && savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(callback, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

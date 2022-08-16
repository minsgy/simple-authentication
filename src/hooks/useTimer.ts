import { formatter } from '@/utils/formatter'
import { useState } from 'react'
import { useInterval } from './useInterval'

export const useTimer = (time: number, onFinish?: () => void) => {
  const [minute, setMinute] = useState(time / 60 / 1000)
  const [second, setSecond] = useState(time / 1000 - minute * 60)

  const [finished, setFinished] = useState(true)

  useInterval(
    () => {
      if (second > 0) {
        setSecond(second - 1)
      } else if (minute > 0) {
        setMinute(minute - 1)
        setSecond(59)
      } else {
        setFinished(false)
        onFinish?.()
      }
    },
    finished ? 1000 : null,
  )

  return {
    minute: formatter.timeSystem(minute),
    second: formatter.timeSystem(second),
  }
}

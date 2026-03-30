import { useEffect, useRef, useState } from 'react'

interface UseAutoAdvanceOptions {
  enabled: boolean
  duration?: number
  onAdvance: () => void
}

export function useAutoAdvance({
  enabled,
  duration = 5,
  onAdvance,
}: UseAutoAdvanceOptions) {
  const [countdown, setCountdown] = useState(duration)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const onAdvanceRef = useRef(onAdvance)
  // 用 ref 追蹤剩餘秒數，避免在 setState updater 裡呼叫 side effect（React Strict Mode 下 updater 會執行兩次）
  const countRef = useRef(duration)

  useEffect(() => {
    onAdvanceRef.current = onAdvance
  }, [onAdvance])

  useEffect(() => {
    if (!enabled) {
      setCountdown(duration)
      countRef.current = duration
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      return
    }

    countRef.current = duration
    setCountdown(duration)

    timerRef.current = setInterval(() => {
      countRef.current -= 1
      setCountdown(countRef.current)

      if (countRef.current <= 0) {
        clearInterval(timerRef.current!)
        timerRef.current = null
        onAdvanceRef.current()
      }
    }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [enabled, duration])

  const cancel = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    countRef.current = duration
    setCountdown(duration)
  }

  return { countdown, cancel }
}

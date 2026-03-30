import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { AnswerRecord } from '@/lib/types'
import { useQuizStore } from '@/stores/quizStore'
import { useAutoAdvance } from './useAutoAdvance'

type Phase = 'answering' | 'explaining'

export function useQuiz() {
  const router = useRouter()
  const { session, submitAnswer, completeQuiz, openResult } = useQuizStore()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('answering')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [startTime, setStartTime] = useState<number>(Date.now())
  // 關閉解答模式：開啟時只顯示 Toast 並自動跳題，不顯示詳細解析
  const [hideExplanation, setHideExplanation] = useState(false)

  const toggleHideExplanation = useCallback(() => {
    setHideExplanation((v) => !v)
  }, [])

  const questions = session?.questions ?? []
  const currentQuestion = questions[currentIndex] ?? null
  const isLastQuestion = currentIndex === questions.length - 1

  const handleNext = useCallback(async () => {
    if (isLastQuestion) {
      await completeQuiz()
      openResult()
      router.push('/')
    } else {
      setCurrentIndex((i) => i + 1)
      setPhase('answering')
      setSelectedIndex(null)
      setIsCorrect(null)
      setStartTime(Date.now())
    }
  }, [isLastQuestion, completeQuiz, openResult, router])

  // 關閉解答模式 → Toast 2 秒自動跳；最後一題固定 5 秒
  const autoAdvanceDuration = hideExplanation && !isLastQuestion ? 2 : 5

  const { countdown, cancel: cancelAutoAdvance } = useAutoAdvance({
    enabled: phase === 'explaining' && (hideExplanation || isLastQuestion),
    duration: autoAdvanceDuration,
    onAdvance: handleNext,
  })

  const handleSelectOption = useCallback(
    async (index: number) => {
      if (phase !== 'answering' || !currentQuestion) return

      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      setSelectedIndex(index)

      const response = await submitAnswer(
        currentQuestion.id,
        index,
        timeSpent
      )

      setIsCorrect(response.correct)
      setPhase('explaining')
    },
    [phase, currentQuestion, startTime, submitAnswer]
  )

  const handleNextClick = useCallback(() => {
    cancelAutoAdvance()
    handleNext()
  }, [cancelAutoAdvance, handleNext])

  const answers: AnswerRecord[] = session?.answers ?? []

  return {
    currentIndex,
    phase,
    currentQuestion,
    selectedIndex,
    isCorrect,
    countdown,
    isLastQuestion,
    answers,
    hideExplanation,
    handleSelectOption,
    handleNextClick,
    toggleHideExplanation,
  }
}

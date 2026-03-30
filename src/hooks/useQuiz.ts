import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { AnswerRecord } from '@/lib/types'
import { useQuizStore } from '@/stores/quizStore'

type Phase = 'answering' | 'explaining'

export function useQuiz() {
  const router = useRouter()
  const { session, submitAnswer, completeQuiz, openResult } = useQuizStore()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('answering')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [startTime, setStartTime] = useState<number>(Date.now())

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

  const answers: AnswerRecord[] = session?.answers ?? []

  return {
    currentIndex,
    phase,
    currentQuestion,
    selectedIndex,
    isCorrect,
    isLastQuestion,
    answers,
    handleSelectOption,
    handleNext,
  }
}

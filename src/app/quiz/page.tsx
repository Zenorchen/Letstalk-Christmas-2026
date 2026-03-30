'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useQuizStore } from '@/stores/quizStore'
import { useQuiz } from '@/hooks/useQuiz'
import ProgressBar from '@/components/quiz/ProgressBar'
import QuestionCard from '@/components/quiz/QuestionCard'
import OptionButton from '@/components/quiz/OptionButton'
import ExplanationSheet from '@/components/quiz/ExplanationSheet'
import type { AnswerRecord } from '@/lib/types'

function getOptionState(
  optionIndex: number,
  selectedIndex: number | null,
  isCorrect: boolean | null,
  correctIndex: number,
  phase: 'answering' | 'explaining'
): 'default' | 'selected' | 'correct' | 'wrong' {
  if (phase === 'answering') return 'default'
  if (optionIndex === correctIndex) return 'correct'
  if (optionIndex === selectedIndex && !isCorrect) return 'wrong'
  if (optionIndex === selectedIndex) return 'selected'
  return 'default'
}

export default function QuizPage() {
  const router = useRouter()
  const { session } = useQuizStore()

  useEffect(() => {
    if (!session) {
      router.replace('/')
    }
  }, [session, router])

  const {
    currentIndex,
    phase,
    currentQuestion,
    selectedIndex,
    isCorrect,
    isLastQuestion,
    answers,
    handleSelectOption,
    handleNext,
  } = useQuiz()

  if (!session || !currentQuestion) return null

  const correctCount = (answers as AnswerRecord[]).filter((a) => a.isCorrect).length

  return (
    <main className="flex flex-col gap-4 px-4 py-6 pb-40">
      <ProgressBar
        current={currentIndex}
        total={session.questions.length}
        correctCount={correctCount}
      />

      <QuestionCard questionText={currentQuestion.text} />

      <div className="flex flex-col gap-2">
        {currentQuestion.options.map((option, i) => (
          <OptionButton
            key={i}
            text={option}
            index={i}
            state={getOptionState(
              i,
              selectedIndex,
              isCorrect,
              currentQuestion.correctIndex,
              phase
            )}
            disabled={phase === 'explaining'}
            onSelect={handleSelectOption}
          />
        ))}
      </div>

      {phase === 'explaining' && (
        <ExplanationSheet
          isCorrect={isCorrect ?? false}
          explanation={currentQuestion.explanation}
          onNext={handleNext}
          isLastQuestion={isLastQuestion}
        />
      )}
    </main>
  )
}

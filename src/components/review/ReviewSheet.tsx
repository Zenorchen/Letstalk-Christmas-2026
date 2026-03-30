import type { Question, AnswerRecord } from '@/lib/types'
import ReviewItem from './ReviewItem'

interface ReviewSheetProps {
  questions: Question[]
  answers: AnswerRecord[]
  score: number
  title: string
}

export default function ReviewSheet({ questions, answers, score, title }: ReviewSheetProps) {
  return (
    <div className="flex flex-col gap-3 pb-8">
      {/* 分數摘要 */}
      <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded flex items-center justify-between">
        <span className="text-sm text-gray-600">{title}</span>
        <span className="font-bold">{score} / 10 題答對</span>
      </div>

      {/* 題目列表 */}
      <div className="flex flex-col gap-2">
        {questions.map((question, i) => {
          const answer = answers.find((a) => a.questionId === question.id)
          if (!answer) return null
          return (
            <ReviewItem
              key={question.id}
              question={question}
              answer={answer}
              index={i}
              defaultExpanded={i === 0}
            />
          )
        })}
      </div>
    </div>
  )
}

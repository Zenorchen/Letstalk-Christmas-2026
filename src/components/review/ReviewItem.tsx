'use client'

import { useState } from 'react'
import type { Question, AnswerRecord } from '@/lib/types'

interface ReviewItemProps {
  question: Question
  answer: AnswerRecord
  index: number
  defaultExpanded?: boolean
}

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function ReviewItem({
  question,
  answer,
  index,
  defaultExpanded = false,
}: ReviewItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      {/* 收合標題列 */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-white"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0 mr-2">
          <span
            className={`text-xs font-bold px-1.5 py-0.5 rounded shrink-0 ${
              answer.isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {answer.isCorrect ? '✓' : '✗'}
          </span>
          <span className="text-sm font-medium truncate">
            Q{index + 1}. {question.text.slice(0, 20)}
            {question.text.length > 20 ? '…' : ''}
          </span>
        </div>
        <span className="text-gray-400 text-sm shrink-0">{expanded ? '▲' : '▼'}</span>
      </button>

      {/* 展開內容 */}
      {expanded && (
        <div className="px-4 pb-4 flex flex-col gap-2 bg-gray-50">
          <p className="text-sm text-gray-800">{question.text}</p>

          <div className="flex flex-col gap-1">
            {question.options.map((option, i) => {
              const isCorrect = i === question.correctIndex
              const isSelected = i === answer.selectedIndex
              let cls = 'text-gray-600'
              if (isCorrect) cls = 'text-green-700 font-bold'
              else if (isSelected && !isCorrect) cls = 'text-red-600 line-through'

              return (
                <div key={i} className={`text-sm flex gap-2 ${cls}`}>
                  <span>{OPTION_LABELS[i]}.</span>
                  <span>{option}</span>
                  {isCorrect && <span className="text-xs">（正確答案）</span>}
                  {isSelected && !isCorrect && <span className="text-xs">（你的選擇）</span>}
                </div>
              )
            })}
          </div>

          <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-2">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { useQuizStore } from '@/stores/quizStore'
import ReviewSheet from '@/components/review/ReviewSheet'

export default function ReviewPage() {
  const router = useRouter()
  const { session, history } = useQuizStore()

  // 只在 session 已完成（有 completedAt）時才使用它；否則用 history
  const completedSession = session?.completedAt ? session : null
  const questions = completedSession?.questions ?? history?.lastSession?.questions ?? []
  const answers = completedSession?.answers ?? history?.lastSession?.answers ?? []
  const score = history?.lastSession?.score ?? completedSession?.answers.filter((a) => a.isCorrect).length ?? 0
  const title = history?.lastSession?.title ?? ''

  return (
    <main className="flex flex-col min-h-screen">
      {/* 頂部導覽列 */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
        <button
          onClick={() => router.push('/')}
          className="text-gray-700 text-sm flex items-center gap-1"
        >
          ← 回到首頁
        </button>
        <h1 className="text-base font-bold flex-1 text-center pr-12">答題紀錄</h1>
      </div>

      <div className="px-4 py-4">
        <ReviewSheet
          questions={questions}
          answers={answers}
          score={score}
          title={title}
        />
      </div>
    </main>
  )
}

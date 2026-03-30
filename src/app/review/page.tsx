'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useQuizStore } from '@/stores/quizStore'
import ReviewSheet from '@/components/review/ReviewSheet'
import TitleBadge from '@/components/result/TitleBadge'

export default function ReviewPage() {
  const router = useRouter()
  const { session, history, closeResult, userNickname, playCount, result } = useQuizStore()
  const [showShare, setShowShare] = useState(false)

  const completedSession = session?.completedAt ? session : null
  const questions = completedSession?.questions ?? history?.lastSession?.questions ?? []
  const answers = completedSession?.answers ?? history?.lastSession?.answers ?? []
  const score = history?.lastSession?.score ?? completedSession?.answers.filter((a) => a.isCorrect).length ?? 0
  const title = history?.lastSession?.title ?? result?.title ?? ''
  const tier = history?.lastSession?.titleTier ?? result?.titleTier ?? 'bronze'

  const handleShare = () => {
    alert('分享功能將由 APP 介面處理')
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* 頂部導覽列 */}
      <div className="flex items-center px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-10">
        <button
          onClick={() => { closeResult(); router.push('/') }}
          className="text-gray-700 text-sm flex items-center gap-1 shrink-0"
        >
          ← 回到首頁
        </button>
        <h1 className="text-base font-bold flex-1 text-center">答題紀錄</h1>
        <button
          onClick={() => setShowShare(true)}
          className="text-sm text-gray-700 font-medium shrink-0"
        >
          分享結果
        </button>
      </div>

      <div className="px-4 py-4">
        <ReviewSheet
          questions={questions}
          answers={answers}
          score={score}
          title={title}
        />
      </div>

      {/* 分享結果 Dialog */}
      {showShare && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="w-full max-w-sm bg-white rounded-2xl p-6 flex flex-col gap-4">

            {/* 暱稱置中 + ✕ 右上角 */}
            <div className="relative flex items-center justify-center">
              <h2 className="text-base font-bold">{userNickname}</h2>
              <button
                onClick={() => setShowShare(false)}
                className="absolute right-0 text-gray-500 text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* 頭像 + 皇冠 */}
            <TitleBadge
              title=""
              tier={tier}
              userNickname={userNickname}
            />

            {/* 分數 */}
            <div className="text-4xl font-bold text-center">{score * 10}</div>

            {/* 稱號：分數下方大字 */}
            {title && (
              <p className="text-xl font-bold text-center" style={{ color: '#0ABAB5' }}>{title}</p>
            )}

            {/* 答過幾次 */}
            <p className="text-xs text-gray-400 text-center">第 {playCount} 次挑戰</p>

            {/* 按鈕區 */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={handleShare}
                className="w-full py-3 bg-gray-800 text-white text-sm font-bold rounded-xl"
              >
                分享結果
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

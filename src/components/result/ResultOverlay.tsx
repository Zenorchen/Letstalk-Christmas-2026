'use client'

import { useRouter } from 'next/navigation'
import type { QuizResult } from '@/lib/types'
import TitleBadge from './TitleBadge'
import ScoreSummary from './ScoreSummary'
import ShareButton from './ShareButton'

interface ResultOverlayProps {
  result: QuizResult
  onClose: () => void
  onShare: () => void
  playCount: number
  userNickname: string
}

export default function ResultOverlay({
  result,
  onClose,
  onShare,
  playCount,
  userNickname,
}: ResultOverlayProps) {
  const router = useRouter()

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
      <div className="w-full max-w-sm bg-white rounded-2xl p-6 flex flex-col gap-5">

        {/* 標題：只顯示名字，置中；關閉按鈕絕對靠右 */}
        <div className="relative flex items-center justify-center">
          <h2 className="text-base font-bold">{userNickname}</h2>
          <button
            onClick={onClose}
            className="absolute right-0 text-gray-500 text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* 大頭貼 + 頭銜（每個級別皆有皇冠） */}
        <TitleBadge
          title={result.title}
          tier={result.titleTier}
          userNickname={userNickname}
        />

        {/* 分數 */}
        <ScoreSummary score={result.score} total={10} />

        {/* 第幾次挑戰（分數下方小字） */}
        <p className="text-xs text-gray-400 text-center -mt-3">
          第 {playCount} 次挑戰
        </p>

        {/* 貼圖解鎖提示 */}
        {result.stickerUnlocked && (
          <div className="p-3 bg-gray-100 rounded text-sm text-center text-gray-700">
            🎁 快去聊天室查看限定動態貼圖！
          </div>
        )}

        {/* 行動按鈕 */}
        <div className="flex flex-col gap-2">
          <ShareButton onShare={onShare} />
          <button
            onClick={() => router.push('/review')}
            className="w-full py-3 text-sm text-gray-600 underline"
          >
            查看答題紀錄
          </button>
        </div>
      </div>
    </div>
  )
}

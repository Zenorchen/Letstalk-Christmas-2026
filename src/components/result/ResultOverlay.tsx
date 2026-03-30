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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6">
      <div className="w-full max-w-sm bg-xmas-cream rounded-3xl p-6 flex flex-col gap-5 border-2 border-xmas-gold/40 shadow-xl">

        {/* 標題：名字置中，✕ 右上 */}
        <div className="relative flex items-center justify-center">
          <h2 className="text-base font-bold text-xmas-brown">{userNickname}</h2>
          <button
            onClick={onClose}
            className="absolute right-0 text-xmas-brown-light text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* 頭貼 + 皇冠 */}
        <TitleBadge
          title={result.title}
          tier={result.titleTier}
          userNickname={userNickname}
        />

        {/* 分數 */}
        <ScoreSummary score={result.score} total={10} />

        {/* 稱號 */}
        {result.title && (
          <p className="text-xl font-bold text-center" style={{ color: '#0ABAB5' }}>
            {result.title}
          </p>
        )}

        {/* 第幾次挑戰 */}
        <p className="text-xs text-xmas-brown-light text-center -mt-3">
          第 {playCount} 次挑戰
        </p>

        {/* 貼圖解鎖提示 */}
        {result.stickerUnlocked && (
          <div className="p-3 bg-xmas-gold/15 rounded-2xl text-sm text-center text-xmas-brown-mid border border-xmas-gold/40">
            🎁 快去聊天室查看限定動態貼圖！
          </div>
        )}

        {/* 行動按鈕 */}
        <div className="flex flex-col gap-2">
          <ShareButton onShare={onShare} />
          <button
            onClick={() => router.push('/review')}
            className="w-full py-3 text-sm text-xmas-brown-mid underline"
          >
            查看答題紀錄
          </button>
        </div>
      </div>
    </div>
  )
}

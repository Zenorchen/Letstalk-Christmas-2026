'use client'

import { useRouter } from 'next/navigation'

interface LastRecordEntryProps {
  score: number
  title: string
}

export default function LastRecordEntry({ score, title }: LastRecordEntryProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/review')}
      className="w-full flex items-center justify-between px-4 py-3 border border-xmas-gold/50 rounded-2xl bg-xmas-card text-sm"
    >
      <div className="flex flex-col items-start">
        <span className="text-xs text-xmas-brown-light">上次紀錄</span>
        <span className="font-medium text-xmas-brown">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xmas-brown-mid">{score} / 10 題答對</span>
        <span className="text-xmas-gold">›</span>
      </div>
    </button>
  )
}

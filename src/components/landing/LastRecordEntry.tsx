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
      className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded text-sm"
    >
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-500">上次紀錄</span>
        <span className="font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-700">{score} / 10 題答對</span>
        <span className="text-gray-400">›</span>
      </div>
    </button>
  )
}

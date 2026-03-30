'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useQuizStore } from '@/stores/quizStore'
import HeroBanner from '@/components/landing/HeroBanner'
import GiftPreview from '@/components/landing/GiftPreview'
import StartButton from '@/components/landing/StartButton'
import LastRecordEntry from '@/components/landing/LastRecordEntry'
import ResultOverlay from '@/components/result/ResultOverlay'

const MOCK_USER_ID = 'user_local'

export default function LandingPage() {
  const router = useRouter()
  const {
    history,
    showResult,
    result,
    loadHistory,
    startNewQuiz,
    closeResult,
  } = useQuizStore()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadHistory(MOCK_USER_ID)
  }, [loadHistory])

  const hasPlayed = history?.hasPlayed ?? false

  const handleStart = async () => {
    setLoading(true)
    try {
      await startNewQuiz()
      router.push('/quiz')
    } finally {
      setLoading(false)
    }
  }

  const handleShare = () => {
    alert('分享功能將由 APP 介面處理')
  }

  return (
    <main className="flex flex-col gap-4 px-4 py-6">
      <HeroBanner />
      <GiftPreview />

      <StartButton
        hasPlayed={hasPlayed}
        onStart={handleStart}
        loading={loading}
      />

      {hasPlayed && history?.lastSession && (
        <LastRecordEntry
          score={history.lastSession.score}
          title={history.lastSession.title}
        />
      )}

      {showResult && result && (
        <ResultOverlay
          result={result}
          onClose={closeResult}
          onShare={handleShare}
        />
      )}
    </main>
  )
}

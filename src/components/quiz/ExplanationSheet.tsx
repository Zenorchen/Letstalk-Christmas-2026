'use client'

import { useEffect, useState } from 'react'

interface ExplanationSheetProps {
  isCorrect: boolean
  explanation: string
  onNext: () => void
  isLastQuestion: boolean
}

const BURST_COLORS = ['#ff595e', '#ffca3a', '#6a4c93', '#1982c4', '#8ac926', '#ff924c', '#fff']
const BURST_COUNT = 48

function CorrectBurst() {
  const particles = Array.from({ length: BURST_COUNT }, (_, i) => {
    const angle = (i / BURST_COUNT) * 360
    const rad = (angle * Math.PI) / 180
    const dist = 100 + (i % 6) * 25
    const dx = Math.round(Math.cos(rad) * dist)
    const dy = Math.round(Math.sin(rad) * dist)
    const size = i % 4 === 0 ? 10 : 6
    const color = BURST_COLORS[i % BURST_COLORS.length]
    const isCircle = i % 3 !== 0
    const delay = `${(i % 8) * 0.03}s`
    const duration = `${0.5 + (i % 5) * 0.07}s`
    return { id: i, dx, dy, size, color, isCircle, delay, duration }
  })

  return (
    <>
      <style>{`
        @keyframes burst-out {
          0%   { transform: translate(0,0) scale(1.3); opacity: 1; }
          80%  { opacity: 0.7; }
          100% { transform: translate(var(--bx), var(--by)) scale(0); opacity: 0; }
        }
      `}</style>
      {/* 固定在畫面正中央，向四面爆開 */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center z-50">
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: p.isCircle ? '50%' : '2px',
              ['--bx' as string]: `${p.dx}px`,
              ['--by' as string]: `${p.dy}px`,
              animation: `burst-out ${p.duration} ${p.delay} ease-out forwards`,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default function ExplanationSheet({
  isCorrect,
  explanation,
  onNext,
  isLastQuestion,
}: ExplanationSheetProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <>
      {isCorrect && <CorrectBurst />}

      <div
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-[375px] mx-auto bg-white border-t border-gray-200 rounded-t-2xl shadow-xl p-4 flex flex-col gap-3">

          <span
            className={`text-lg font-bold ${
              isCorrect ? 'text-green-700' : 'text-red-600'
            }`}
          >
            {isCorrect ? '✓ 答對了！' : '✗ 答錯了'}
          </span>

          <p className="text-sm text-gray-700 leading-relaxed">{explanation}</p>

          <button
            onClick={onNext}
            className="w-full h-14 bg-gray-800 text-white text-lg font-bold rounded-xl"
          >
            {isLastQuestion ? '查看結果' : '下一題'}
          </button>
        </div>
      </div>
    </>
  )
}

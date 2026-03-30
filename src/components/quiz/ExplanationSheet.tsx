'use client'

import { useEffect, useState } from 'react'

interface ExplanationSheetProps {
  isCorrect: boolean
  explanation: string
  countdown: number
  onNext: () => void
  isLastQuestion: boolean
  hideExplanation: boolean
  onToggleHideExplanation: () => void
}

function ToggleSwitch({
  checked,
  onClick,
}: {
  checked: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0"
    >
      <span>關閉解答</span>
      <span
        className={`inline-flex items-center w-8 h-[18px] rounded-full transition-colors ${
          checked ? 'bg-gray-700' : 'bg-gray-300'
        }`}
      >
        <span
          className={`w-3.5 h-3.5 bg-white rounded-full shadow transition-transform mx-0.5 ${
            checked ? 'translate-x-[14px]' : 'translate-x-0'
          }`}
        />
      </span>
    </button>
  )
}

export default function ExplanationSheet({
  isCorrect,
  explanation,
  countdown,
  onNext,
  isLastQuestion,
  hideExplanation,
  onToggleHideExplanation,
}: ExplanationSheetProps) {
  // 掛載後才設為 visible，讓 CSS transition 觸發滑入動畫
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* 卡片本體：max-w 置中、頂部圓角 */}
      <div className="max-w-[375px] mx-auto bg-white border-t border-gray-200 rounded-t-2xl shadow-xl p-4 flex flex-col gap-3">

        {/* ── 第一行：答對/錯 ＋ 關閉解答 toggle ── */}
        <div className="flex items-center justify-between">
          <span
            className={`text-lg font-bold ${
              isCorrect ? 'text-green-700' : 'text-red-600'
            }`}
          >
            {isCorrect ? '✓ 答對了！' : '✗ 答錯了'}
          </span>

          <ToggleSwitch
            checked={hideExplanation}
            onClick={onToggleHideExplanation}
          />
        </div>

        {/* ── 解析文字（關閉解答時隱藏） ── */}
        {!hideExplanation && (
          <p className="text-sm text-gray-700 leading-relaxed">{explanation}</p>
        )}

        {/* ── 倒數提示 ── */}
        {(hideExplanation || isLastQuestion) && (
          <p className="text-xs text-gray-400">
            {countdown} 秒後自動{isLastQuestion ? '查看結果' : '跳下一題'}
          </p>
        )}

        {/* ── 下一題 / 查看結果 按鈕（關閉解答時隱藏；最後一題始終顯示） ── */}
        {(!hideExplanation || isLastQuestion) && (
          <button
            onClick={onNext}
            className="w-full h-14 bg-gray-800 text-white text-lg font-bold rounded-xl"
          >
            {isLastQuestion ? '查看結果' : '下一題'}
          </button>
        )}
      </div>
    </div>
  )
}

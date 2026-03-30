interface ProgressBarProps {
  current: number
  total: number
  correctCount: number
}

export default function ProgressBar({ current, total, correctCount }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs text-xmas-brown-mid">
        <span>第 {current + 1} / {total} 題</span>
        <span>答對 {correctCount} 題</span>
      </div>
      <div className="w-full h-2 bg-xmas-gold/25 rounded-full">
        <div
          className="h-2 bg-xmas-red rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

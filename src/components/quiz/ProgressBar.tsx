interface ProgressBarProps {
  current: number
  total: number
  correctCount: number
}

export default function ProgressBar({ current, total, correctCount }: ProgressBarProps) {
  const percentage = ((current) / total) * 100

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs text-gray-600">
        <span>
          第 {current + 1} / {total} 題
        </span>
        <span>答對 {correctCount} 題</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-gray-700 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

interface ScoreSummaryProps {
  score: number
  total: number
}

export default function ScoreSummary({ score, total }: ScoreSummaryProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-4xl font-bold">
        {score}
        <span className="text-lg font-normal text-gray-500"> / {total}</span>
      </div>
      <p className="text-sm text-gray-600">題答對</p>
      {score >= 1 && (
        <p className="text-xs text-gray-500">聖誕快樂！超萌貼圖已解鎖 🎄</p>
      )}
    </div>
  )
}

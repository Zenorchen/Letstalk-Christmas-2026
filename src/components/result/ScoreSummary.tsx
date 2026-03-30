interface ScoreSummaryProps {
  score: number
  total: number
}

export default function ScoreSummary({ score, total }: ScoreSummaryProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-5xl font-bold text-center text-xmas-red">{score * 10}</div>
      {score >= 1 && (
        <p className="text-xs text-xmas-brown-light">聖誕快樂！超萌貼圖已解鎖 🎄</p>
      )}
    </div>
  )
}

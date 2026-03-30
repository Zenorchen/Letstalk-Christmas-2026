interface QuestionCardProps {
  questionText: string
}

export default function QuestionCard({ questionText }: QuestionCardProps) {
  return (
    <div className="p-4 bg-xmas-card border border-xmas-gold/40 rounded-2xl shadow-sm">
      <p className="text-base font-medium leading-relaxed text-xmas-brown">{questionText}</p>
    </div>
  )
}

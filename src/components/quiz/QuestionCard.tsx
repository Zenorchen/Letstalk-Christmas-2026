interface QuestionCardProps {
  questionText: string
}

export default function QuestionCard({ questionText }: QuestionCardProps) {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded">
      <p className="text-base font-medium leading-relaxed">{questionText}</p>
    </div>
  )
}

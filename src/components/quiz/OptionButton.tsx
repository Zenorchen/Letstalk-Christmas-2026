type OptionState = 'default' | 'selected' | 'correct' | 'wrong'

interface OptionButtonProps {
  text: string
  index: number
  state: OptionState
  disabled: boolean
  onSelect: (index: number) => void
}

const stateClasses: Record<OptionState, string> = {
  default: 'bg-white border-gray-300 text-gray-800',
  selected: 'bg-gray-100 border-gray-500 text-gray-800',
  correct: 'bg-green-100 border-green-600 text-green-800',
  wrong: 'bg-red-100 border-red-500 text-red-800',
}

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function OptionButton({
  text,
  index,
  state,
  disabled,
  onSelect,
}: OptionButtonProps) {
  return (
    <button
      onClick={() => onSelect(index)}
      disabled={disabled}
      className={`w-full flex items-center gap-3 px-4 py-3 border rounded text-left disabled:cursor-not-allowed ${stateClasses[state]}`}
    >
      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center border border-current rounded-full text-sm font-bold">
        {OPTION_LABELS[index]}
      </span>
      <span className="text-sm">{text}</span>
    </button>
  )
}

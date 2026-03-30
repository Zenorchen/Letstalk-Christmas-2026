type OptionState = 'default' | 'selected' | 'correct' | 'wrong'

interface OptionButtonProps {
  text: string
  index: number
  state: OptionState
  disabled: boolean
  onSelect: (index: number) => void
}

const stateClasses: Record<OptionState, string> = {
  default:  'bg-xmas-card border-xmas-gold/40 text-xmas-brown',
  selected: 'bg-xmas-gold/15 border-xmas-gold text-xmas-brown',
  correct:  'bg-xmas-green-light border-xmas-green text-xmas-green',
  wrong:    'bg-xmas-red-light border-xmas-red text-xmas-red',
}

const labelClasses: Record<OptionState, string> = {
  default:  'bg-xmas-red text-white',
  selected: 'bg-xmas-gold text-white',
  correct:  'bg-xmas-green text-white',
  wrong:    'bg-xmas-red text-white',
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
      className={`w-full flex items-center gap-3 px-4 py-3 border-2 rounded-2xl text-left disabled:cursor-not-allowed transition-colors ${stateClasses[state]}`}
    >
      <span
        className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold ${labelClasses[state]}`}
      >
        {OPTION_LABELS[index]}
      </span>
      <span className="text-sm">{text}</span>
    </button>
  )
}

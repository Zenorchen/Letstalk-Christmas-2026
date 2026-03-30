interface StartButtonProps {
  hasPlayed: boolean
  onStart: () => void
  loading: boolean
}

export default function StartButton({ hasPlayed, onStart, loading }: StartButtonProps) {
  return (
    <button
      onClick={onStart}
      disabled={loading}
      className="w-full py-3.5 bg-xmas-red text-white font-bold text-base rounded-2xl shadow-md disabled:opacity-50 active:scale-[0.98] transition-transform"
      style={{ letterSpacing: '0.05em' }}
    >
      {loading ? '載入中…' : '挑戰開始'}
    </button>
  )
}

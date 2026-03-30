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
      className="w-full py-3 bg-gray-800 text-white font-bold rounded disabled:opacity-50"
    >
      {loading ? '載入中…' : hasPlayed ? '再玩一次' : '開始遊玩'}
    </button>
  )
}

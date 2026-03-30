interface ShareButtonProps {
  onShare: () => void
}

export default function ShareButton({ onShare }: ShareButtonProps) {
  return (
    <button
      onClick={onShare}
      className="w-full py-3 bg-xmas-red text-white text-sm font-bold rounded-2xl shadow-sm active:scale-[0.98] transition-transform"
    >
      分享結果
    </button>
  )
}

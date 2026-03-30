interface ShareButtonProps {
  onShare: () => void
}

export default function ShareButton({ onShare }: ShareButtonProps) {
  return (
    <button
      onClick={onShare}
      className="w-full py-3 border border-gray-400 rounded text-sm font-medium"
    >
      分享結果
    </button>
  )
}

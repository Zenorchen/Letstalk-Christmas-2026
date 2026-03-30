interface TitleBadgeProps {
  title: string
  tier: string
  avatarUrl?: string
  userNickname?: string
}

export default function TitleBadge({ title, tier, avatarUrl, userNickname }: TitleBadgeProps) {
  const initial = userNickname ? userNickname.slice(0, 1) : '?'

  return (
    <div className="flex flex-col items-center gap-2">
      {/* 大頭貼容器：任何級別都有皇冠，右上角斜放 */}
      <div className="relative inline-flex items-center justify-center w-20 h-20">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt="使用者大頭貼"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300 border-2 border-gray-400 flex items-center justify-center text-2xl font-bold text-gray-600 select-none">
            {initial}
          </div>
        )}

        {/* 皇冠：上方置中，略微斜放 */}
        <span
          className="absolute -top-4 left-1/2 text-xl leading-none"
          style={{ transform: 'translateX(-50%)' }}
          aria-label="皇冠"
        >
          👑
        </span>
      </div>

      <span className="text-base font-bold">{title}</span>
    </div>
  )
}

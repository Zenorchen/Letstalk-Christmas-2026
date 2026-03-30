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
      <div className="relative inline-flex items-center justify-center w-20 h-20">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt="使用者大頭貼"
            className="w-20 h-20 rounded-full object-cover border-3 border-xmas-red"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-xmas-blue border-3 border-xmas-red flex items-center justify-center text-2xl font-bold text-xmas-brown select-none"
            style={{ borderWidth: 3 }}
          >
            {initial}
          </div>
        )}

        {/* 皇冠：正中上方 */}
        <span
          className="absolute -top-4 left-1/2 text-xl leading-none"
          style={{ transform: 'translateX(-50%)' }}
          aria-label="皇冠"
        >
          👑
        </span>
      </div>

      {title ? <span className="text-base font-bold text-xmas-brown">{title}</span> : null}
    </div>
  )
}

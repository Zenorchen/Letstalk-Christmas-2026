interface TitleBadgeProps {
  title: string
  tier: string
}

const tierLabels: Record<string, string> = {
  bronze: '銅級',
  silver: '銀級',
  gold: '金級',
  master: '大師',
}

export default function TitleBadge({ title, tier }: TitleBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-gray-500">{tierLabels[tier] ?? tier}</span>
      {/* 徽章佔位 */}
      <div className="w-20 h-20 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center text-xs text-gray-500">
        徽章圖示
      </div>
      <span className="text-base font-bold">{title}</span>
    </div>
  )
}

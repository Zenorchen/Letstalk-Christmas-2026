const STICKERS = Array.from({ length: 10 }, (_, i) => i + 1)

export default function GiftPreview() {
  return (
    <div className="flex flex-col gap-2 py-4 border-2 border-xmas-gold/50 rounded-2xl bg-xmas-card overflow-hidden">
      <div
        className="flex items-center gap-4 overflow-x-auto"
        style={{
          scrollSnapType: 'x mandatory',
          scrollPaddingInline: '50%',
          paddingInline: 'calc(50% - 60px)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {STICKERS.map((n) => (
          <div
            key={n}
            className="flex-shrink-0 bg-xmas-blue/40 border border-xmas-gold/40 rounded-xl flex items-center justify-center text-xs text-xmas-brown-mid"
            style={{
              width: 120,
              height: 120,
              scrollSnapAlign: 'center',
            }}
          >
            貼圖 {n}
          </div>
        ))}
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      <p className="text-xs text-xmas-brown-light text-center">左右滑動查看全部禮物</p>
      <p className="text-xs text-xmas-brown-mid text-center px-4 font-medium">
        完成答題就送你超萌限定動態貼圖
      </p>
    </div>
  )
}

const STICKERS = Array.from({ length: 10 }, (_, i) => i + 1)

export default function GiftPreview() {
  return (
    <div className="flex flex-col gap-2 py-4 border border-dashed border-gray-300 rounded overflow-hidden">
      {/*
        scroll-snap carousel：
        - 外層 overflow-x-auto 開橫向滾動
        - scroll-snap-type: x mandatory → 每次 snap 一張
        - scroll-padding-inline: 50% → snap 對齊容器中央
        - 各項目 scroll-snap-align: center → 以自身中心點對齊
        - 左右 padding = (容器寬 - 中央大圖寬) / 2 = (375 - 120) / 2 ≈ 128px
          → 讓第一張與最後一張都能滾到畫面正中央
        視覺效果：
          中央 snap 項目完整顯示（120×120），
          左右各露出約一半（≈ 80px visible），形成「小—大—小」層次
      */}
      <div
        className="flex items-center gap-4 overflow-x-auto"
        style={{
          scrollSnapType: 'x mandatory',
          scrollPaddingInline: '50%',
          paddingInline: 'calc(50% - 60px)',   /* 60px = 大圖寬 120 / 2 */
          scrollbarWidth: 'none',               /* Firefox：隱藏捲軸 */
          msOverflowStyle: 'none',              /* IE：隱藏捲軸 */
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {STICKERS.map((n) => (
          <div
            key={n}
            className="flex-shrink-0 bg-gray-300 border border-gray-400 flex items-center justify-center text-xs text-gray-600"
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

      {/* webkit 捲軸隱藏（Tailwind 沒有內建這個 utility） */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>

      <p className="text-xs text-gray-400 text-center">左右滑動查看全部禮物</p>
      <p className="text-xs text-gray-700 text-center px-4">完成答題就送你超萌限定動態貼圖</p>
    </div>
  )
}

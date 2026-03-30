/* 散落的裝飾星星位置（相對於 banner 容器） */
const STARS = [
  { top: '6%',  left: '7%',  size: '1.2rem', dur: '2.2s', delay: '0s'   },
  { top: '40%', left: '2%',  size: '0.9rem', dur: '2.8s', delay: '0.4s' },
  { top: '70%', left: '9%',  size: '1.1rem', dur: '2.4s', delay: '0.8s' },
  { top: '5%',  right: '8%', size: '1rem',   dur: '2.6s', delay: '0.2s' },
  { top: '38%', right: '3%', size: '1.3rem', dur: '2s',   delay: '0.6s' },
  { top: '68%', right: '10%',size: '0.85rem',dur: '3s',   delay: '1s'   },
  { top: '1%',  left: '42%', size: '0.75rem',dur: '2.5s', delay: '0.3s' },
  { top: '20%', left: '18%', size: '0.65rem',dur: '3.2s', delay: '0.7s' },
  { top: '22%', right: '18%',size: '0.65rem',dur: '2.9s', delay: '0.5s' },
]

export default function HeroBanner() {
  return (
    <div className="relative flex flex-col items-center gap-3 py-6">
      {/* 裝飾星星 */}
      {STARS.map((s, i) => (
        <span
          key={i}
          className="star-deco"
          style={{
            top: s.top,
            left: 'left' in s ? s.left : undefined,
            right: 'right' in s ? s.right : undefined,
            fontSize: s.size,
            '--dur': s.dur,
            '--delay': s.delay,
          } as React.CSSProperties}
        >
          ★
        </span>
      ))}

      {/* Letstalk Logo 佔位 */}
      <div className="w-24 h-7 bg-xmas-gold/30 border border-xmas-gold rounded flex items-center justify-center text-xs text-xmas-brown-mid font-medium">
        Letstalk
      </div>

      {/* 主視覺插圖佔位：模擬緞帶框造型 */}
      <div className="relative mt-2">
        {/* 緞帶蝴蝶結 */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl leading-none z-10 select-none">
          🎀
        </div>
        {/* 主圖框 */}
        <div
          className="w-56 h-44 bg-xmas-blue border-4 border-xmas-red rounded-[2rem] flex items-center justify-center text-sm text-xmas-brown-mid shadow-sm"
          style={{ boxShadow: '0 2px 12px rgba(204,51,51,0.12)' }}
        >
          主視覺插圖
        </div>
        {/* 框底小雪地 */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-white/50 rounded-b-[2rem]" />
      </div>

      <h1 className="text-2xl font-bold text-center text-xmas-brown tracking-wide mt-1">
        好誕哩就來！
      </h1>
      <p className="text-sm text-xmas-brown-mid text-center">
        聖你最會，還是剩你不會 🧠
      </p>
    </div>
  )
}

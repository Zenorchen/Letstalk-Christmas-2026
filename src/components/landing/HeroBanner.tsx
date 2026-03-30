export default function HeroBanner() {
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      {/* 品牌 Logo 佔位 */}
      <div className="w-24 h-8 bg-gray-300 flex items-center justify-center text-xs text-gray-600">
        Letstalk Logo
      </div>

      {/* 主視覺插圖佔位 */}
      <div className="w-64 h-48 bg-gray-200 flex items-center justify-center text-sm text-gray-500 border border-gray-300">
        主視覺插圖
      </div>

      <h1 className="text-2xl font-bold text-center">好誕哩就來！</h1>
      <p className="text-sm text-gray-600 text-center">聖你最會，還是剩你不會 🧠</p>
    </div>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '好誕哩就來！— Letstalk',
  description: '聖你最會，還是剩你不會？完成答題就送你超萌限定動態貼圖',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <body className="bg-xmas-cream text-xmas-brown min-h-screen">
        <div className="max-w-[375px] mx-auto min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}

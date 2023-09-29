import './globals.css'
import type { Metadata } from 'next'
import { Major_Mono_Display } from 'next/font/google'

const major_mono_display = Major_Mono_Display({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "Obsek Astrophotography Gallery",
  description: 'Gallery of astrophotography images by two high school dudes messing around with their phone cameras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={major_mono_display.className}>{children}</body>
    </html>
  )
}

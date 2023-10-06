import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "Obsek Astrophotography Gallery",
  description: 'Gallery of astrophotography images by two high school dudes messing around with their phone cameras.',
  keywords: ['web developer', 'programmer', 'linux', 'mac os', 'hackintosh', 'woof os', 'woof', 'vithushan', 'sutharsan', 'vithu', 'acutewoof', 'a cute woof', 'obsek', 'astrophotography', 'smartphone', 'phone astrophotography'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}

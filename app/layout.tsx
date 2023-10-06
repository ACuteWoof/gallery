import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import Script from 'next/script';

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-B1V8D3CWHF"></Script>
<Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B1V8D3CWHF');
</Script>
      <body className={roboto_mono.className}>{children}</body>
    </html>
  )
}

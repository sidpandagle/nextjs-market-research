import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark custom-bg`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
      <GoogleTagManager gtmId="GTM-PLCKML74" />
    </html>
  )
}

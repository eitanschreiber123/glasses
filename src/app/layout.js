import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {title: 'Optical Express',description: 'Lentes'}

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no"><body className={inter.className}>{children}</body></html>
  )
}

import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body'
})

const headingFont = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-heading'
})

export const metadata = {
  title: 'LETTUCE',
  description: 'Fashion & Retail services'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

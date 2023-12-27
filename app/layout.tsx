import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './_components/navbar'
import Footer from './_components/footer'
import { siteConfig } from '@/config/site'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}` // My-organization | Taskify
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full bg-slate-100">
        <Navbar />
        <main className='pt-40 pb-20 bg-slate-100'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

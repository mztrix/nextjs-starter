import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import type React from 'react'
import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - NextJS-Starter',
    default: 'NextJS-Starter',
  },
}

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={openSans.variable}>
      <body className="bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
        <ThemeProvider attribute="data-theme" storageKey="preferred-theme-color" enableSystem>
          <ToastContainer position="top-right" autoClose={3000} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

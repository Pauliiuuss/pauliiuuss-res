import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import classNames from 'classnames'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import React from 'react'

import { ScrollToTheTop } from '@/components/ScrollToTheTop'

import './globals.css'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/icon.ico',
    apple: '/apple-icon.png',
  },
  title: 'Paulius Astrauskas',
  description: 'Paulius Astrauskas personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageGrain =
    'before:content-[""] before:pointer-events-none before:fixed before:left-0 before:top-0 before:z-[100] before:h-full before:w-full before:bg-grain before:opacity-5'
  return (
    <html
      lang="en"
      className="relative scroll-smooth bg-background bg-cover bg-no-repeat"
    >
      <body className={classNames(cairo.className, pageGrain)}>
        <ScrollToTheTop />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

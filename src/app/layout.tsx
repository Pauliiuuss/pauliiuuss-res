import classNames from 'classnames'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import React from 'react'

import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paulius Astrauskas',
  description: 'Paulius Astrauskas personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageGrain =
    'before:content-[""], bg-og-background before:pointer-events-none before:fixed before:left-0 before:top-0 before:z-[333333] before:h-full before:w-full before:bg-grain before:opacity-10'
  return (
    <html lang="en" className="relative scroll-smooth">
      <body className={classNames(dmSans.className, pageGrain)}>
        {children}
      </body>
    </html>
  )
}

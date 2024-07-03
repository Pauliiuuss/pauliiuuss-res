'use client'

import Image from 'next/image'
import Link from 'next/link'

import { navigation } from '@/misc/data'
import { scrollToElement } from '@/misc/utils/scrollToElement'

export const NavBar = () => {
  return (
    <nav className="hidden h-24 w-full flex-row items-center justify-between align-middle text-2xl lg:flex lg:px-40 2xl:px-64">
      <Image height={150} width={150} alt="Logo" src={'/logo.svg'} />
      <div className="flex gap-8">
        {navigation.map((navItem) => {
          return (
            <Link
              href={navItem.direction}
              onClick={(e) => {
                scrollToElement(e, navItem.direction)
              }}
              className={
                'relative text-og-text animation-buttonUnderline lg:text-xl 2xl:text-2xl'
              }
              key={navItem.name}
            >
              {navItem.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

'use client'

import Link from 'next/link'

import { navigation } from '@/misc/data'
import { scrollToElement } from '@/misc/utils/scrollToElement'

export const FooterNav = () => {
  return (
    <div className="flex flex-row gap-24">
      <ul className="flex list-none flex-col gap-4">
        {navigation.map((navItem) => {
          return (
            <li key={navItem.name}>
              <Link
                href={navItem.direction}
                onClick={(e) => {
                  scrollToElement(e, navItem.direction)
                }}
                className={
                  'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
                }
              >
                {navItem.name}
              </Link>
            </li>
          )
        })}
      </ul>
      {/*** SOCIAL --- visible only on pc ***/}
      <ul className="hidden list-none flex-col gap-4 lg:flex">
        <li>
          <Link
            href={'https://linkedin.com/in/paulius-astrauskas'}
            rel="noopener norefferer"
            target="_blank"
            className={
              'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
            }
          >
            {'LinkedIn'}
          </Link>
        </li>
        <li>
          <Link
            href={'https://github.com/Pauliiuuss'}
            rel="noopener norefferer"
            target="_blank"
            className={
              'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
            }
          >
            {'Github'}
          </Link>
        </li>
      </ul>
    </div>
  )
}

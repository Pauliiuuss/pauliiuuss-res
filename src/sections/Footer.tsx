import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'

export const Footer = () => {
  return (
    <Card
      sx={
        'flex-col 2xl:flex-row 2xl:justify-between items-center 2xl:gap-0 py-8 2xl:py-16 pb-6 bg-og-bg shadow-[0px_-10px_20px_rgba(0,0,0,.4)]'
      }
    >
      <Image height={200} width={200} alt="CPRGHT" src={'/logo.svg'} />
      <div className="flex flex-row gap-24">
        <ul className="flex list-none flex-col gap-4">
          <li>
            <Link
              href={'#home'}
              className={
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Home'}
            </Link>
          </li>
          <li>
            <Link
              href={'#about'}
              className={
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'About me'}
            </Link>
          </li>
          <li>
            <Link
              href={'#skills'}
              className={
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Skills'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ex'}
              className={
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Experience'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ed'}
              className={
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Education'}
            </Link>
          </li>
          <li>
            <Link
              href={'#contact'}
              className={
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Contact'}
            </Link>
          </li>
        </ul>

        {/*** SOCIAL --- visible only on pc ***/}
        <ul className="hidden list-none flex-col gap-4 2xl:flex">
          <li>
            <Link
              href={'https://linkedin.com/in/paulius-astrauskas'}
              rel="noopener norefferer"
              target="_blank"
              className={
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
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
                'text-md relative text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Github'}
            </Link>
          </li>
        </ul>
      </div>
    </Card>
  )
}

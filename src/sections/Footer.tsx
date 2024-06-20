import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'

export const Footer = () => {
  return (
    <Card
      sx={
        'flex-col lg:flex-row lg:justify-between items-center lg:gap-0 py-12 lg:py-24 pb-6 bg-og-gray-999 shadow-[0px_-10px_20px_rgba(0,0,0,.2)]'
      }
    >
      <Image
        height={300}
        width={300}
        alt="CPRGHT"
        src={'/logo.svg'}
        className="pb-6 lg:pb-0"
      />
      <div className="flex flex-row gap-24">
        <ul className="flex list-none flex-col gap-4">
          <li>
            <Link
              href={'#home'}
              className={
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
              }
            >
              {'Home'}
            </Link>
          </li>
          <li>
            <Link
              href={'#about'}
              className={
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
              }
            >
              {'About me'}
            </Link>
          </li>
          <li>
            <Link
              href={'#skills'}
              className={
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
              }
            >
              {'Skills'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ex'}
              className={
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
              }
            >
              {'Experience'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ed'}
              className={
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
              }
            >
              {'Education'}
            </Link>
          </li>
          <li>
            <Link
              href={'#contact'}
              className={
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
              }
            >
              {'Contact'}
            </Link>
          </li>
        </ul>

        {/*** SOCIAL --- visible only on pc ***/}
        <ul className="hidden list-none flex-col gap-4 lg:flex">
          <li>
            <Link
              href={'https://linkedin.com/in/paulius-astrauskas'}
              rel="noopener norefferer"
              target="_blank"
              className={
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
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
                'text-md relative text-og-text animation-buttonUnderline lg:text-xl'
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

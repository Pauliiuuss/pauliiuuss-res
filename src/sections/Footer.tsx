import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'

export const Footer = () => {
  return (
    <Card
      sx={
        'flex-col lg:flex-row lg:justify-between lg:gap-0 py-12 lg:py-24 pb-6 bg-og-black shadow-[0px_-10px_20px_rgba(0,0,0,.2)]'
      }
    >
      <div className="flex flex-row gap-24">
        <ul className="flex list-none flex-col gap-4">
          <li>
            <Link
              href={'#home'}
              className={
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
              }
            >
              {'Home'}
            </Link>
          </li>
          <li>
            <Link
              href={'#about'}
              className={
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
              }
            >
              {'About me'}
            </Link>
          </li>
          <li>
            <Link
              href={'#skills'}
              className={
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
              }
            >
              {'Skills'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ex'}
              className={
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
              }
            >
              {'Experience'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ed'}
              className={
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
              }
            >
              {'Education'}
            </Link>
          </li>
          <li>
            <Link
              href={'#contact'}
              className={
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
              }
            >
              {'Contact'}
            </Link>
          </li>
        </ul>
        <ul className="flex list-none flex-col gap-4">
          <li>
            <Link
              href={'https://linkedin.com/in/paulius-astrauskas'}
              rel="noopener norefferer"
              target="_blank"
              className={
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
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
                'animation-buttonUnderline relative text-lg text-og-background lg:text-2xl'
              }
            >
              {'Github'}
            </Link>
          </li>
        </ul>
      </div>
      <Image
        height={300}
        width={300}
        alt="CPRGHT"
        src={'/vercel.svg'}
        className="pt-12 lg:pt-0"
      />
    </Card>
  )
}

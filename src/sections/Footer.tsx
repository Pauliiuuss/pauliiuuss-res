import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'

export const Footer = () => {
  return (
    <Card
      sx={
        'flex-col lg:flex-row lg:justify-between items-center border-t-[1px] border-og-gray-200 bg-og-blured-black lg:gap-0 py-8 lg:py-16 shadow-[0px_-10px_20px_rgba(0,0,0,.4)]'
      }
    >
      <Image
        height={200}
        width={200}
        alt="CPRGHT"
        src={'/logo.svg'}
        className="lg:hidden"
      />
      <div className="flex flex-row gap-24">
        <ul className="flex list-none flex-col gap-4">
          <li>
            <Link
              href={'#home'}
              className={
                'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Home'}
            </Link>
          </li>
          <li>
            <Link
              href={'#about'}
              className={
                'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'About me'}
            </Link>
          </li>
          <li>
            <Link
              href={'#skills'}
              className={
                'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Skills'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ex'}
              className={
                'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Experience'}
            </Link>
          </li>
          <li>
            <Link
              href={'#ed'}
              className={
                'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
              }
            >
              {'Education'}
            </Link>
          </li>
          <li>
            <Link
              href={'#contact'}
              className={
                'text-md relative text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
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
      <p className="flex flex-col pt-8 text-center text-xs font-bold text-og-gray-100 lg:hidden">
        {'©2024'}
        <br />
        {'PAULIUS ASTRAUSKAS'}
      </p>
      <Image
        height={250}
        width={250}
        alt="CPRGHT"
        src={'/logo_pc.svg'}
        className="hidden lg:block"
      />
    </Card>
  )
}

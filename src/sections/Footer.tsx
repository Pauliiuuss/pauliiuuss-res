import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'

import { buttonUnderlineAnimation } from '@/misc/constants'

export const Footer = () => {
  return (
    <>
      <hr className="h-[2px] border-0 bg-og-black" />
      <Card sx={'flex-row justify-between py-20'}>
        <div className="flex flex-row gap-24">
          <ul className="flex list-none flex-col gap-4">
            <li>
              <Link
                href={'#home'}
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
              >
                {'Home'}
              </Link>
            </li>
            <li>
              <Link
                href={'#about'}
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
              >
                {'About me'}
              </Link>
            </li>
            <li>
              <Link
                href={'#skills'}
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
              >
                {'Skills'}
              </Link>
            </li>
            <li>
              <Link
                href={'#ex'}
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
              >
                {'Experience'}
              </Link>
            </li>
            <li>
              <Link
                href={'#ed'}
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
              >
                {'Education'}
              </Link>
            </li>
            <li>
              <Link
                href={'#contact'}
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
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
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
              >
                {'LinkedIn'}
              </Link>
            </li>
            <li>
              <Link
                href={'https://github.com/Pauliiuuss'}
                rel="noopener norefferer"
                target="_blank"
                className={classNames(
                  'relative text-2xl text-og-gray-500 hover:text-og-gray-600',
                  buttonUnderlineAnimation
                )}
              >
                {'Github'}
              </Link>
            </li>
          </ul>
        </div>
        <Image height={300} width={300} alt="CPRGHT" src={'/vercel.svg'} />
      </Card>
    </>
  )
}

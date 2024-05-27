import classNames from 'classnames'
import Link from 'next/link'

import { buttonUnderlineAnimation } from '@/misc/constants'

export const NavBar = () => {
  return (
    <nav className="flex h-24 w-full flex-row items-center gap-8 pl-64 align-middle text-xl xl:text-2xl">
      <Link
        href={'#about'}
        className={classNames(
          buttonUnderlineAnimation,
          'relative text-og-gray-500 hover:text-og-gray-600'
        )}
      >
        {'About me'}
      </Link>
      <Link
        href={'#skills'}
        className={classNames(
          buttonUnderlineAnimation,
          'relative text-og-gray-500 hover:text-og-gray-600'
        )}
      >
        {'Skills'}
      </Link>
      <Link
        href={'#ex'}
        className={classNames(
          buttonUnderlineAnimation,
          'relative text-og-gray-500 hover:text-og-gray-600'
        )}
      >
        {'Experience'}
      </Link>
      <Link
        href={'#ed'}
        className={classNames(
          buttonUnderlineAnimation,
          'relative text-og-gray-500 hover:text-og-gray-600'
        )}
      >
        {'Education'}
      </Link>
      <Link
        href={'#contact'}
        className={classNames(
          buttonUnderlineAnimation,
          'relative text-og-gray-500 hover:text-og-gray-600'
        )}
      >
        {'Contact'}
      </Link>
    </nav>
  )
}

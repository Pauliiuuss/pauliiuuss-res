import Image from 'next/image'
import Link from 'next/link'

import { navigation } from '@/misc/data'

export const NavBar = () => {
  return (
    <nav className="hidden h-24 w-full flex-row items-center justify-between px-64 align-middle text-2xl 2xl:flex">
      <Image height={150} width={150} alt="Logo" src={'/logo.svg'} />
      <div className="flex gap-8">
        {navigation.map((navItem) => {
          return (
            <Link
              href={navItem.direction}
              className={'relative text-og-text animation-buttonUnderline'}
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

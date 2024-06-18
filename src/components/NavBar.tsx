import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="flex h-24 w-full flex-row items-center justify-end gap-8 pr-64 align-middle text-2xl">
      <Link
        href={'#about'}
        className={'animation-buttonUnderline relative text-og-background'}
      >
        {'About me'}
      </Link>
      <Link
        href={'#skills'}
        className={'animation-buttonUnderline relative text-og-background'}
      >
        {'Skills'}
      </Link>
      <Link
        href={'#ex'}
        className={'animation-buttonUnderline relative text-og-background'}
      >
        {'Experience'}
      </Link>
      <Link
        href={'#ed'}
        className={'animation-buttonUnderline relative text-og-background'}
      >
        {'Education'}
      </Link>
      <Link
        href={'#contact'}
        className={'animation-buttonUnderline relative text-og-background'}
      >
        {'Contact'}
      </Link>
    </nav>
  )
}

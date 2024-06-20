import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="hidden h-24 w-full flex-row items-center justify-between px-64 align-middle text-2xl lg:flex">
      <Image height={150} width={150} alt="Logo" src={'/logo.svg'} />
      <div className="flex gap-8">
        <Link
          href={'#about'}
          className={'relative text-og-text animation-buttonUnderline'}
        >
          {'About me'}
        </Link>
        <Link
          href={'#skills'}
          className={'relative text-og-text animation-buttonUnderline'}
        >
          {'Skills'}
        </Link>
        <Link
          href={'#ex'}
          className={'relative text-og-text animation-buttonUnderline'}
        >
          {'Experience'}
        </Link>
        <Link
          href={'#ed'}
          className={'relative text-og-text animation-buttonUnderline'}
        >
          {'Education'}
        </Link>
        <Link
          href={'#contact'}
          className={'relative text-og-text animation-buttonUnderline'}
        >
          {'Contact'}
        </Link>
      </div>
    </nav>
  )
}

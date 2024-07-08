import Image from 'next/image'

import { Card } from '@/components/Card'
import { FooterNav } from '@/components/FooterNav'

export const Footer = () => {
  return (
    <Card
      sx={
        'flex-col lg:flex-row lg:justify-between items-center border-t-[1px] border-og-gray-200 bg-og-blured-black backdrop-blur-lg lg:gap-0 py-8 lg:py-16 shadow-[0px_-10px_20px_rgba(0,0,0,.4)]'
      }
    >
      <Image
        height={200}
        width={200}
        alt="CPRGHT"
        src={'/logo.svg'}
        className="lg:hidden"
      />
      <FooterNav />
      <p className="flex flex-col pt-8 text-center text-xs font-bold text-og-gray-100 lg:hidden">
        {'©2024'}
        <br />
        {'PAULIUS ASTRAUSKAS'}
      </p>
      <div className="relative hidden h-[250px] w-[250px] lg:block">
        <Image alt="CPRGHT" src={'/logo_pc.svg'} fill />
      </div>
    </Card>
  )
}

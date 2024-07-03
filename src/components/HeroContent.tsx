'use client'

import Image from 'next/image'

import { ScrollDown } from './ScrollDown'

export const HeroContent = () => {
  return (
    <>
      <Image src={'/name.svg'} alt="name" width={1300} height={1300} />
      <p className=" mt-6 text-xl text-og-text xl:max-w-[50%] 2xl:mt-24 2xl:text-3xl">
        {
          'Passionate front-end developer dedicated to crafting immersive digital experiences. With expertise in modern front-end frameworks, I bring designs to life, ensuring seamless user interaction and stunning visuals. Let us build something extraordinary together.'
        }
      </p>
      <ScrollDown />
    </>
  )
}

import Image from 'next/image'

import { ScrollDown } from './ScrollDown'

export const HeroContent = () => {
  return (
    <>
      <Image src={'/name.svg'} alt="name" width={1300} height={1300} />
      <p className="mt-24 text-xl text-og-gray-100 lg:max-w-[50%] lg:text-3xl">
        {
          'Passionate front-end developer dedicated to crafting immersive digital experiences. With expertise in modern front-end frameworks, I bring designs to life, ensuring seamless user interaction and stunning visuals. Let us build something extraordinary together.'
        }
      </p>
      <ScrollDown />
    </>
  )
}

import { IoIosArrowRoundDown } from 'react-icons/io'

import { Card } from '@/components/Card'
import { NavBar } from '@/components/NavBar'

export const Hero = ({ id }: { id: string }) => {
  return (
    <div className="flex h-screen flex-col gap-10 bg-curves bg-cover" id={id}>
      <header>
        <NavBar />
      </header>
      <Card sx={'justify-between flex-col'} id={id}>
        <div>
          <p className="flex-row text-8xl font-bold text-og-gray-700 xl:text-[180px]">
            PAULIUS ASTRAUSKAS
          </p>
          <p className="max-w-[40%] pt-12 text-3xl text-og-black">
            {
              'Passionate front-end developer dedicated to crafting immersive digital experiences. With expertise in modern front-end frameworks, I bring designs to life, ensuring seamless user interaction and stunning visuals. Let us build something extraordinary together.'
            }
          </p>
        </div>
        <div className="pointer-events-none flex animate-bounce self-end">
          {'SCROLL DOWN FOR MORE'}
          <IoIosArrowRoundDown size={23} />
        </div>
      </Card>
    </div>
  )
}

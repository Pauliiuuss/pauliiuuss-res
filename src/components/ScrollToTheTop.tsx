'use client'

import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'

export const ScrollToTheTop = () => {
  const { scrollY } = useScroll()
  const controls = useAnimation()
  const [isAnimated, setIsAnimated] = useState<boolean>(false)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  useMotionValueEvent(scrollY, 'change', async (value) => {
    if (value > 600 && !isAnimating && !isAnimated) {
      setIsAnimating(true)
      await controls.start({ rotate: 360, scale: [null, 1.2, 1] })
      setIsAnimated(true)
      setIsAnimating(false)
    } else if (value < 600 && !isAnimating && isAnimated) {
      setIsAnimating(true)
      await controls.start({ rotate: 0, scale: 0 })
      setIsAnimated(false)
      setIsAnimating(false)
    }
  })

  return (
    <motion.div
      initial={{
        rotate: 0,
        scale: 0,
      }}
      animate={controls}
      transition={{
        duration: 0.2,
        ease: 'easeIn',
      }}
      className="fixed bottom-6 end-6 z-[10] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-og-blured-black text-center text-og-background backdrop-blur-lg lg:bottom-10 lg:end-10 lg:h-24 lg:w-24"
      onClick={() => {
        window.scrollTo({ top: 0 })
      }}
    >
      <Image
        alt="tothetop"
        src={'/scroll_to_top.svg'}
        fill
        className="animate-slow-spin absolute"
      />
      <div>
        <IoIosArrowRoundUp size={35} />
      </div>
    </motion.div>
  )
}

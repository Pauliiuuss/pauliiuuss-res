'use client'

import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { useState } from 'react'

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
      className="fixed bottom-10 end-10 z-[10] flex h-20 w-20 cursor-pointer items-center rounded-full bg-og-background text-center text-sm"
      onClick={() => {
        window.scrollTo({ top: 0 })
      }}
    >
      <p>{'SCROLL TO THE TOP'}</p>
    </motion.div>
  )
}

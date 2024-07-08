'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { AnimatedLogo } from '@/components/AnimatedLogo'

export const Intro = () => {
  const [showAnimation, setShowAnimation] = useState<boolean>(true)
  useEffect(() => {
    showAnimation
      ? document.body.classList.add('overflow-y-hidden')
      : document.body.classList.remove('overflow-y-hidden')
  }, [showAnimation])

  console.log(showAnimation)

  return (
    <>
      {showAnimation && (
        <motion.div
          animate={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.7,
            ease: 'easeInOut',
          }}
          onAnimationComplete={() => {
            setShowAnimation(false)
          }}
          className="fixed left-0 top-0 z-[30] flex h-dvh w-full items-center justify-center bg-og-bg"
        >
          <AnimatedLogo />
        </motion.div>
      )}
    </>
  )
}

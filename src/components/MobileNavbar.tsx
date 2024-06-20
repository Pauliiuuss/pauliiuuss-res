'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="relative flex flex-col justify-between px-5 lg:hidden">
      <Image height={100} width={100} alt="Logo" src={'/logo.svg'} />
      <motion.div
        className="absolute right-5 top-5 z-[10] flex h-12 w-12 rounded-full bg-og-blured-black backdrop-blur-lg"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            width: ['48px', '100%'],
            height: ['48px', '100vh'],
            borderRadius: ['0px', '0px'],
            top: ['20px', '0px'],
            right: ['20px', '0px'],
          },
          closed: {
            width: ['100%', '48px'],
            height: ['100vh', '48px'],
            borderRadius: ['0px', '9999px'],
            top: ['0px', '20px'],
            right: ['0px', '20px'],
          },
        }}
      >
        {/*** ANIMATED HAMBURGER ***/}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          animate={isOpen ? 'open' : 'closed'}
        >
          <motion.span
            className="absolute left-[25%] top-[40%] h-[2px] w-6 bg-og-text"
            variants={{
              open: {
                rotate: ['0deg', '0deg', '45deg'],
                top: ['40%', '50%', '50%'],
              },
              closed: {
                rotate: ['45deg', '0deg', '0deg'],
                top: ['50%', '50%', '40%'],
              },
            }}
            transition={{
              duration: 0.2,
            }}
          />
          <motion.span
            className="absolute left-[25%] top-[50%] h-[2px] w-6 bg-og-text"
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
              },
              closed: {
                rotate: ['-45deg', '0deg', '0deg'],
              },
            }}
            transition={{
              duration: 0.2,
            }}
          />
          <motion.span
            className="absolute left-[25%] top-[60%] h-[2px] w-6 bg-og-text"
            variants={{
              open: {
                rotate: ['0deg', '0deg', '-45deg'],
                top: ['60%', '50%', '50%'],
              },
              closed: {
                rotate: ['-45deg', '0deg', '0deg'],
                top: ['50%', '50%', '60%'],
              },
            }}
            transition={{
              duration: 0.2,
            }}
          />
        </motion.button>
      </motion.div>
    </div>
  )
}

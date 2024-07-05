'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const CollapsableCard = ({
  title,
  children,
  id,
  sx,
}: {
  title?: string
  children: ReactNode
  id: string
  sx?: string
}) => {
  return (
    <div className={classNames(sx, 'h-full w-full')} id={id}>
      <div className="sticky top-0 z-[10] bg-og-blured-black shadow-[0px_-10px_15px_rgba(0,0,0,.2)] backdrop-blur-lg">
        {title && (
          <>
            <motion.h2
              className="px-6 py-6 text-4xl font-bold text-og-text lg:px-40 lg:py-12 lg:text-6xl 2xl:px-64 2xl:text-8xl"
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: [0, 50, 100],
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
              }}
            >
              {title}
            </motion.h2>
            <hr className="h-[1px] border-0 bg-og-gray-200" />
          </>
        )}
      </div>
      <div
        className={
          'bg-og-blured-black px-6 py-24 backdrop-blur-lg lg:px-40 lg:py-28 2xl:gap-44 2xl:px-64 2xl:py-44'
        }
      >
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 100,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut',
          }}
          className="flex flex-col gap-12 lg:gap-32"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

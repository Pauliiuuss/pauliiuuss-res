'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const Card = ({
  children,
  id,
  sx,
  animated,
  directionFrom = 'y',
  delay = 2.4,
  distance = 40,
  duration = 1,
}: {
  children: ReactNode
  id?: string
  sx?: string
  animated?: boolean
  directionFrom?: 'x' | 'y'
  delay?: number
  distance?: number
  duration?: number
}) => {
  return (
    <>
      {animated ? (
        <motion.div
          initial={
            directionFrom === 'x'
              ? { opacity: 0, x: distance }
              : { opacity: 0, y: distance }
          }
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay,
            duration: duration,
            ease: 'easeInOut',
          }}
          className={classNames(
            `flex h-full w-full gap-6 px-6 lg:px-40 2xl:px-64`,
            sx
          )}
          id={id}
        >
          {children}
        </motion.div>
      ) : (
        <div
          className={classNames(
            `flex h-full w-full gap-6 px-6 lg:px-40 2xl:px-64`,
            sx
          )}
          id={id}
        >
          {children}
        </div>
      )}
    </>
  )
}

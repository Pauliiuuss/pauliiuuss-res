'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const AnimatedLogo = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  }

  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, pathLength: 1 }, { duration: 1.5 })
    setTimeout(() => {
      controls.start({ opacity: 0, pathLength: 0 }, { duration: 0.5 })
    }, 2000)
  }, [])

  return (
    <motion.svg
      width={'50%'}
      height={'50%'}
      viewBox="0 0 162 106"
      fill="none"
      xmlns={'http://www.w3.org/2000/svg'}
      className={'stroke-jo overflow-visible stroke-og-text stroke-[0.5]'}
      style={{
        strokeLinejoin: 'round',
        strokeLinecap: 'round',
      }}
    >
      <g clipPath="url(#clip0_54_129)">
        <motion.path
          d="M134.742 28.1915C128.126 21.2215 119.251 21.4944 117.862 21.5599H78.4343C81.4386 26.7271 84.4428 31.8944 87.447 37.0617H118.936C121.563 37.3956 123.56 39.6176 123.626 42.2234C123.694 44.9291 121.665 47.3119 118.936 47.6602H93.6088C96.6164 52.8342 99.625 58.0081 102.633 63.182H119.83C125.56 63.182 130.745 60.8469 134.5 57.0729C135.593 55.9736 140.65 50.6443 140.575 42.3244C140.507 34.7509 136.232 29.7589 134.742 28.1904V28.1915Z"
          initial="hidden"
          animate={controls}
          variants={icon}
          //   fill={'#727272'}
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            // fill: { duration: 4, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M114.973 84.4113C107.889 84.4268 100.802 84.4423 93.7181 84.4601C87.1668 72.862 80.6177 61.2629 74.0664 49.6659C63.1451 61.2551 52.2237 72.8432 41.3024 84.4324C34.675 84.4368 28.0476 84.4423 21.4202 84.4468C40.4253 63.4837 59.4303 42.5218 78.4354 21.5587C80.7799 25.4392 82.6257 28.5775 83.9 30.7651C84.9007 32.4823 86.2191 34.7487 89.2123 39.9337C89.6789 40.7435 90.1489 41.55 90.6178 42.3598C91.0845 43.1696 91.5545 43.9761 92.0234 44.7859C99.6736 57.9936 107.325 71.2025 114.974 84.4102L114.973 84.4113Z"
          initial="hidden"
          animate={controls}
          variants={icon}
          //   fill={'#C5C6C6'}
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            // fill: { duration: 4, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M41.2483 84.4324H63.8457C69.8872 77.5135 75.9277 70.5946 81.9692 63.6757C79.3357 59.0054 76.7011 54.3351 74.0675 49.6659C63.1274 61.2551 52.1884 72.8432 41.2483 84.4324Z"
          initial="hidden"
          animate={controls}
          variants={icon}
          //   fill={'#727272'}
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            // fill: { duration: 4, ease: [1, 0, 0.8, 1] },
          }}
        />
      </g>
      <defs>
        <clipPath id="clip0_54_129">
          <rect width="500" height="500" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  )
}

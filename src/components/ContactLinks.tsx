'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const ContactLinks = () => {
  return (
    <>
      {/* CONTACTS */}
      <div className="flex flex-col items-center">
        <p className="mb-2 text-lg font-bold text-og-text lg:mb-6 lg:text-3xl">
          {'FOR FURTHER ENQUIRIES'}
        </p>
        <p className="mb-2 text-og-text lg:mb-4 lg:text-xl">
          {'paulius.astrauskas97@gmail.com'}
        </p>
        <p className="text-og-text lg:text-xl">{'+37064378884'}</p>
      </div>

      <div className="flex justify-center gap-8">
        <motion.div
          className="relative h-10 w-10 lg:h-12 lg:w-12"
          whileHover={{
            scale: [null, 1.1],
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            },
          }}
        >
          <Link href={'https://linkedin.com/in/paulius-astrauskas'}>
            <Image src={'/icons/linkedin.svg'} alt={'linkedin'} fill />
          </Link>
        </motion.div>
        <motion.div
          className="relative h-10 w-10 lg:h-12 lg:w-12"
          whileHover={{
            scale: [null, 1.1],
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            },
          }}
        >
          <Link href={'https://github.com/Pauliiuuss'}>
            <Image src={'/icons/github.svg'} alt={'github'} fill />
          </Link>
        </motion.div>
        <motion.div
          className="relative h-10 w-10 lg:h-12 lg:w-12"
          whileHover={{
            scale: [null, 1.1],
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            },
          }}
        >
          <Link href={'/pdf/cv.pdf'}>
            <Image src={'/icons/cv.svg'} alt={'cv'} fill />
          </Link>
        </motion.div>
      </div>
    </>
  )
}

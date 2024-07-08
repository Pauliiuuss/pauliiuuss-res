'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { ContactLinks } from '@/components/ContactLinks'

export const Contact = ({ id }: { id: string }) => {
  return (
    <Card sx={'flex-col py-24 lg:py-52 2xl:py-64'} id={id} key={id}>
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        className="flex justify-center"
      >
        <div className="lg:30 relative h-24 w-full animation-contactUnderline xl:h-40 2xl:h-52">
          <Link
            href={'mailto:paulius.astrauskas97@gmail.com'}
            className="animation-contactUnderline"
          >
            <Image src="./contact.svg" alt="contact" fill />
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="mt-12 flex h-full flex-col gap-8 lg:mt-32 lg:gap-12"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <ContactLinks />
      </motion.div>
    </Card>
  )
}

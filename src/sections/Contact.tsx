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
        <Link
          className="animation-contactUnderline relative h-fit lg:w-[60%]"
          href={'mailto:paulius.astrauskas97@gmail.com'}
        >
          <Image src="./contact.svg" alt="contact" height={9999} width={9999} />
        </Link>
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

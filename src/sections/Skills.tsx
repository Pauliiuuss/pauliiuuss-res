'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import { CollapsableCard } from '@/components/CollapsableCard'

import { skills } from '@/misc/data'

export const Skills = ({ title, id }: { title: string; id: string }) => {
  return (
    <CollapsableCard title={title} id={id} key={id}>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill) => {
          return (
            <motion.div
              className="flex flex-row items-center gap-4 rounded-lg px-4 py-2 text-og-text"
              key={skill.id}
              initial={{
                scale: 0,
                x: -10,
                y: -5,
              }}
              whileInView={{
                scale: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: skill.animDelay,
              }}
              viewport={{ once: true }}
            >
              <div className="relative h-10 w-10 2xl:h-12 2xl:w-12">
                <Image src={`/icons/${skill.id}.svg`} alt={skill.id} fill />
              </div>
              <p className="hidden text-xl 2xl:block 2xl:text-3xl">
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </CollapsableCard>
  )
}

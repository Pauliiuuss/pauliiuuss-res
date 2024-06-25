'use client'

import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

import { CollapsableCard } from '@/components/CollapsableCard'
import { SkillDescription } from '@/components/SkillDescription'

export const Skills = ({ title, id }: { title: string; id: string }) => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const skillDescriptionRef = useRef<HTMLDivElement | null>(null)
  const [skill, setSkill] = useState<string>('')

  const handleMouseMove = (e: React.MouseEvent, offsetX?: number) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }
    if (skillDescriptionRef.current) {
      skillDescriptionRef.current.style.left = `${
        offsetX ? e.clientX + offsetX : e.clientX + 400
      }px`
      skillDescriptionRef.current.style.top = `${e.clientY}px`
    }
  }

  const handleMouseEnter = (skill: string) => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '10%'
      cursorRef.current.style.height = '150px'
      cursorRef.current.style.width = '150px'
    }
    if (skillDescriptionRef.current) {
      skillDescriptionRef.current.style.opacity = '100%'
      skillDescriptionRef.current.style.height = '200px'
      skillDescriptionRef.current.style.width = '550px'

      setSkill(skill)
    }
  }

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '0%'
      cursorRef.current.style.height = '0px'
      cursorRef.current.style.width = '0px'
    }
    if (skillDescriptionRef.current) {
      skillDescriptionRef.current.style.opacity = '0%'
      skillDescriptionRef.current.style.height = '0px'
      skillDescriptionRef.current.style.width = '0px'
    }
  }

  return (
    <CollapsableCard title={title} id={id} sx="hidden 2xl:block" key={id}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center gap-14 2xl:gap-72 2xl:pr-96">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('TAILWIND')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-xl font-bold text-og-text 2xl:text-5xl"
          >
            {'TAILWIND'}
          </motion.p>
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('REACT')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none pt-5 text-xl font-bold text-og-text 2xl:text-5xl"
          >
            {'REACT'}
          </motion.p>
        </div>
        <div className="flex flex-row justify-center gap-14 2xl:gap-72 2xl:pr-96">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('CSS')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none font-bold text-og-text 2xl:text-3xl"
          >
            {'CSS'}
          </motion.p>
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('NEXTJS')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-2xl font-bold text-og-text 2xl:text-8xl"
          >
            {'NEXTJS'}
          </motion.p>
          <motion.p
            onMouseMove={(e) => {
              handleMouseMove(e, -400)
            }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('HTML')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none font-bold text-og-text 2xl:pt-16 2xl:text-3xl"
          >
            {'HTML'}
          </motion.p>
        </div>
        <div className="flex gap-16 2xl:justify-center 2xl:gap-80 2xl:pr-96 2xl:pt-12">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('TYPESCRIPT')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-xl font-bold text-og-text 2xl:pt-8 2xl:text-5xl"
          >
            {'TYPESCRIPT'}
          </motion.p>
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('JAVASCRIPT')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className=" cursor-none pt-4 font-bold text-og-text 2xl:text-3xl"
          >
            {'JAVASCRIPT'}
          </motion.p>
        </div>
        <div className="flex flex-row justify-center gap-14 2xl:gap-40 2xl:pt-12">
          <motion.p
            onMouseMove={(e) => {
              handleMouseMove(e, -400)
            }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('GIT')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-2xl font-bold text-og-text 2xl:text-8xl"
          >
            {'GIT'}
          </motion.p>
          <motion.p
            onMouseMove={(e) => {
              handleMouseMove(e, -400)
            }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('JIRA')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none pt-10 font-bold text-og-text 2xl:text-3xl"
          >
            {'JIRA'}
          </motion.p>
        </div>
        <div className="flex justify-center gap-20 2xl:gap-80 2xl:pl-96 2xl:pt-16">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('MOBX')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none font-bold text-og-text 2xl:text-3xl"
          >
            {'MOBX'}
          </motion.p>
          <motion.p
            onMouseMove={(e) => {
              handleMouseMove(e, -400)
            }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('VERCEL')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-xl font-bold text-og-text 2xl:pt-12 2xl:text-5xl"
          >
            {'VERCEL'}
          </motion.p>
        </div>
        <SkillDescription skill={skill} ref={skillDescriptionRef} />
        <div
          ref={cursorRef}
          className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-og-text opacity-10 blur-sm transition-cursor duration-150 ease-out"
        ></div>
      </div>
    </CollapsableCard>
  )
}

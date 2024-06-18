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
    <CollapsableCard title={title} id={id}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-center gap-72 pr-96">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('TAILWIND')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-5xl font-bold text-og-background"
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
            className="cursor-none pt-5 text-5xl font-bold text-og-background"
          >
            {'REACT'}
          </motion.p>
        </div>
        <div className="flex flex-row justify-center gap-72 pr-96">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('CSS')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-3xl font-bold text-og-background"
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
            className="cursor-none text-8xl font-bold text-og-background"
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
            className="cursor-none pt-16 text-3xl font-bold text-og-background"
          >
            {'HTML'}
          </motion.p>
        </div>
        <div className="flex justify-center pr-[800px]">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('TYPESCRIPT')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none pt-8 text-5xl font-bold text-og-background"
          >
            {'TYPESCRIPT'}
          </motion.p>
        </div>
        <div className="flex flex-row justify-center gap-40 pl-[400px]">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('JAVASCRIPT')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className=" cursor-none pt-4 text-3xl font-bold text-og-background"
          >
            {'JAVASCRIPT'}
          </motion.p>
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
            className="cursor-none text-8xl font-bold text-og-background"
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
            className="cursor-none pt-10 text-3xl font-bold text-og-background"
          >
            {'JIRA'}
          </motion.p>
        </div>
        <div className="flex justify-center pl-32 pt-12">
          <motion.p
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => {
              handleMouseEnter('MOBX')
            }}
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="cursor-none text-3xl font-bold text-og-background"
          >
            {'MOBX'}
          </motion.p>
        </div>
        <div className="flex justify-center pl-[720px]">
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
            className="cursor-none text-5xl font-bold text-og-background"
          >
            {'VERCEL'}
          </motion.p>
        </div>
        <SkillDescription skill={skill} ref={skillDescriptionRef} />
        <div
          ref={cursorRef}
          className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-og-background opacity-10 blur-sm transition-cursor duration-150 ease-out"
        ></div>
      </div>
    </CollapsableCard>
  )
}

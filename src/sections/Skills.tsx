'use client'

import React, { useRef } from 'react'

import { CollapsableCard } from '@/components/CollapsableCard'

export const Skills = ({ title, id }: { title: string; id: string }) => {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }
  }

  return (
    <CollapsableCard title={title} id={id}>
      <div className="flex flex-col gap-8" onMouseMove={handleMouseMove}>
        <div className="flex flex-row justify-center gap-72 pr-96">
          <p className="text-5xl font-bold text-og-background">{'TAILWIND'}</p>
          <p className="pt-5 text-5xl font-bold text-og-background">
            {'REACT'}
          </p>
        </div>
        <div className="flex flex-row justify-center gap-72 pr-96">
          <p className="text-3xl font-bold text-og-background">{'CSS'}</p>
          <p className="text-8xl font-bold text-og-background">{'NEXTJS'}</p>
          <p className="pt-16 text-3xl font-bold text-og-background">
            {'HTML'}
          </p>
        </div>
        <div className="flex justify-center pr-96">
          <p className="pr-[450px] pt-8 text-5xl font-bold text-og-background">
            {'TYPESCRIPT'}
          </p>
        </div>
        <div className="flex flex-row justify-center gap-40 pl-[400px]">
          <p className=" pt-4 text-3xl font-bold text-og-background">
            {'JAVASCRIPT'}
          </p>
          <p className="text-8xl font-bold text-og-background">{'GIT'}</p>
          <p className="pt-10 text-3xl font-bold text-og-background">
            {'JIRA'}
          </p>
        </div>
        <div className="flex justify-center">
          <p className="pl-32 pt-12 text-3xl font-bold text-og-background">
            {'MOBX'}
          </p>
        </div>
        <div className="flex justify-center">
          <p className="pl-[720px] text-5xl font-bold text-og-background">
            {'VERCEL'}
          </p>
        </div>
        <div
          ref={cursorRef}
          className="pointer-events-none fixed z-[999999999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-og-background"
        ></div>
      </div>
    </CollapsableCard>
  )
}

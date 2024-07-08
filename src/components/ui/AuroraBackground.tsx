'use client'

import React, { ReactNode } from 'react'

import { cn } from '@/misc/utils/cn'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          'transition-bg relative flex flex-col items-center justify-center',
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            pointer-events-none
            absolute
            -inset-[10px]
            opacity-60
            blur-[30px]
            filter
            will-change-transform
            [--aurora:repeating-linear-gradient(100deg,var(--orange-500)_20%,var(--pink-500)_30%,var(--orange-300)_20%,var(--pink-400)_20%,var(--pink-200)_30%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_4%,var(--transparent)_8%,var(--transparent)_12%,var(--black)_18%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-position:50%_50%,50%_50%]
            [background-size:300%,_200%] after:absolute
            after:inset-0
            after:animate-aurora 
            after:mix-blend-difference
            after:content-[""]
            after:[background-attachment:fixed]
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  )
}

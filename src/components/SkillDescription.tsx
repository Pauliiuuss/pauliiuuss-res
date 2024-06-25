import { Ref, forwardRef } from 'react'

export const SkillDescription = forwardRef(
  ({ skill }: { skill: string }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="pointer-events-none fixed h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-og-blured-black opacity-0 shadow-lg backdrop-blur-lg transition-cursor duration-150 ease-out"
      >
        <p className="text-bold px-6 py-4 text-xl font-bold text-og-text 2xl:text-3xl">
          {skill}
        </p>
        <hr className="h-[2px] border-0 bg-og-text" />
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
)

SkillDescription.displayName = 'SkillDescription'

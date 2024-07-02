import classNames from 'classnames'
import { ReactNode } from 'react'

export const CollapsableCard = ({
  title,
  children,
  id,
  sx,
}: {
  title?: string
  children: ReactNode
  id: string
  sx?: string
}) => {
  return (
    <div className={classNames(sx, 'h-full w-full')} id={id}>
      <div className="sticky top-0 z-[10] bg-og-blured-black shadow-[0px_-10px_15px_rgba(0,0,0,.2)] backdrop-blur-lg">
        {title && (
          <>
            <h2 className="px-6 py-12 text-4xl font-bold text-og-text lg:px-40 lg:text-6xl 2xl:px-64 2xl:text-8xl">
              {title}
            </h2>
            <hr className="h-[1px] border-0 bg-og-gray-500" />
          </>
        )}
      </div>
      <div
        className={
          'flex flex-col gap-12 bg-og-blured-black px-6 py-24 backdrop-blur-lg lg:gap-32 lg:px-40 lg:py-28 2xl:gap-44 2xl:px-64 2xl:py-44'
        }
      >
        {children}
      </div>
    </div>
  )
}

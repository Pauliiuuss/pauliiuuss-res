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
    <div
      className={classNames(
        sx,
        'bg-og-bg h-full w-full rounded-t-xl shadow-[0px_-10px_20px_rgba(0,0,0,.4)]'
      )}
      id={id}
    >
      <div className="sticky top-0 z-[5]">
        {title && (
          <div className="bg-og-bg">
            <h2 className="px-6 py-12 text-4xl font-bold text-og-text lg:px-40 lg:text-6xl 2xl:px-64 2xl:text-8xl">
              {title}
            </h2>
            <hr className="h-[2px] border-0 bg-og-text" />
          </div>
        )}
      </div>
      <div
        className={
          'flex flex-col gap-12 px-6 py-24 lg:gap-32 lg:px-40 lg:py-28 2xl:gap-44 2xl:px-64 2xl:py-44'
        }
      >
        {children}
      </div>
    </div>
  )
}

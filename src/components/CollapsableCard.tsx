import classNames from 'classnames'
import { ReactNode } from 'react'

export const CollapsableCard = ({
  title,
  children,
  id,
}: {
  title?: string
  children: ReactNode
  id: string
}) => {
  return (
    <div
      className={classNames(
        'bg-og-gray-bg h-full w-full rounded-t-xl shadow-[0px_-10px_20px_rgba(0,0,0,.2)]'
      )}
      id={id}
    >
      <div className="sticky top-0 z-[5]">
        {title && (
          <div className="bg-og-gray-bg">
            <h2 className="text-og-text px-6 py-12 text-4xl font-bold lg:px-64 lg:text-8xl">
              {title}
            </h2>
            <hr className="bg-og-text h-[2px] border-0" />
          </div>
        )}
      </div>
      <div
        className={
          'flex flex-col gap-12 px-6 py-24 lg:gap-44 lg:px-64 lg:py-44'
        }
      >
        {children}
      </div>
    </div>
  )
}

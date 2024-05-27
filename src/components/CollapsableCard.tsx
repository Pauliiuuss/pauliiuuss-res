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
        'h-full w-full rounded-t-xl bg-og-black shadow-[0px_-10px_20px_rgba(0,0,0,.2)]'
      )}
      id={id}
    >
      <div className="sticky top-0">
        {title && (
          <div className="z-100000 bg-og-black">
            <h2 className="px-64 py-12 text-8xl font-bold text-og-background">
              {title}
            </h2>
            <hr className="h-[2px] border-0 bg-og-background" />
          </div>
        )}
      </div>
      <div className={'flex flex-col gap-44 px-64 py-44'}>{children}</div>
    </div>
  )
}

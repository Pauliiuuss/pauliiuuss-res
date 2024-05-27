import classNames from 'classnames'
import { ReactNode } from 'react'

export const Card = ({
  children,
  id,
  sx,
}: {
  children: ReactNode
  id?: string
  sx?: string
}) => {
  return (
    <div
      className={classNames(`flex h-full w-full gap-6 px-64 py-44`, sx)}
      id={id}
    >
      {children}
    </div>
  )
}

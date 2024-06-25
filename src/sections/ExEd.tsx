import { CollapsableCard } from '@/components/CollapsableCard'

import { ExEdData } from '@/misc/data'

export const ExEd = ({
  data,
  title,
  id,
}: {
  data: ExEdData[]
  title: string
  id: string
}) => {
  return (
    <CollapsableCard title={title} id={id} key={id}>
      {data.map((i) => {
        return (
          <div
            className="flex flex-col gap-4 2xl:w-[60%] 2xl:gap-8"
            key={i.name}
          >
            <h2 className="text-3xl font-bold text-og-text 2xl:text-6xl">
              {i.name}
            </h2>
            <p className="text-lg text-og-text 2xl:text-3xl">{`(${i.date})`}</p>
            <p className="text-2xl font-bold text-og-text 2xl:text-4xl">
              {i.position}
            </p>
            <p className="text-xl text-og-text 2xl:text-3xl">{i.description}</p>
            <p className="text-xl font-bold text-og-text 2xl:text-3xl">
              {i.tools}
            </p>
          </div>
        )
      })}
    </CollapsableCard>
  )
}

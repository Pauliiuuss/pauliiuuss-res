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
    <CollapsableCard title={title} id={id}>
      {data.map((i) => {
        return (
          <div className="flex flex-col lg:w-[60%]" key={i.name}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
              <h2 className="text-og-text text-3xl font-bold lg:text-6xl">
                {i.name}
              </h2>
              <p className="text-og-text text-lg lg:text-3xl">{`(${i.date})`}</p>
            </div>
            <p className="text-og-text pt-6 text-2xl font-bold lg:text-4xl">
              {i.position}
            </p>
            <p className="text-og-text pt-10 text-xl lg:text-3xl">
              {i.description}
            </p>
            <p className="text-og-text pt-10 text-xl font-bold lg:text-3xl">
              {i.tools}
            </p>
          </div>
        )
      })}
    </CollapsableCard>
  )
}

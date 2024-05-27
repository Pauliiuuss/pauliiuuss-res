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
          <div className="flex w-[60%] flex-col" key={i.name}>
            <div className="flex flex-row items-end gap-4">
              <h2 className="text-6xl font-bold text-og-background">
                {i.name}
              </h2>
              <p className="pb-3 text-3xl text-og-background">{`(${i.date})`}</p>
            </div>
            <p className="pt-6 text-4xl font-bold text-og-background">
              {i.position}
            </p>
            <p className="pt-10 text-3xl text-og-background">{i.description}</p>
            <p className="pt-10 text-3xl font-bold text-og-background">
              {i.tools}
            </p>
          </div>
        )
      })}
    </CollapsableCard>
  )
}

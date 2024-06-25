'use client'

// import { useState } from 'react'
import { CollapsableCard } from '@/components/CollapsableCard'

export const MobileSkills = ({ title, id }: { title: string; id: string }) => {
  //   const [showInfo, setShowInfo] = useState<boolean>(false)
  return (
    <CollapsableCard title={title} id={id} key={id} sx="hidden">
      <div></div>
    </CollapsableCard>
  )
}

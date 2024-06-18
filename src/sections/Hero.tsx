import { Card } from '@/components/Card'
import { HeroContent } from '@/components/HeroContent'
import { NavBar } from '@/components/NavBar'

export const Hero = ({ id }: { id: string }) => {
  return (
    <div
      className="relative flex h-svh flex-col bg-grad bg-cover lg:gap-10"
      id={id}
    >
      <header>
        <NavBar />
      </header>
      <Card sx={'justify-center flex-col pb-20 relative'} id={id}>
        <HeroContent />
      </Card>
    </div>
  )
}

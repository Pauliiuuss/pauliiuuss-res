import { Card } from '@/components/Card'
import { HeroContent } from '@/components/HeroContent'
import { MobileNavbar } from '@/components/MobileNavbar'
import { NavBar } from '@/components/NavBar'

export const Hero = ({ id }: { id: string }) => {
  return (
    <div
      className="relative flex h-svh flex-col bg-grad bg-cover 2xl:gap-10"
      id={id}
    >
      <header className="2xl:mt-10">
        <NavBar />
        <MobileNavbar />
      </header>
      <Card sx={'justify-center flex-col pb-20 relative'} id={id} key={id}>
        <HeroContent />
      </Card>
    </div>
  )
}

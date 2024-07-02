import { Card } from '@/components/Card'
import { HeroContent } from '@/components/HeroContent'
import { MobileNavbar } from '@/components/MobileNavbar'
import { NavBar } from '@/components/NavBar'
import { AuroraBackground } from '@/components/ui/AuroraBackground'

export const Hero = ({ id }: { id: string }) => {
  return (
    <AuroraBackground>
      <div className="relative flex h-svh flex-col 2xl:gap-10" id={id}>
        <header className="2xl:mt-10">
          <NavBar />
          <MobileNavbar />
        </header>
        <Card
          animated
          sx={'justify-center flex-col pb-20 relative'}
          id={id}
          key={id}
        >
          <HeroContent />
        </Card>
      </div>
    </AuroraBackground>
  )
}

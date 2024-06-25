import { education, experience } from '@/misc/data'
import { AboutMe } from '@/sections/AboutMe'
import { Contact } from '@/sections/Contact'
import { ExEd } from '@/sections/ExEd'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Intro } from '@/sections/Intro'
import { Skills } from '@/sections/Skills'

export default function Home() {
  return (
    <>
      <Intro />
      <Hero id="home" />
      <AboutMe title="01. About me" id="about" />
      <Skills title="02. Skills" id="skills" />
      <ExEd data={experience} title="03. Experience" id="ex" />
      <ExEd data={education} title="04. Education" id="ed" />
      <Contact id={'contact'} />
      <Footer key={'footer'} />
    </>
  )
}

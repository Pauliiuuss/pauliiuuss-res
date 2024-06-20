import { CollapsableCard } from '@/components/CollapsableCard'

export const AboutMe = ({ title, id }: { title: string; id: string }) => {
  return (
    <CollapsableCard title={title} id={id}>
      <p className="text-og-text text-xl lg:w-[50%] lg:text-3xl">
        {
          'I am Paulius, a dedicated front-end developer with over 3 years of experience specializing in React web development. Throughout my career, I have honed my skills in creating dynamic and responsive web applications, ensuring a seamless user experience. Additionally, I have minimal but valuable experience in back-end development with Java. I am highly adaptable and thrive in both team-oriented and individual work environments, consistently delivering high-quality results and meeting project deadlines. My passion for continuous learning and improvement drives me to stay updated with the latest industry trends and technologies.'
        }
      </p>
    </CollapsableCard>
  )
}

export type ExEdData = {
  name: string
  date: string
  position: string
  description: string
  tools: string
}

export type SkillsData = {
  name: string
  id: string
  animDelay: number
}

export type NavigationItem = {
  name: string
  direction: string
}

export const experience: ExEdData[] = [
  {
    name: 'COINGATE',
    date: '2022-08 / 2024-04',
    position: 'Front-End Developer',
    description:
      'I managed the homepage content, supported the invoicing process, and worked on a new dashboard project. My role involved a lot of multitasking and attention to detail to ensure everything ran smoothly.',
    tools: 'NextJS . TypeScript . Tailwind',
  },
  {
    name: 'EIS',
    date: '2021-04 / 2022-08',
    position: 'Front-End Developer',
    description:
      'Developed high level insuretech web application, wrote snaphot tests, had responsibilities to make new application version releases and had an opportunity to try out full-stack developer position.',
    tools: 'ReactJS . MobX . Typescript . SCSS',
  },
]

export const education: ExEdData[] = [
  {
    name: 'VTMC/AKADEMIJAIT',
    date: '2020 / 2021',
    position: 'JAVA Developer',
    description:
      'I took JAVA courses at VTMC, and due to good entrance test results, I was transferred to Akademija.IT. At Akademija.IT, we were taught at a higher level and a more intense pace. We learned various skills, including: Operating system management (Linux), HTML, CSS, JavaScript, and JAVA, Designing and maintaining databases, technologies such as React and Spring Boot. At the end, we had a group project where we built a full-stack working web application. We used JAVA and JavaScript languages, an H2 database, React and Spring Boot technologies, and the Agile methodology.',
    tools: 'Vocational Degree',
  },
]

export const navigation: NavigationItem[] = [
  {
    name: 'About me',
    direction: 'about',
  },
  {
    name: 'Skills',
    direction: 'skills',
  },
  {
    name: 'Experience',
    direction: 'ex',
  },
  {
    name: 'Education',
    direction: 'ed',
  },
  {
    name: 'Contact',
    direction: 'contact',
  },
]

export const skills: SkillsData[] = [
  {
    name: 'JavaScript',
    id: 'js',
    animDelay: 0,
  },
  {
    name: 'Typescript',
    id: 'ts',
    animDelay: 0.1,
  },
  {
    name: 'CSS',
    id: 'css',
    animDelay: 0.2,
  },
  {
    name: 'HTML',
    id: 'html',
    animDelay: 0.3,
  },
  {
    name: 'JAVA',
    id: 'java',
    animDelay: 0.4,
  },
  {
    name: 'NextJS',
    id: 'nextjs',
    animDelay: 0.5,
  },
  {
    name: 'React',
    id: 'react',
    animDelay: 0.6,
  },
  {
    name: 'Tailwind',
    id: 'tw',
    animDelay: 0.7,
  },
  {
    name: 'GIT',
    id: 'git',
    animDelay: 0.8,
  },
  {
    name: 'Vercel',
    id: 'vercel',
    animDelay: 0.9,
  },
  {
    name: 'VSCode',
    id: 'vscode',
    animDelay: 1,
  },
  {
    name: 'Figma',
    id: 'figma',
    animDelay: 1.1,
  },
  {
    name: 'JIRA',
    id: 'jira',
    animDelay: 1.2,
  },
  {
    name: 'Ubuntu',
    id: 'ubuntu',
    animDelay: 1.3,
  },
  {
    name: 'Postman',
    id: 'postman',
    animDelay: 1.4,
  },
]

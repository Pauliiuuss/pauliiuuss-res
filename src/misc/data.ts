export type ExEdData = {
  name: string
  date: string
  position: string
  description: string
  tools: string
}

export type SkillsData = {
  name: string
  yearsOfExperience: string
  workplaces: { name: string; yearsOfExperience: string; usage: number }[]
  offsetY?: string
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

// export const skills: SkillsData[] = [
//   {
//     name: 'TAILWIND',
//     yearsOfExperience: '6 months',
//     workplaces: [{ name: 'COINGATE', yearsOfExperience: '6 months', usage: 3 }],
//   },
//   {
//     name: 'REACT',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],+

//   },
//   {
//     name: 'CSS',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 3 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'NEXTJS',
//     yearsOfExperience: '1 years 9 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'HTML',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'REACT',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'REACT',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'REACT',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'REACT',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'REACT',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
//   {
//     name: 'REACT',
//     yearsOfExperience: '3 years 3 months',
//     workplaces: [
//       { name: 'COINGATE', yearsOfExperience: '1 year 9 months', usage: 5 },
//       { name: 'EIS', yearsOfExperience: '1 year 5 months', usage: 5 },
//     ],
//   },
// ]

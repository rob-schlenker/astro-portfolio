import type { SiteConfig, SiteContent } from '../types'

export const SITE_CONFIG: SiteConfig = {
  title: 'Rob Schlenker — Mobile & Web Developer',
  author: 'Rob Schlenker',
  description:
    'Web Developer based in Michigan, USA. I specialize in web development and maintenance.',
  lang: 'en',
  siteLogo: '/rs-profile.jpeg',
  navLinks: [
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#projects' },
  ],
  socialLinks: [
    { text: 'Twitter', href: 'https://github.com/rob-schlenker' },
    { text: 'LinkedIn', href: 'https://linkedin.com/rob-schlenker' },
    { text: 'Github', href: 'https://github.com/rob-schlenker' },
    { text: 'Youtube', href: 'https://github.com/rob-schlenker' },
  ],
  socialImage: '/zen-og.png',
  canonicalURL: 'https://astro-zen.vercel.app',
}

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: 'Rob Schlenker',
    specialty: 'Web Developer',
    summary:
      'Front End Developer based in Michigan, USA. I specialize in web development and maintenance.',
    email: 'schlenk7@gmail.com',
  },
  experience: [
    {
      company: 'Zalmart',
      position: 'Lead Android Developer',
      startDate: 'May 2018',
      endDate: 'Sept 2020',
      summary: [
        'Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.',
        'I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.',
        'Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.',
      ],
    },
    {
      company: 'Bankit',
      position: 'Mobile Developer',
      startDate: 'Feb 2017',
      endDate: 'May 2018',
      summary: [
        'I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.',
        'I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.',
      ],
    },
    {
      company: 'Driveer',
      position: 'Frontend Developer',
      startDate: 'Jun 2015',
      endDate: 'Oct 2016',
      summary:
        'Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.',
    },
  ],
  projects: [
    {
      name: 'Tao Unfolds',
      summary: "A site that reveals a new Tao Te Ching verse each day, with a focus on simplicity and elegance. Features include an audio player secotin to help with meditation and a cookie saved journaling section.",
      linkPreview: 'https://tao-unfolds.vercel.app/',
      linkSource: 'https://github.com/rob-schlenker/tao-unfolds',
      image: '/spotifu.png',
    },
    {
      name: 'Shopp App',
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: '/',
      linkSource: 'https://github.com/immois/astro-zen',
      image: '/shopify-clon.png',
    },
    {
      name: 'ClonTagram',
      summary: 'A social network that replicates the features of Instagram',
      linkPreview: '/',
      linkSource: 'https://github.com/immois/astro-zen',
      image: '/clone-ig.png',
    },
  ],
  about: {
    description: `
      Hi, I'm Rob Schlenker. As a highly motivated Web Developer, I possess a strong foundation in HTML/CSS, JavaScript, Angular, React, and other modern web technologies.  My experience includes website creation, reskinning, maintenance, and a focus on security and accessibility.  I am passionate about staying current with the latest trends and technologies to develop innovative and effective digital solutions.  I am dedicated to continuous learning and growth in the ever-evolving field of web development, with a proven track record of adapting to new frameworks and tools to exceed client expectations.
    `,
    image: '/rs-profile.jpeg',
  },
}

// #5755ff

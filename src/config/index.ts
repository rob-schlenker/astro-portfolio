import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Rob Schlenker — Web Developer",
  author: "Rob Schlenker",
  description:
    "Web Developer based in Michigan, crafting dynamic and responsive websites that deliver exceptional user experiences. Specializing in front-end development and website maintenance, I bring ideas to life with clean, efficient code and a passion for innovation.",
  lang: "en",
  siteLogo: "/rs-profile.jpeg",
  navLinks: [
    { text: "About", href: "#about" },
    // { text: 'Experience', href: '#experience' },
    { text: "Projects", href: "#projects" },
  ],
  socialLinks: [
    // { text: 'Twitter', href: 'https://github.com/rob-schlenker' },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/rob-schlenker/" },
    { text: "Github", href: "https://github.com/rob-schlenker" },
    // { text: 'Youtube', href: 'https://github.com/rob-schlenker' },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Rob Schlenker",
    specialty: "Web Developer",
    summary:
      "Web Developer based in Michigan, crafting dynamic and responsive websites that deliver exceptional user experiences. Specializing in front-end development and website maintenance, I bring ideas to life with clean, efficient code and a passion for innovation.",
    email: "schlenk7@gmail.com",
    linkedIn: "https://www.linkedin.com/in/rob-schlenker/",
  },
  // experience: [
  //   {
  //     company: 'Zalmart',
  //     position: 'Lead Android Developer',
  //     startDate: 'May 2018',
  //     endDate: 'Sept 2020',
  //     summary: [
  //       'Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.',
  //       'I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.',
  //       'Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.',
  //     ],
  //   },
  //   {
  //     company: 'Bankit',
  //     position: 'Mobile Developer',
  //     startDate: 'Feb 2017',
  //     endDate: 'May 2018',
  //     summary: [
  //       'I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.',
  //       'I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.',
  //     ],
  //   },
  //   {
  //     company: 'Driveer',
  //     position: 'Frontend Developer',
  //     startDate: 'Jun 2015',
  //     endDate: 'Oct 2016',
  //     summary:
  //       'Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.',
  //   },
  // ],
  projects: [
    {
      name: "Starlit Library",
      summary:
        "A children's storybook website that features a collection of stories. The site is designed to be visually appealing and easy to navigate, with a focus on finding your new favorite childrens stories site.",
      linkPreview: "https://starlit-library-psi.vercel.app/",
      linkSource: "https://github.com/rob-schlenker/childrens-stories",
      image: "/starlit-library-ss.png",
    },
    {
      name: "Tao Unfolds",
      summary:
        "A site that reveals a new Tao Te Ching verse each day, with a focus on simplicity and elegance. Features include an audio player secotin to help with meditation and a cookie saved journaling section.",
      linkPreview: "https://tao-unfolds.vercel.app/",
      linkSource: "https://github.com/rob-schlenker/tao-unfolds",
      image: "/tao-unfolds-screenshot.png",
    },
    {
      name: "Electic Love Tattoo",
      summary:
        "A custom WordPress website for a tattoo shop that showcases the artist's work and provides shop details. Built with a custom theme focusing on brand identity and easy content management.",
      linkPreview: "https://electric-love-tattoo.netlify.app/",
      linkSource: "https://github.com/rob-schlenker/electric-love",
      image: "/electric-love-site.png",
    },
    {
      name: "A.I. Chatbot",
      summary:
        "A chatbot that uses A.I. to answer questions and provide information using ChatGPT.",
      linkPreview: "https://robs-ai-chatbot.netlify.app/",
      linkSource: "https://github.com/rob-schlenker/ai-chatbot",
      image: "/ai-chatbot-site.png",
    },
    {
      name: "BMI Calculator",
      summary:
        "A BMI calculator that allows users to calculate their BMI and get a personalized recommendation.",
      linkPreview: "https://mellow-wisp-0c75f2.netlify.app/",
      linkSource: "https://github.com/rob-schlenker/angular-bmi-calculator",
      image: "/bmi-site.png",
    },
  ],
  about: {
    description: `<span class="text-2xl font-bol"><span class="wave-emoji animate-wave inline-block">👋</span> Hi, I'm Rob Schlenker.</span>
    
    A Web Developer driven by creativity and curiosity, specializing in crafting seamless, engaging digital experiences. With a robust foundation in HTML, CSS, JavaScript, Wordpress, and React, I bring both technical expertise and a user-focused perspective to every project I undertake.

    <span class="text-2xl font-bold border-b-2 border-primary">Professional Experience</span>

    Over the years, I've honed my skills in website creation, reskinning, maintenance, and optimization—always with a focus on security and accessibility. I'm passionate about transforming complex ideas into intuitive designs that not only meet but exceed user expectations. Staying ahead of the curve with emerging trends and technologies is not just a professional commitment; it's a personal passion.

    <span class="text-2xl font-bold border-b-2 border-primary">Continuous Learning</span>

    What sets me apart is my relentless dedication to continuous learning. Whether it's mastering a new framework, exploring advanced tools, or refining my understanding of web performance, I'm always looking for ways to evolve and improve. I thrive in fast-paced, collaborative environments where innovation and adaptability are key.

    Let's create something exceptional together.`,
    image: "/rs-profile.jpeg",
  },
};

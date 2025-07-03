export const siteConfig = {
  name: 'Clarkston Technology',
  description: 'Expert fractional CTO services, engineering team leadership, and software development consulting.',
  url: 'https://www.clarkstontechnology.com',
  ogImage: 'https://www.clarkstontechnology.com/og.jpg',
  links: {
    linkedin: 'https://linkedin.com/in/johnlee',
    github: 'https://github.com/clarkstontechnology',
    email: 'john@clarkstontechnology.com',
  },
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Case Studies',
      href: '/case-studies',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  services: [
    {
      title: 'Fractional CTO',
      description: 'Strategic technology leadership on-demand, providing executive-level guidance without the full-time commitment.',
      features: [
        'Technology strategy development',
        'Team building and scaling',
        'Technical due diligence',
        'Architecture review and planning',
      ],
    },
    {
      title: 'Engineering Leadership',
      description: 'Expert management of engineering teams to deliver high-quality software on time and within budget.',
      features: [
        'Team mentorship and growth',
        'Process optimization',
        'Agile transformation',
        'Performance management',
      ],
    },
    {
      title: 'Software Development',
      description: 'Full-stack development services using modern technologies and best practices.',
      features: [
        'Web application development',
        'API design and implementation',
        'Cloud architecture',
        'DevOps and CI/CD',
      ],
    },
    {
      title: 'Technology Consulting',
      description: 'Strategic advice on technology choices, architecture decisions, and digital transformation.',
      features: [
        'Technology stack selection',
        'Vendor evaluation',
        'Security assessment',
        'Scalability planning',
      ],
    },
  ],
} as const; 
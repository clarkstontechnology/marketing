export const siteConfig = {
  name: 'Clarkston Technology Group',
  tagline: 'Your Technology Partner at Every Level',
  description: 'Technology partnership for startups, businesses, and engineering professionals. From strategic guidance to hands-on development.',
  url: 'https://www.clarkstontechnology.com',
  ogImage: 'https://www.clarkstontechnology.com/og.jpg',
  location: 'Atlanta, GA',
  founded: 2004,
  links: {
    linkedin: 'https://www.linkedin.com/company/clarkston-technology-group',
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
  serviceCategories: [
    {
      category: 'For Startups & Ideas',
      description: 'Transform your vision into reality with strategic technology guidance and rapid prototyping.',
      services: [
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
        {
          title: 'Prototyping & Proof of Concept',
          description: 'Rapid development of prototypes and proof-of-concept solutions to validate your ideas.',
          features: [
            'MVP development',
            'Technical feasibility analysis',
            'Market validation support',
            'Investor-ready demos',
          ],
        },
      ],
    },
    {
      category: 'For Businesses Using Technology',
      description: 'Scale your technology operations with executive leadership and comprehensive development services.',
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
          title: 'Technology Maintenance',
          description: 'Ongoing support and maintenance of your technology infrastructure and applications.',
          features: [
            'System monitoring and optimization',
            'Security updates and patches',
            'Performance tuning',
            'Technical debt management',
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
      ],
    },
    {
      category: 'For Engineering Managers & Engineers',
      description: 'Advance your career with personalized mentorship and strategic guidance.',
      services: [
        {
          title: 'Engineering Mentorship',
          description: 'Personalized guidance for specific technical challenges and career situations.',
          features: [
            'Technical problem-solving',
            'Code review and best practices',
            'Architecture decisions',
            'Leadership skill development',
          ],
        },
        {
          title: 'Career Guidance',
          description: 'Strategic career planning and development for engineering professionals.',
          features: [
            'Career path planning',
            'Interview preparation',
            'Skill gap analysis',
            'Leadership transition support',
          ],
        },
      ],
    },
  ],
  // Legacy services array for backward compatibility
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
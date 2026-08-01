import type { ResumeDocument } from '../domain/resume'

export const sampleResume: ResumeDocument = {
  basics: {
    name: 'Olivia Bennett',
    headline: 'Senior Product Designer',
    summary:
      'Product designer with 8+ years of experience shaping thoughtful digital products from first principles to launch. I bring systems thinking, clear storytelling, and a deep respect for the people on both sides of the screen.',
    contact: {
      email: 'olivia@bennett.design',
      phone: '+1 415 555 0148',
      location: 'San Francisco, CA',
      website: 'bennett.design',
    },
  },
  experience: [
    {
      id: 'northstar',
      company: 'Northstar Labs',
      role: 'Senior Product Designer',
      location: 'San Francisco, CA',
      startDate: '2021',
      endDate: 'Present',
      highlights: [
        'Led end-to-end design for a B2B analytics suite used by 12,000+ operations teams, increasing weekly active use by 34%.',
        'Built and governed a multi-platform design system that reduced feature delivery time by 28% across four product teams.',
        'Partnered with research and data science to turn complex workflows into a focused, role-based product experience.',
      ],
    },
    {
      id: 'fieldwork',
      company: 'Fieldwork Studio',
      role: 'Product Designer',
      location: 'New York, NY',
      startDate: '2018',
      endDate: '2021',
      highlights: [
        'Designed and launched consumer and enterprise products for early-stage companies across fintech, climate, and health.',
        'Introduced lightweight research practices that helped client teams validate direction before committing engineering time.',
      ],
    },
    {
      id: 'common',
      company: 'Common & Co.',
      role: 'Interaction Designer',
      location: 'Brooklyn, NY',
      startDate: '2016',
      endDate: '2018',
      highlights: [
        'Created responsive digital experiences and identity systems for mission-driven organizations and cultural institutions.',
      ],
    },
  ],
  education: [
    {
      id: 'risd',
      institution: 'Rhode Island School of Design',
      degree: 'BFA, Graphic Design',
      location: 'Providence, RI',
      graduationDate: '2016',
      detail: 'Honors · Presidential Scholar',
    },
  ],
  skills: [
    { id: 'practice', label: 'Practice', skills: ['Product strategy', 'Interaction design', 'Prototyping', 'Design systems'] },
    { id: 'tools', label: 'Tools', skills: ['Figma', 'FigJam', 'Principle', 'Adobe Creative Suite'] },
    { id: 'methods', label: 'Methods', skills: ['User research', 'Journey mapping', 'Usability testing', 'Facilitation'] },
  ],
}

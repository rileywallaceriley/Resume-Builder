import type { ResumeDocument } from '../domain/resume'

export const rileyResume: ResumeDocument = {
  basics: {
    name: 'Riley Wallace',
    headline: 'Technical Content Strategist | Journalist | AI Content Systems | SEO & GEO',
    summary:
      'Journalist-turned technical content strategist with 15+ years of experience across editorial, marketing, SEO, GEO, and AI-assisted workflows. Combines nearly 1,000 published articles with hands-on experience building content systems, automation workflows, paid media programs, and organic search strategies across B2B SaaS, cybersecurity, fintech, healthcare, renewable energy, and culture. Known for translating complex ideas into clear, useful content and for adopting emerging technology early to create measurable business value.',
    contact: {
      email: '',
      phone: '',
      location: 'Ajax, Ontario, Canada',
      website: '',
    },
  },
  experience: [
    {
      id: 'productive-shop',
      company: 'Productive Shop',
      role: 'Senior Technology Content Writer',
      location: 'Remote',
      startDate: 'Apr 2024',
      endDate: 'Present',
      highlights: [
        'Write and develop B2B technology content across cybersecurity, SaaS, fintech, healthcare, cloud infrastructure, and industrial AI.',
        'Translate complex technical and business topics into clear articles, landing pages, comparison content, and content briefs.',
        'Use SEMrush Enterprise, SEO research, and GEO principles to identify search intent, audience questions, and content opportunities.',
        'Collaborate with SEO, editorial, account, and subject matter teams to deliver accurate, on-brand content.',
      ],
    },
    {
      id: 'riley-wallace-creative',
      company: 'Riley Wallace Creative',
      role: 'Marketing Communications Consultant',
      location: 'Toronto, Ontario',
      startDate: 'May 2018',
      endDate: 'Present',
      highlights: [
        'Develop content, SEO, social media, and digital marketing strategies for B2B and B2C clients.',
        'Build AI-assisted research and workflow automations using n8n, ChatGPT, Claude, and Perplexity while keeping final editorial judgment human.',
        'Create web, email, social, and visual assets using Adobe Creative Suite.',
      ],
    },
    {
      id: 'lendcare',
      company: 'LendCare',
      role: 'Copywriter',
      location: 'Pickering, Ontario',
      startDate: 'May 2022',
      endDate: 'Apr 2024',
      highlights: [
        'Produced B2B and B2C content across websites, email, advertising, and corporate communications.',
        'Introduced AI-assisted content workflows and built multi-stage systems for complaint triage, BBB inquiries, and cross-department customer resolution.',
        'Reduced repetitive manual work across teams by approximately 1–4 hours per week depending on the workflow.',
      ],
    },
    {
      id: 'polaron-solar-energy',
      company: 'Polaron Solar Energy',
      role: 'Marketing Consultant',
      location: 'Canada',
      startDate: 'Jan 2020',
      endDate: 'Nov 2022',
      highlights: [
        'Led SEO, social media, and web content strategy for a national residential solar company.',
        'Earned first-page rankings in multiple Ontario markets through localized organic search strategies.',
        'Combined paid and organic campaigns to generate low-cost leads that supported millions in sales.',
      ],
    },
    {
      id: 'intelligent-properties',
      company: 'Intelligent Properties',
      role: 'Marketing Director',
      location: 'Ontario',
      startDate: 'Sep 2018',
      endDate: 'Jan 2020',
      highlights: [
        'Directed digital marketing and lead generation across paid, organic, social, and content channels.',
        'Managed campaign strategy, brand communications, and execution for renewable energy and property-related services.',
      ],
    },
    {
      id: 'solar-brokers-canada',
      company: 'Solar Brokers Canada',
      role: 'Marketing Manager',
      location: 'Ontario',
      startDate: 'Aug 2016',
      endDate: 'May 2018',
      highlights: [
        'Scaled digital marketing investment to approximately $1.3M annually.',
        'Helped secure and support a Lowe’s retail partnership that generated more than $20M in sales within roughly five months.',
        'Brought SEO in-house and achieved first-page rankings in multiple local markets.',
        'Built hyper-local paid campaigns and lead-generation systems supporting a sales team of more than 20 people.',
        'Generated 80 leads on the first day of a performance challenge and approximately 400 leads from the company’s previously unused email list.',
      ],
    },
  ],
  education: [
    {
      id: 'george-brown-college',
      institution: 'George Brown College',
      degree: 'Human Resources Management, Post-Graduate Certificate',
      location: 'Toronto, Ontario',
      graduationDate: '2006–2007',
    },
  ],
  skills: [
    {
      id: 'content',
      label: 'Content',
      skills: ['Technical writing', 'Long-form articles', 'Website copy', 'Email', 'Newsletters', 'Content briefs', 'Editorial strategy'],
    },
    {
      id: 'search-and-strategy',
      label: 'Search and Strategy',
      skills: ['SEO', 'GEO', 'Keyword research', 'Search intent', 'Content clusters', 'Pillar pages', 'SEMrush Enterprise', 'Google Analytics'],
    },
    {
      id: 'ai-and-automation',
      label: 'AI and Automation',
      skills: ['n8n', 'ChatGPT', 'Claude', 'Perplexity', 'Prompt design', 'Workflow automation', 'AI-assisted research'],
    },
    {
      id: 'marketing',
      label: 'Marketing',
      skills: ['Paid media', 'Google Ads', 'Facebook Ads', 'Lead generation', 'Campaign strategy', 'Audience segmentation'],
    },
    {
      id: 'editorial',
      label: 'Editorial',
      skills: ['Journalism', 'Interviewing', 'Reviews', 'Features', 'Editing', 'Storytelling', 'Nearly 1,000 published bylines'],
    },
  ],
}

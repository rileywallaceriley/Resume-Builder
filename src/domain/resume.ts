import type { ReactNode } from 'react'

export interface ContactDetails {
  email: string
  phone: string
  location: string
  website: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  highlights: string[]
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  location: string
  graduationDate: string
  detail?: string
}

export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}

export interface ResumeDocument {
  basics: {
    name: string
    headline: string
    summary: string
    contact: ContactDetails
  }
  experience: ExperienceItem[]
  education: EducationItem[]
  skills: SkillGroup[]
}

export type ResumeSectionId = 'profile' | 'experience' | 'education' | 'skills'

export interface TemplateProps {
  document: ResumeDocument
  accentColor: string
}

export interface ResumeTemplate {
  id: string
  name: string
  description: string
  render: (props: TemplateProps) => ReactNode
}

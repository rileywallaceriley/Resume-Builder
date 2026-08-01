import type { ResumeTemplate } from '../domain/resume'
import { ModernProfessional } from './ModernProfessional'

export const templates: ResumeTemplate[] = [
  {
    id: 'modern-professional',
    name: 'Modern Professional',
    description: 'Editorial clarity with confident hierarchy.',
    render: (props) => <ModernProfessional {...props} />,
  },
]

export function getTemplate(templateId: string): ResumeTemplate {
  return templates.find(({ id }) => id === templateId) ?? templates[0]
}

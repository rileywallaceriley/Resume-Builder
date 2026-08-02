import type { TemplateProps } from '../domain/resume'
import { ModernProfessional } from '../templates/ModernProfessional'
import './printable-resume.css'

/**
 * A print-only rendering tree that is deliberately outside the scaled,
 * scrollable preview. Paged-media engines can fragment this normal-flow tree
 * without inheriting the workspace's fixed viewport or preview transform.
 */
export function PrintableResume(props: TemplateProps) {
  return (
    <div className="print-resume" aria-hidden="true">
      <ModernProfessional {...props} />
    </div>
  )
}

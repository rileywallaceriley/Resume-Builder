import type { CSSProperties, ReactNode } from 'react'
import type { TemplateProps } from '../domain/resume'

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="resume-section-title">{children}</h2>
}

export function ModernProfessional({ document, accentColor }: TemplateProps) {
  const { basics, experience, education, skills } = document

  return (
    <article className="resume-page" style={{ '--resume-accent': accentColor } as CSSProperties} aria-label={`${basics.name}'s resume`}>
      <header className="resume-header">
        <div>
          <p className="resume-eyebrow">Portfolio · 2026</p>
          <h1>{basics.name}</h1>
          <p className="resume-headline">{basics.headline}</p>
        </div>
        <address className="resume-contact">
          <a href={`mailto:${basics.contact.email}`}>{basics.contact.email}</a>
          <a href={`tel:${basics.contact.phone.replace(/\s/g, '')}`}>{basics.contact.phone}</a>
          <span>{basics.contact.location}</span>
          <span>{basics.contact.website}</span>
        </address>
      </header>

      <div className="resume-rule" />

      <section className="resume-summary">
        <SectionTitle>Profile</SectionTitle>
        <p>{basics.summary}</p>
      </section>

      <section>
        <SectionTitle>Experience</SectionTitle>
        <div className="resume-list">
          {experience.map((item) => (
            <div className="resume-entry" key={item.id}>
              <div className="entry-meta">
                <p>{item.startDate} — {item.endDate}</p>
                <p>{item.location}</p>
              </div>
              <div className="entry-content">
                <h3>{item.role}</h3>
                <p className="entry-company">{item.company}</p>
                <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="resume-lower-grid">
        <section>
          <SectionTitle>Education</SectionTitle>
          {education.map((item) => (
            <div className="education-entry" key={item.id}>
              <h3>{item.institution}</h3>
              <p>{item.degree}</p>
              <p className="education-detail">{item.graduationDate} · {item.location}</p>
              {item.detail && <p className="education-detail">{item.detail}</p>}
            </div>
          ))}
        </section>
        <section>
          <SectionTitle>Expertise</SectionTitle>
          <div className="skill-list">
            {skills.map((group) => (
              <div key={group.id}>
                <h3>{group.label}</h3>
                <p>{group.skills.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}

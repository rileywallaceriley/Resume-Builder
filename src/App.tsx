import { useState, type CSSProperties } from 'react'
import {
  Award,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleUserRound,
  Download,
  GraduationCap,
  LayoutTemplate,
  Minus,
  MoreHorizontal,
  Plus,
  Save,
  Settings2,
  Sparkles,
  WandSparkles,
} from 'lucide-react'
import { rileyResume } from './data/rileyResume'
import type { ResumeSectionId } from './domain/resume'
import { getTemplate } from './templates/registry'

const sections: { id: ResumeSectionId; label: string; icon: typeof CircleUserRound }[] = [
  { id: 'profile', label: 'Personal details', icon: CircleUserRound },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills & expertise', icon: Award },
]

const accentOptions = ['#B65A3A', '#315E78', '#49654A', '#544B70']

export default function App() {
  const [activeSection, setActiveSection] = useState<ResumeSectionId>('experience')
  const [zoom, setZoom] = useState(82)
  const [accentColor, setAccentColor] = useState(accentOptions[0])
  const template = getTemplate('modern-professional')

  const changeZoom = (amount: number) => setZoom((current) => Math.min(110, Math.max(60, current + amount)))

  const exportPdf = () => {
    const printUrl = new URL(window.location.href)
    printUrl.search = ''
    printUrl.hash = ''
    printUrl.searchParams.set('print', '1')
    printUrl.searchParams.set('autoprint', '1')
    printUrl.searchParams.set('accent', accentColor)
    window.open(printUrl.toString(), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Career Agent home">
          <span className="brand-mark"><Sparkles size={16} strokeWidth={1.8} /></span>
          <span>Career Agent</span>
        </a>
        <div className="document-title">
          <span>{rileyResume.basics.name}</span>
          <span className="title-divider" />
          <button type="button">Technical Content Strategist Resume <ChevronDown size={14} /></button>
        </div>
        <div className="topbar-actions">
          <span className="saved-state"><Check size={13} /> Saved</span>
          <button className="icon-button" type="button" aria-label="More options"><MoreHorizontal size={19} /></button>
          <button className="primary-button" type="button" onClick={exportPdf}><Download size={15} /> Export PDF</button>
        </div>
      </header>

      <main className="workspace" id="top">
        <aside className="sidebar">
          <div className="sidebar-heading">
            <div><p>Resume builder</p><h2>Shape your story</h2></div>
            <button className="icon-button" type="button" aria-label="Resume settings"><Settings2 size={18} /></button>
          </div>
          <nav className="section-nav" aria-label="Resume sections">
            {sections.map(({ id, label, icon: Icon }, index) => (
              <button className={activeSection === id ? 'active' : ''} type="button" key={id} onClick={() => setActiveSection(id)}>
                <span className="nav-number">0{index + 1}</span><Icon size={17} /><span>{label}</span>
                {id !== 'skills' && <span className="complete-dot"><Check size={10} /></span>}
              </button>
            ))}
          </nav>

          <div className="sidebar-divider" />
          <div className="template-block">
            <div className="block-label"><span><LayoutTemplate size={15} /> Template</span><button type="button">Browse</button></div>
            <button className="template-card" type="button">
              <span className="template-thumbnail"><i /><i /><i /><i /></span>
              <span><strong>{template.name}</strong><small>{template.description}</small></span>
              <Check className="template-check" size={13} />
            </button>
          </div>

          <div className="theme-block">
            <div className="block-label"><span>Accent color</span><span className="color-value">{accentColor}</span></div>
            <div className="swatches">
              {accentOptions.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={color === accentColor ? 'selected' : ''}
                  style={{ backgroundColor: color }}
                  onClick={() => setAccentColor(color)}
                  aria-label={`Use accent color ${color}`}
                />
              ))}
            </div>
          </div>

          <button className="ai-review" type="button">
            <span className="ai-icon"><WandSparkles size={17} /></span>
            <span><strong>Polish with AI</strong><small>Review clarity and impact</small></span>
            <span className="new-pill">New</span>
          </button>
          <div className="sidebar-footer"><Save size={13} /><span>All changes saved</span><span>·</span><span>Just now</span></div>
        </aside>

        <section className="preview-panel" aria-label="Resume preview">
          <div className="preview-toolbar">
            <div><p>Live preview</p><span>A4 · 1 page</span></div>
            <div className="zoom-control">
              <button type="button" onClick={() => changeZoom(-5)} aria-label="Zoom out"><Minus size={14} /></button>
              <output>{zoom}%</output>
              <button type="button" onClick={() => changeZoom(5)} aria-label="Zoom in"><Plus size={14} /></button>
            </div>
          </div>
          <div className="preview-stage">
            <div className="page-scaler" style={{ '--preview-scale': zoom / 100 } as CSSProperties}>
              {template.render({ document: rileyResume, accentColor })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

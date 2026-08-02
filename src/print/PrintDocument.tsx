import { useEffect } from 'react'
import { rileyResume } from '../data/rileyResume'
import { ModernProfessional } from '../templates/ModernProfessional'
import './print-document.css'

const defaultAccent = '#B65A3A'

function requestedAccent() {
  const value = new URLSearchParams(window.location.search).get('accent')
  return value && /^#[0-9a-f]{6}$/i.test(value) ? value : defaultAccent
}

export function PrintDocument() {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if (query.get('autoprint') !== '1') return

    let cancelled = false
    void document.fonts.ready.then(() => {
      if (!cancelled) window.print()
    })

    return () => { cancelled = true }
  }, [])

  return (
    <main className="print-document">
      <ModernProfessional document={rileyResume} accentColor={requestedAccent()} />
    </main>
  )
}

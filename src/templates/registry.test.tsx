import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { sampleResume } from '../data/sampleResume'
import { getTemplate } from './registry'

describe('resume template registry', () => {
  it('returns the default template for an unknown id', () => {
    expect(getTemplate('unknown').id).toBe('modern-professional')
  })

  it('renders resume data through the template contract', () => {
    const template = getTemplate('modern-professional')
    render(template.render({ document: sampleResume, accentColor: '#B65A3A' }))

    expect(screen.getByRole('heading', { name: 'Olivia Bennett' })).toBeInTheDocument()
    expect(screen.getByText('Northstar Labs')).toBeInTheDocument()
    expect(screen.getByLabelText("Olivia Bennett's resume")).toHaveStyle('--resume-accent: #B65A3A')
  })
})

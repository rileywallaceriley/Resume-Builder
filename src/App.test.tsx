import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Riley Wallace resume data instead of the sample fixture', () => {
    render(<App />)

    expect(screen.getAllByText('Riley Wallace')).not.toHaveLength(0)
    expect(
      screen.getByText('Technical Content Strategist | Journalist | AI Content Systems | SEO & GEO'),
    ).toBeInTheDocument()
    expect(screen.queryByText('Olivia Bennett')).not.toBeInTheDocument()
  })
})

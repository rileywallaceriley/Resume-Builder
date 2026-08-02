import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('uses Riley Wallace as the active resume while keeping sample data as a fixture', () => {
    render(<App />)

    expect(screen.getAllByText('Riley Wallace')).not.toHaveLength(0)
    expect(screen.queryByText('Olivia Bennett')).not.toBeInTheDocument()
  })
})

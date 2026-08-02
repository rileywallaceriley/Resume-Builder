import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('uses Riley Wallace as the active resume while keeping sample data as a fixture', () => {
    render(<App />)

    expect(screen.getAllByText('Riley Wallace')).not.toHaveLength(0)
    expect(screen.queryByText('Olivia Bennett')).not.toBeInTheDocument()
  })

  it('opens the browser print dialog when exporting the resume as a PDF', () => {
    const print = vi.spyOn(window, 'print').mockImplementation(() => undefined)

    render(<App />)
    screen.getByRole('button', { name: /export pdf/i }).click()

    expect(print).toHaveBeenCalledOnce()
  })
})

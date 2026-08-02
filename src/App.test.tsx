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

  it('exports through an independent print document', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    render(<App />)

    screen.getByRole('button', { name: /export pdf/i }).click()

    expect(open).toHaveBeenCalledOnce()
    const [url, target, features] = open.mock.calls[0]
    expect(new URL(String(url)).searchParams.get('print')).toBe('1')
    expect(new URL(String(url)).searchParams.get('autoprint')).toBe('1')
    expect(new URL(String(url)).searchParams.get('accent')).toBe('#B65A3A')
    expect(target).toBe('_blank')
    expect(features).toBe('noopener,noreferrer')
  })
})

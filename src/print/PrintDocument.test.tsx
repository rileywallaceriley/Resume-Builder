import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PrintDocument } from './PrintDocument'

describe('PrintDocument', () => {
  afterEach(() => {
    cleanup()
    window.history.replaceState({}, '', '/')
    vi.restoreAllMocks()
  })

  it('renders Riley resume without the editor preview hierarchy', () => {
    render(<PrintDocument />)

    expect(screen.getByRole('main')).toHaveClass('print-document')
    expect(screen.getByLabelText("Riley Wallace's resume")).toBeInTheDocument()
    expect(document.querySelector('.workspace')).not.toBeInTheDocument()
    expect(document.querySelector('.page-scaler')).not.toBeInTheDocument()
  })

  it('waits for fonts before automatically printing', async () => {
    window.history.replaceState({}, '', '/?print=1&autoprint=1')
    const fontsReady = Promise.resolve()
    Object.defineProperty(document, 'fonts', {
      configurable: true,
      value: { ready: fontsReady },
    })
    const print = vi.spyOn(window, 'print').mockImplementation(() => undefined)

    render(<PrintDocument />)

    await waitFor(() => expect(print).toHaveBeenCalledOnce())
  })
})

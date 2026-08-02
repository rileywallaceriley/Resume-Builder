import { expect, test } from '@playwright/test'

test('the standalone print document flows across three A4 pages without clipping', async ({ page }) => {
  await page.goto('/?print=1')

  await expect(page.locator('.print-document')).toBeVisible()
  await expect(page.locator('.workspace')).toHaveCount(0)

  await page.locator('.resume-list').evaluate((list) => {
    const entries = Array.from(list.children)
    for (let copy = 0; copy < 3; copy += 1) {
      for (const entry of entries) list.append(entry.cloneNode(true))
    }
  })

  await page.emulateMedia({ media: 'print' })
  const layout = await page.locator('.print-document').evaluate((documentRoot) => {
    const resume = documentRoot.querySelector<HTMLElement>('.resume-page')!
    const lastEntry = documentRoot.querySelector<HTMLElement>('.resume-entry:last-child')!
    const style = getComputedStyle(resume)
    return {
      documentBottom: documentRoot.getBoundingClientRect().bottom,
      lastEntryBottom: lastEntry.getBoundingClientRect().bottom,
      overflow: style.overflow,
      transform: style.transform,
    }
  })

  expect(layout.overflow).toBe('visible')
  expect(layout.transform).toBe('none')
  expect(layout.documentBottom).toBeGreaterThanOrEqual(layout.lastEntryBottom)

  const pdf = await page.pdf({ format: 'A4', printBackground: true })
  const pageObjects = pdf.toString('latin1').match(/\/Type\s*\/Page\b/g) ?? []
  expect(pageObjects.length).toBeGreaterThanOrEqual(3)
})

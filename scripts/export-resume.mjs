import { mkdir } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { chromium } from 'playwright'

const outputDirectory = new URL('../output/', import.meta.url)
const previewUrl = 'http://127.0.0.1:4173'

await mkdir(outputDirectory, { recursive: true })

const server = spawn('npm', ['exec', 'vite', '--', 'preview', '--host', '127.0.0.1'], {
  stdio: 'inherit',
})

for (let attempt = 0; attempt < 30; attempt += 1) {
  try {
    const response = await fetch(previewUrl)
    if (response.ok) break
  } catch {
    // Vite is still starting.
  }
  await new Promise((resolve) => setTimeout(resolve, 200))
}

const browser = await chromium.launch({ headless: true })

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1.5 })
  await page.goto(previewUrl, { waitUntil: 'networkidle' })

  const resume = page.locator('.resume-page')
  await resume.evaluate((element) => {
    element.style.transform = 'none'
    element.style.boxShadow = 'none'
    element.style.overflow = 'visible'
    const resumeBounds = element.getBoundingClientRect()
    const contentBounds = element.lastElementChild.getBoundingClientRect()
    const paddingBottom = Number.parseFloat(getComputedStyle(element).paddingBottom)
    element.style.height = `${Math.ceil(contentBounds.bottom - resumeBounds.top + paddingBottom)}px`
  })

  await resume.screenshot({ path: new URL('riley-wallace-resume.png', outputDirectory).pathname })
  await page.emulateMedia({ media: 'print' })
  await page.pdf({
    path: new URL('riley-wallace-resume.pdf', outputDirectory).pathname,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })
} finally {
  await browser.close()
  server.kill('SIGTERM')
}

console.log('Created output/riley-wallace-resume.png and output/riley-wallace-resume.pdf')

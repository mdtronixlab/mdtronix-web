/**
 * Fetch Stitch screen HTML + screenshots via the Stitch MCP API,
 * then download hosted URLs with curl.
 *
 * Requires STITCH_API_KEY (https://stitch.withgoogle.com/settings)
 */
import { spawn } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { stitch } from '@google/stitch-sdk'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUTPUT_DIR = path.join(ROOT, 'stitch')

const PROJECT_ID = '10415312695007517577'

const SCREENS = [
  {
    title: 'MDtronix Lab - Services',
    screenId: 'f781fb65cff34e0ab3e98745880a0cf2',
  },
  {
    title: 'MDtronix Nexus AI Hub - Product Detail',
    screenId: '3a73d289ecd44974a9fc7e9be8682fbc',
  },
  {
    title: 'MDtronix Lab - Custom Automation Rules',
    screenId: '9d4edff7207947b180d05cb1c333d5cb',
  },
  {
    title: 'MDtronix Lab - Pricing Plans',
    screenId: '0cf1523709ed4ea3b3ee1a06a313bb25',
  },
]

function slugify(title, screenId, seen) {
  const base = title
    ? title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    : ''
  let slug = base || screenId
  let counter = 1
  while (seen.has(slug)) {
    slug = `${base || screenId}_${counter++}`
  }
  seen.add(slug)
  return slug
}

function curlDownload(url, dest) {
  return new Promise((resolve, reject) => {
    const args = ['-L', '--fail', '--silent', '--show-error', '-o', dest, url]
    const child = spawn('curl.exe', args, { stdio: ['ignore', 'pipe', 'pipe'] })
    let stderr = ''
    child.stderr.on('data', (chunk) => {
      stderr += chunk
    })
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(stderr.trim() || `curl exited with code ${code}`))
    })
    child.on('error', reject)
  })
}

async function downloadUrl(url, dest) {
  try {
    await curlDownload(url, dest)
  } catch {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`)
    }
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
  }
}

async function loadEnv() {
  try {
    const text = await readFile(path.join(ROOT, '.env'), 'utf8')
    for (const line of text.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let value = trimmed.slice(eq + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      if (!process.env[key]) process.env[key] = value
    }
  } catch {
    // no .env file
  }
}

async function main() {
  await loadEnv()

  if (!process.env.STITCH_API_KEY && !process.env.STITCH_ACCESS_TOKEN) {
    console.error(
      'Missing credentials. Set STITCH_API_KEY in .env or your environment.',
    )
    console.error('Get a key: https://stitch.withgoogle.com/settings')
    process.exit(1)
  }

  await mkdir(OUTPUT_DIR, { recursive: true })

  const project = stitch.project(PROJECT_ID)
  const seenSlugs = new Set()
  const manifest = []

  for (const { title, screenId } of SCREENS) {
    const slug = slugify(title, screenId, seenSlugs)
    const screenDir = path.join(OUTPUT_DIR, slug)
    await mkdir(screenDir, { recursive: true })

    console.log(`Fetching ${title} (${screenId})…`)
    const screen = await project.getScreen(screenId)
    const resolvedTitle = screen.title ?? title

    const htmlUrl = await screen.getHtml()
    const imageUrl = await screen.getImage()

    if (!htmlUrl) {
      throw new Error(`No HTML download URL for screen ${screenId}`)
    }
    if (!imageUrl) {
      throw new Error(`No screenshot download URL for screen ${screenId}`)
    }

    const htmlPath = path.join(screenDir, 'code.html')
    const imagePath = path.join(screenDir, 'screen.png')

    console.log(`  Downloading HTML → ${path.relative(ROOT, htmlPath)}`)
    await downloadUrl(htmlUrl, htmlPath)

    console.log(`  Downloading image → ${path.relative(ROOT, imagePath)}`)
    await downloadUrl(imageUrl, imagePath)

    manifest.push({
      title: resolvedTitle,
      screenId,
      slug,
      htmlPath: path.relative(ROOT, htmlPath),
      imagePath: path.relative(ROOT, imagePath),
    })
  }

  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json')
  await writeFile(
    manifestPath,
    `${JSON.stringify({ projectId: PROJECT_ID, screens: manifest }, null, 2)}\n`,
  )

  console.log(`\nDone. Assets saved under ${path.relative(ROOT, OUTPUT_DIR)}/`)
}

main().catch((err) => {
  console.error(err.message ?? err)
  process.exit(1)
})

import { execSync as $ } from 'child_process'
import { icons } from './icons'
import { iconTheme } from '../utils/icons'

$('rm -rf dist && mkdir dist')
$('cp {package.json,LICENSE,*.md,src/assets/icon-theme.json} dist')
$('cp -r media dist')
$('mv dist/media/icons dist/i')
process.chdir('dist')

const { theme, definitions } = iconTheme(icons, true)

process.chdir('..')
$('rm dist/icon-theme.json.bk')
$('bun run build:ext')
$('cd dist && bunx --bun vsce package')

if (Bun.env.NODE_ENV !== 'production') {
  const map = (prop: keyof typeof theme, join = '') =>
    Object.keys(theme[prop])
      .filter((name) => !name.includes('/'))
      .join(`" ${join}"`)

  // Generate examples
  $('rm -rf examples && mkdir examples')
  $(`cd examples && mkdir "${map('folderNames')}"`)
  $(`cd examples && touch "${map('fileNames')}"`)
  $(`cd examples && touch ".${map('fileExtensions', '*.')}"`)

  const files: string[] = []
  const folders: string[] = []

  // Generate overview
  for (const iconPath of definitions) {
    if (/-x.svg$/.test(iconPath)) {
      continue
    }

    const isFolder = /-folder.svg$/g.test(iconPath)
    const name = iconPath.replace(/i\/|(-folder)?.svg$/g, '')

    isFolder ? folders.push(name) : files.push(name)
  }

  const iconHtml = (icon: string, extension = '') =>
    `<div><img src=../dist/i/${icon}${extension}.svg>${icon.replace(/-./, (m) =>
      m.slice(1).toUpperCase()
    )}</div>`

  const generateHtml = (icns: string[], extension = '') =>
    icns.map((icon) => iconHtml(icon, extension)).join('')

  Bun.write(
    'examples/overview.html',
    (await Bun.file('src/assets/overview.html').text()).replace(
      '{{icons}}',
      `${generateHtml(files)}${generateHtml(folders, '-folder')}`
    )
  )

  $('open examples/overview.html')
}

import { execSync as $ } from 'child_process'
import { iconTheme } from '../utils/icons'
import { icons } from './icons'
import { logos } from './logos'

$('rm -rf dist && mkdir -p dist/i')
$('cp {package.json,LICENSE,*.md,media/mizu.png} dist')
$('cp src/assets/icon-theme.json dist/icon-theme.json.bk')
$('cp media/*/* dist/i')

process.chdir('dist')
iconTheme(logos)
$('mv icon-theme.json *.bk')

const { theme, definitions } = iconTheme(icons)
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

  folders.splice(folders.indexOf('folder'), 1)

  const fmtName = (icon: string) =>
    icon.replace(/-./g, (m) => m.slice(1).toUpperCase())

  const iconHtml = (icon: string, extension = '') =>
    `<span><img src=../dist/i/${icon}${extension}.svg>${fmtName(icon)}</span>`

  const generateHtml = (icns: string[], extension = '') =>
    icns
      .sort()
      .map((icon) => iconHtml(icon, extension))
      .join('')

  Bun.write(
    'examples/overview.html',
    (await Bun.file('src/assets/overview.html').text())
      .replace('{{files}}', generateHtml(files))
      .replace('{{folders}}', generateHtml(folders, '-folder'))
  )

  $('open examples/overview.html')
  // $('echo overview: $(realpath examples/overview.html)') // TODO
}

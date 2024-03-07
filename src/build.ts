import { execSync as $ } from 'child_process'
import { icons } from './icons'
import { iconTheme } from './utils/icons'

$('rm -rf dist && mkdir dist')
$('cp {package.json,LICENSE,*.md,src/theme/icon-theme.json} dist')
$('cp -r media dist')
$('mv dist/media/icons dist/i')

const theme = await iconTheme(icons, 'dist')

$('rm dist/icon-theme.json.bk')
$(`bun run build:ext`)
$('cd dist && bunx --bun vsce package')

// Generate examples
const map = (prop: keyof typeof theme, join = '') =>
  Object.keys(theme[prop])
    .filter((name) => !name.includes('/'))
    .join(`" ${join}"`)

if (Bun.env.NODE_ENV !== 'production') {
  $('rm -rf examples && mkdir examples')
  $(`cd examples && mkdir "${map('folderNames')}"`)
  $(`cd examples && touch "${map('fileNames')}"`)
  $(`cd examples && touch ".${map('fileExtensions', '*.')}"`)
}

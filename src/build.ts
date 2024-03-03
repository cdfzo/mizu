import { execSync as $ } from 'child_process'
import { Generator } from './utils/generator'
import { icons } from './icons'
import pkg from '../package.json'

$('rm -rf dist && mkdir dist && mkdir dist/media')
$('cp {LICENSE,CHANGELOG.md} dist')
$('cp media/*.png dist/media')

const theme = new Generator().theme(icons).iconTheme

const map = (prop: keyof typeof theme, join = '" "') =>
  Object.keys(theme[prop])
    .filter((name) => !name.includes('/'))
    .join(join)

// Generate examples
if (Bun.env.NODE_ENV !== 'production') {
  pkg.name += '-dev'
  pkg.displayName += ' (dev)'
  pkg.contributes.iconThemes[0].id += '-dev'
  pkg.contributes.iconThemes[0].label += ' (dev)'

  $('rm -rf examples && mkdir examples')
  $(`cd examples && mkdir "${map('folderNames')}"`)
  $(`cd examples && touch "${map('fileNames')}"`)
  $(`cd examples && touch ".${map('fileExtensions', '" *."')}"`)
}

Bun.write('dist/package.json', JSON.stringify(pkg, null, 2))
Bun.write('dist/icon-theme.json', JSON.stringify(theme))

$('cd dist && bunx --bun vsce package')

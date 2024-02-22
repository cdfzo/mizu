import { Generator } from './utils/generator'
import { icons } from './icons'

const gen = new Generator()

gen.setTheme(icons)
gen.setDefault()

Bun.write('icon-theme.json', JSON.stringify(gen.theme))

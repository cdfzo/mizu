import { Icons, ThemeType, theme } from './theme'
import { alternations } from './alternations'

export class Generator {
  private definitions: string[] = []
  private iconName = ''
  private iconPath = ''
  private customColors: Record<string, string> = {}
  private defaults = {
    silver: 'silver',
    gray: 'gray',
    red: 'red',
    orange: '#ff8000',
    yellow: '#ff0',
    chartreuse: '#80ff00',
    green: '#0f0',
    springGreen: '#00ff80',
    cyan: '#0ff',
    azure: '#0080ff',
    blue: '#00f',
    purple: '#8000ff',
    magenta: '#f0f',
    rose: '#ff0080',
  }
  private values = new RegExp(Object.values(this.defaults).join('|'), 'g')

  iconTheme = theme

  constructor() {
    this.iconTheme.file = this.definition('file')
    this.iconTheme.folder = this.definition('folder')
    this.iconTheme.folderExpanded = this.definition('folder-open')

    this.colors({
      silver: '#e0e0e0',
      gray: '#a0a0a0',
      red: '#ff4040',
      orange: '#ffa040',
      yellow: '#ffff40',
      chartreuse: '#a0ff40',
      green: '#40ff40',
      springGreen: '#40ffa0',
      cyan: '#40ffff',
      azure: '#40a0ff',
      blue: '#6060ff',
      purple: '#a040ff',
      magenta: '#ff40ff',
      rose: '#ff40a0',
    })
  }

  /** Uses custom icon colors */
  private colors = (colors: Generator['defaults']) => {
    for (const [name, color] of Object.entries(colors)) {
      this.customColors[this.defaults[name as keyof Generator['defaults']]] =
        color
    }
  }

  /** Gets or sets icon definition */
  private definition = (icon: string) => {
    const index = this.definitions.indexOf(icon)

    return (index === -1 ? this.define(icon) : index).toString()
  }

  /** Adds icon definition */
  private define = (icon: string) => {
    const index = this.definitions.push(icon) - 1
    const iconPath = `i/${index}.svg`
    const file = Bun.file(`media/icons/${icon}.svg`)

    if (file.size === 0) {
      throw `missing: ${icon}`
    }

    this.iconTheme.iconDefinitions[index] = { iconPath }

    file.text().then((text) =>
      Bun.write(
        `dist/${iconPath}`,
        text.replace(this.values, (v) => this.customColors[v] ?? v)
      )
    )

    return index
  }

  /** Adds icon */
  private icon = (type: ThemeType, ext = '') => {
    const definition = this.definition(this.iconPath + ext)
    const names = this.iconTheme[type]

    for (const name of alternations(this.iconName)) {
      if (name in names) {
        throw `conflict: ${name} (${type})`
      }

      names[name] = definition
    }
  }

  /** Adds icon theme */
  theme = (icons: Icons) => {
    for (const [path, names] of Object.entries(icons)) {
      this.iconPath = path.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`)

      for (const name of names) {
        this.iconName = name.replace(/^(\/|\*\.)/, '')

        // Folders
        if (name.startsWith('/')) {
          this.icon('folderNames', '-folder')
          this.icon('folderNamesExpanded', '-folder-open')
        }
        // Files
        else {
          this.icon(name.startsWith('*.') ? 'fileExtensions' : 'fileNames')
        }
      }
    }

    return this
  }
}

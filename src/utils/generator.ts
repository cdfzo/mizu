import { Icons, ThemeType, theme } from './theme'

export class Generator {
  private definitions: string[] = []
  private icon = ''
  private path = ''

  theme = theme

  private definition = (icon: string) => {
    let index = this.definitions.indexOf(icon)

    // Add icon definition if it doesn't exist
    if (index === -1) {
      index = this.definitions.push(icon) - 1
      this.theme.iconDefinitions[index] = { iconPath: `icons/${icon}.svg` }

      if (Bun.file(`icons/${icon}.svg`).size === 0) {
        throw `missing: ${icon}`
      }
    }

    return index.toString()
  }

  private setIcon = (type: ThemeType, ext = '') => {
    if (this.icon in this.theme[type]) {
      throw `conflict: ${this.icon} (${type})`
    }

    this.theme[type][this.icon] = this.definition(this.path + ext)
  }

  setDefault = () => {
    this.theme.file = this.definition('file')
    this.theme.folder = this.definition('folder')
    this.theme.folderExpanded = this.definition('folder-open')
  }

  setTheme = (iconList: Icons) => {
    for (const [name, icons] of Object.entries(iconList)) {
      this.path = name.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`)

      for (const icon of icons) {
        this.icon = icon.replace(/^(\/|\*\.)/, '')

        // Folders
        if (icon.startsWith('/')) {
          this.setIcon('folderNames', '-folder')
          this.setIcon('folderNamesExpanded', '-folder-open')
        }
        // Files
        else {
          this.setIcon(icon.startsWith('*.') ? 'fileExtensions' : 'fileNames')
        }
      }
    }
  }
}

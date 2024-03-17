import { existsSync, copyFileSync, readFileSync, writeFileSync } from 'fs'

type StrObj = Record<string, string>
type Icons = Record<string, string[]>

type Theme = {
  file: string
  folder: string
  folderExpanded: string
  iconDefinitions: Record<string, { iconPath: string }>
  folderNames: StrObj
  folderNamesExpanded: StrObj
  fileExtensions: StrObj
  fileNames: StrObj
}

const prefixes: Record<string, string[][]> = {
  '/': [
    ['folderNames', 'folderNamesExpanded'],
    ['-folder', '-folder-x'],
  ],
  '*.': [['fileExtensions']],
  '': [['fileNames']],
}

const iconDefinitions = (
  theme: Theme,
  definitions: string[],
  type: keyof Theme,
  { nodes, icon, iconPath }: StrObj
) => {
  const nodeList = theme[type] as StrObj
  const index = definitions.indexOf(iconPath)
  const value = (index === -1 ? definitions.length : index).toString()

  if (index === -1) {
    if (!existsSync(iconPath)) {
      throw Error(`Icon "${icon}" doesn't exist`)
    }

    theme.iconDefinitions[definitions.push(iconPath) - 1] = { iconPath }
  }

  // TODO: alternations
  for (const node of [nodes]) {
    if (node in nodeList) {
      throw Error(`Remove ${type.slice(0, -1)} "${node}" from icon "${icon}"`)
    }

    nodeList[node] = value
  }
}

export const iconTheme = (icons: Icons) => {
  const file = 'icon-theme.json'
  const fileBackup = `${file}.bk`

  // Make backup file
  if (!existsSync(fileBackup)) {
    copyFileSync(file, fileBackup)
  }

  const theme = JSON.parse(readFileSync(fileBackup, 'utf8')) as Theme
  const definitions = Object.values(theme.iconDefinitions).map(
    (v) => v.iconPath
  )

  for (const [icon, rawNodes] of Object.entries(icons)) {
    const name = icon.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`)

    for (const raw of rawNodes) {
      const [, prefix = '', nodes] = raw.match(/^(\/|\*\.)?(.+)/) as string[]
      const [types, ext] = prefixes[prefix] as [(keyof Theme)[], string[]?]

      types.forEach((type, i) => {
        const iconPath = `i/${name}${ext?.[i] ?? ''}.svg`

        iconDefinitions(theme, definitions, type, { nodes, icon, iconPath })
      })
    }
  }

  writeFileSync(file, JSON.stringify(theme))
  return { theme, definitions }
}

export type { Icons }

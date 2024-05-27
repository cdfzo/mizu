import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'fs'

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
  { nodes, icon, iconPath }: StrObj,
  overwrite: boolean
) => {
  const nodeList = theme[type] as StrObj
  const index = definitions.indexOf(iconPath)
  const value = (index === -1 ? definitions.length : index).toString()

  if (index === -1) {
    if (!existsSync(iconPath)) {
      throw Error(
        `The icon '${iconPath.replace(/^.\/|.svg$/g, '')}' doesn't exist. \
See the readme for a list of available icons.`
      )
    }

    theme.iconDefinitions[definitions.push(iconPath) - 1] = { iconPath }
  }

  // TODO: alternations
  for (const node of [nodes]) {
    if (!overwrite && node in nodeList) {
      throw Error(
        `The icon '${icon}' overwrites ${type.slice(0, -1)} '${node}'. \
Remove it from the list or change the settings to allow overwriting.`
      )
    }

    nodeList[node] = value
  }
}

export const iconTheme = (icons: Icons, overwrite = false) => {
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

    if (rawNodes.constructor.name !== 'Array') {
      throw Error(
        `The icon '${icon}' is not an array. \
Please provide an array for this custom icon association.`
      )
    }

    for (const raw of rawNodes) {
      const [, prefix = '', nodes] = /^(?<pref>\/|\*\.)?(?<nodes>.+)/.exec(raw)!
      const [types, ext] = prefixes[prefix] as [(keyof Theme)[], string[]?]

      types.forEach((type, i) => {
        const iconPath = `i/${name}${ext?.[i] ?? ''}.svg`
        const iconInfo = { nodes, icon, iconPath }

        iconDefinitions(theme, definitions, type, iconInfo, overwrite)
      })
    }
  }

  writeFileSync(file, JSON.stringify(theme))
  return { theme, definitions }
}

export type { Icons }

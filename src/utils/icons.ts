import { copyFile, exists, readFile, writeFile } from 'fs/promises'

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

export const iconTheme = async (icons: Icons, dir = '.') => {
  const filePath = `${dir}/icon-theme.json`

  // Make backup file
  if (!(await exists(`${filePath}.bk`))) {
    await copyFile(filePath, `${filePath}.bk`)
  }

  const theme: Theme = JSON.parse(await readFile(`${filePath}.bk`, 'utf8'))
  const definitions = Object.values(theme.iconDefinitions).map(
    (v) => v.iconPath
  )

  for (const [icon, rawNodes] of Object.entries(icons)) {
    const name = icon.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`)

    for (const raw of rawNodes) {
      const [, prefix = '', nodes] = raw.match(/^(\/|\*\.)?(.+)/) as string[]
      const [types, extensions] = prefixes[prefix] as string[][]

      for (const i in types) {
        const type = types[i] as keyof typeof theme
        const nodeList = theme[type as keyof typeof theme] as StrObj
        const iconPath = `i/${name + (extensions?.[i] ?? '')}.svg`
        const index = definitions.indexOf(iconPath)
        const value = (index === -1 ? definitions.length : index).toString()

        if (index === -1) {
          if (!(await exists(`${dir}/${iconPath}`))) {
            throw `Icon "${icon}" doesn't exist`
          }

          theme.iconDefinitions[definitions.push(iconPath) - 1] = { iconPath }
        }

        // TODO: alternations
        for (const node of [nodes]) {
          if (node in nodeList) {
            throw `Remove ${type.slice(0, -1)} "${node}" from icon "${icon}"`
          }

          nodeList[node] = value
        }
      }
    }
  }

  await writeFile(filePath, JSON.stringify(theme))
  return theme
}

export type { Icons }

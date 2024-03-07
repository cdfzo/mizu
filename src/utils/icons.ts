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
  // TODO: node
  let file = Bun.file(`${filePath}.bk`)

  // Make backup file
  if (file.size === 0) {
    file = Bun.file(filePath)
    Bun.write(`${filePath}.bk`, file)
  }

  const theme: Theme = await file.json()

  for (const [icon, rawNodes] of Object.entries(icons)) {
    const name = icon.replace(/[A-Z]/g, (v) => `-${v.toLowerCase()}`)

    for (const raw of rawNodes) {
      const [, prefix = '', nodes] = raw.match(/^(\/|\*\.)?(.+)/) as string[]
      const [types, extensions] = prefixes[prefix] as string[][]

      types.forEach((type, i) => {
        const nodeList = theme[type as keyof typeof theme] as StrObj
        const iconPath = `i/${name + (extensions?.[i] ?? '')}.svg`
        // TODO: performance
        const entries = Object.entries(theme.iconDefinitions)
        const index = entries.find(([, def]) => def.iconPath === iconPath)?.[0]

        if (!index) {
          if (Bun.file(`${dir}/${iconPath}`).size === 0) {
            throw Error(`Icon "${icon}" doesn't exist`)
          }

          theme.iconDefinitions[entries.length] = { iconPath }
        }

        // TODO: alternations
        for (const node of [nodes]) {
          if (node in nodeList) {
            type = type.slice(0, -1)
            throw Error(`Remove ${type} "${node}" from icon "${icon}"`)
          }

          nodeList[node] = index ?? entries.length.toString()
        }
      })
    }
  }

  Bun.write(filePath, JSON.stringify(theme))
  return theme
}

export type { Icons }

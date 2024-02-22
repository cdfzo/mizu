type StrObj = Record<string, string>
type Icons = Record<string, string[]>

type ThemeType =
  | 'folderNames'
  | 'folderNamesExpanded'
  | 'fileExtensions'
  | 'fileNames'

type Theme = {
  file: string
  folder: string
  folderExpanded: string
  iconDefinitions: Record<string, { iconPath: string }>
  folderNames: StrObj
  folderNamesExpanded: StrObj
  fileExtensions: StrObj
  fileNames: StrObj
  hidesExplorerArrows: boolean
}

export const theme: Theme = {
  file: '2',
  folder: '0',
  folderExpanded: '1',
  iconDefinitions: {},
  folderNames: {},
  folderNamesExpanded: {},
  fileExtensions: {},
  fileNames: {},
  hidesExplorerArrows: false,
}

export type { Icons, Theme, ThemeType }

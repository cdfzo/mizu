import { type Icons, iconTheme } from './icons'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import type { WorkspaceConfiguration } from 'vscode'

const hasChanged = (config: string) => {
  const file = 'settings.json.bk'

  // Make backup file
  if (!existsSync(file)) {
    writeFileSync(file, config)
    return true
  }

  return config !== readFileSync(file, 'utf8')
}

export const update = (config: WorkspaceConfiguration) => {
  if (!hasChanged(JSON.stringify(config))) {
    return
  }

  const icons = config.customIconAssociations as Icons | undefined

  if (icons?.toString() === '[object Object]') {
    iconTheme(icons, true)
  }
}

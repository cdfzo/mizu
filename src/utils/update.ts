import * as vscode from 'vscode'
import { Icons, iconTheme } from './icons'
import { existsSync, readFileSync, writeFileSync } from 'fs'

const hasChanged = (config: string) => {
  const file = 'settings.json.bk'

  // Make backup file
  if (!existsSync(file)) {
    writeFileSync(file, config)
    return true
  }

  return config !== readFileSync(file, 'utf8')
}

export const update = (config: vscode.WorkspaceConfiguration) => {
  if (!hasChanged(JSON.stringify(config))) {
    return
  }

  const icons = config.icons as Icons | undefined

  if (icons?.toString() === '[object Object]') {
    iconTheme(icons)
  }
}

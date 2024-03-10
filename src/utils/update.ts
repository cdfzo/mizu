import * as vscode from 'vscode'
import { Icons, iconTheme } from './icons'
import { exists, readFile, writeFile } from 'fs/promises'

const hasChanged = async (config: string) => {
  const file = 'settings.json.bk'

  // Make backup file
  if (!(await exists(file))) {
    await writeFile(file, config)
    return true
  }

  return config !== (await readFile(file, 'utf8'))
}

export const update = async (config: vscode.WorkspaceConfiguration) => {
  if (!hasChanged(JSON.stringify(config))) {
    return
  }

  const icons: Icons | undefined = config.icons

  if (icons) {
    if (typeof icons !== 'object') {
      throw 'Icons must be an object'
    }

    iconTheme(icons)
  }
}

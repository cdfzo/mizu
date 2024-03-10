import * as vscode from 'vscode'
import { update } from './utils/update'

/** This function is called when the extension is activated. */
export const activate = async () => {
  const config = vscode.workspace.getConfiguration('mizu')

  try {
    process.chdir(vscode.extensions.getExtension('cdfzo.mizu')!.extensionPath)
    await update(config)
  } catch (error) {
    console.error(error)
    return vscode.window.showErrorMessage(error as string)
  }
}

/** This function is called when the extension is deactivated. */
export const deactivate = () => {}

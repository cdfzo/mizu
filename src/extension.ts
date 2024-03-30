import * as vscode from 'vscode'
import { update } from './utils/update'

/** This function is called when the extension is activated. */
export const activate = () => {
  const config = vscode.workspace.getConfiguration('mizu')
  const extension = vscode.extensions.getExtension('cdfzo.mizu')

  try {
    process.chdir(extension?.extensionPath ?? '')
    update(config)
  } catch (error) {
    console.log((error as Error).message)
    // TOOD: return vscode.window.showErrorMessage((error as Error).message)
  }
}

/** This function is called when the extension is deactivated. */
export const deactivate = () => {
  // ...
}

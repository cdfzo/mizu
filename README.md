# Mizu Icons

> Dive into a sea of clarity and focus as Mizu's crisp visuals guide you through
> your files and folders.\
> \- ChatGPT

## File Icons

![Files](https://codeberg.org/cdfzo/mizu/raw/branch/main/media/files.png)

## Folder Icons

![Folders](https://codeberg.org/cdfzo/mizu/raw/branch/main/media/folders.png)

## Custom Icon Associations

You can customize the icon associations in the VS Code `settings.json` file:

```json
"mizu.customIconAssociations": {
  "javascript": ["/scripts", "*.cjs", "*.mjs"],
  "bunLock": ["bun.lockb"]
}
```

Use the available icon names from the list above as key. The value should be an
array with the following formats for the different file types:

- Folder names: `/[name]`
- File extensions: `*.[name]`
- File names: `[name]`

Reload VS Code (`Developer: Reload Window` in the command palette) to see the
changes. If it doesn't work, wait a few seconds and try again.

## Credits

This extension is heavily inspired by PKief's [Material Icon Theme] and
Google's [Material Symbols].

If there is a logo anyone wishes taken down, please let me know.

[Material Icon Theme]: https://github.com/PKief/vscode-material-icon-theme
[Material Symbols]: https://github.com/google/material-design-icons

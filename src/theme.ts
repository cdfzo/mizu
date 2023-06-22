import { icons } from './icons'

type StrObj = { [name: string]: string }

interface Theme {
    file: string
    folder: string
    iconDefinitions: {
        [name: string]: { iconPath: string }
    }
    fileExtensions: StrObj
    folderNames: StrObj
    fileNames: StrObj
    hidesExplorerArrows: boolean
}

const theme: Theme = await Bun.file('./mizu-icon-theme.json').json(),
      rows = 9

let cmd =
`rm -r dist;
mkdir -p dist/i &&
rsync -a package.json dist &&
rsync -a README.md dist &&
rsync -a LICENSE dist/LICENSE.txt &&
rsync -a media dist &&`,

overview =
`<style>
img {
    display: flex;
    justify-content: center;
    width: 22px;
}
</style>
${'| Icon | Name '.repeat(rows)}|
${'| --- '.repeat(rows * 2)}|`

// Generate definitions
icons.forEach((icon, idx) => {
    const id = `${idx}`,
          name = icon.name

    theme.iconDefinitions[id] = {
        iconPath: `i/${idx}.svg`
    }
    icon.fileExtensions?.forEach(name => {
        theme.fileExtensions[name] = id
    })
    icon.fileNames?.forEach(name => {
        theme.fileNames[name] = id
    })
    icon.folderNames?.forEach(name => {
        theme.folderNames[name] = id
    })

    if (theme.file === name) {
        theme.file = id
    }
    if (theme.folder === name) {
        theme.folder = id
    }

    // Generate shell script and overview (icons.md)
    cmd += `rsync -a './icons/${name}.svg' ./dist/i/${idx}.svg &&`
    overview += (idx % rows === 0 ? '\n|' : ' ') +
        `<img src="icons/${name}.svg"> | ${name.replace(/.*-/, '')} |`
})

export {
    theme,
    cmd,
    overview
}

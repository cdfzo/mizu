import { Icon, fileIcons } from './file-icons'
import { folderIcons } from './folder-icons'

type StrObj = { [name: string]: string }

interface Theme {
    file: string
    folder: string
    folderExpanded: string
    iconDefinitions: {
        [name: string]: { iconPath: string }
    }
    fileExtensions: StrObj
    folderNames: StrObj
    folderNamesExpanded: StrObj
    fileNames: StrObj
    hidesExplorerArrows: boolean
}

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
    width: 30px;
    margin: 6px;
}
</style>`

const fileIconLen = fileIcons.length,
      theme: Theme = await Bun.file('./mizu-icon-theme.json').json(),

createDefs = (icon: Icon, idx: number, type: string) => {
    const id = `${idx}`,
          name = icon.name

    theme.iconDefinitions[id] = {
        iconPath: `i/${idx}.svg`
    }

    cmd += `rsync -a './icons/${type}s/${name}.svg' ./dist/i/${idx}.svg &&`
    overview += `<img src="../icons/${type}s/${name}.svg">`

    return [id, name]
}

console.log(`Generating ${fileIconLen + folderIcons.length} icons..`)

fileIcons.forEach((icon, idx) => {
    const [id, name] = createDefs(icon, idx, 'file')

    if (theme.file === name) {
        theme.file = id
    }

    icon.fileExtensions?.forEach(name => {
        theme.fileExtensions[name] = id
    })
    icon.fileNames?.forEach(name => {
        theme.fileNames[name] = id
    })
})

folderIcons.forEach((icon, idx) => {
    idx = idx + fileIconLen
    const [id, name] = createDefs(icon, idx, 'folder')

    if (theme.folder === name) {
        theme.folder = id
        theme.folderExpanded = id + 'x'
    }

    theme.iconDefinitions[id + 'x'] = {
        iconPath: `i/${idx}x.svg`
    }
    icon.folderNames?.forEach(name => {
        theme.folderNames[name] = id
        theme.folderNamesExpanded[name] = id + 'x'
    })
    cmd += `rsync -a './icons/folders/${name}-open.svg' ./dist/i/${idx}x.svg &&`
})

export {
    theme,
    cmd,
    overview
}

import { exec } from 'child_process'
import { theme, cmd, overview } from './theme'

exec(cmd +
    `echo '${JSON.stringify(theme)}' > dist/mizu-icon-theme.json &&
    echo '${overview}' > test/icons.md`, (err => {
    console.log(err)
}))

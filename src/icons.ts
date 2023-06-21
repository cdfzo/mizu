interface Icon {
    name: string
    fileExtensions?: string[]
    fileNames?: string[]
    folderNames?: string[]
}

const icons: Icon[] = [
// Files
{
    name: 'file'
}, {
    name: 'ada',
    fileExtensions: [
        'adb',
        'ads',
    ]
}, {
    name: 'adobe-aftereffects',
    fileExtensions: ['aep']
}, {
    name: 'adobe-audition',
    fileExtensions: ['sesx']
}, {
    name: 'adobe-illustrator',
    fileExtensions: ['ai']
}, {
    name: 'adobe-indesign',
    fileExtensions: ['indd']
}, {
    name: 'adobe-photoshop',
    fileExtensions: [
        'psb',
        'psd',
    ]
}, {
    name: 'adobe-premierepro',
    fileExtensions: ['prproj']
}, {
    name: 'adobe-xd',
    fileExtensions: ['xd']
}, {
    name: 'agda',
    fileExtensions: [
        'agda',
        'lagda',
    ]
}, {
    name: 'apache',
    fileNames: ['.htaccess']
}, {
    name: 'apk',
    fileExtensions: [
        'aab',
        'apk',
        'apkm',
        'apks',
        'xapk',
    ]
}, {
    name: 'apple-numbers',
    fileExtensions: ['numbers']
}, {
    name: 'apple-pages',
    fileExtensions: ['pages']
}, {
    name: 'aspnet',
    fileExtensions: [
        'asp',
        'aspx',
        'cshtml',
        'razor',
    ]
}, {
    name: 'astro',
    fileExtensions: ['astro']
}, {
    name: 'audio',
    fileExtensions: [
        '3ga',
        'aa3',
        'aac',
        'aacp',
        'aif',
        'aifc',
        'aiff',
        'amr',
        'ape',
        'at3',
        'at9',
        'atp',
        'au',
        'caf',
        'flac',
        'hma',
        'lbc',
        'm1a',
        'm2a',
        'm4a',
        'm4b',
        'mp+',
        'mp1',
        'mp2',
        'mp3',
        'mpa',
        'mpc',
        'mpp',
        'mt9',
        'ogg',
        'oma',
        'omg',
        'opus',
        'pcm',
        'qcp',
        'ra',
        'ram',
        'shn',
        'sil',
        'snd',
        'spx',
        'tta',
        'wav',
        'wave',
        'wma',
        'wv',
        'wvc',
    ]
}, {
    name: 'autohotkey',
    fileExtensions: ['ahk']
}, {
    name: 'autoit',
    fileExtensions: ['au3']
}, {
    name: 'batch',
    fileExtensions: [
        'bat',
        'btm',
        'cmd',
    ]
}, {
    name: 'bazel',
    fileExtensions: [
        'bzl',
        'bazel',
    ],
    fileNames: [
        '.bazelignore',
        '.bazelrc',
        '.bazelversion',
    ]
}, {
    name: 'blender',
    fileExtensions: ['blend']
}, {
    name: 'browserslist',
    fileNames: [
        '.browserslistrc',
        'browserslist',
    ]
}, {
    name: 'bun',
    fileNames: ['bun.lockb']
}, {
    name: 'c',
    fileExtensions: [
        'c',
        'h',
    ]
}, {
    name: 'carbon',
    fileExtensions: ['carbon']
}, {
    name: 'ceylon',
    fileExtensions: ['ceylon']
}, {
    name: 'changelog',
    fileNames: [
        'changelog.md',
        'version',
    ]
}, {
    name: 'clean',
    fileExtensions: [
        'abc',
        'dcl',
        'icl',
    ]
}, {
    name: 'clojure',
    fileExtensions: [
        'clj',
        'cljc',
        'cljs',
        'edn',
    ]
}, {
    name: 'codeofconduct',
    fileNames: ['code_of_conduct.md']
}, {
    name: 'coffeescript',
    fileExtensions: [
        'coffee',
        'litcoffee',
    ]
}, {
    name: 'config',
    fileExtensions: [
        'cnf',
        'conf',
        'ini',
        'properties',
    ],
    fileNames: ['.env']
}, {
    name: 'cpp',
    fileExtensions: [
        'c++',
        'cc',
        'cpp',
        'cxx',
        'h++',
        'hh',
        'hpp',
        'hxx',
    ]
}, {
    name: 'crystal',
    fileExtensions: ['cr']
}, {
    name: 'csharp',
    fileExtensions: [
        'cs',
        'csx',
    ]
}, {
    name: 'css',
    fileExtensions: ['css']
}, {
    name: 'css-map',
    fileExtensions: ['css.map']
}, {
    name: 'css-rtl',
    fileExtensions: [
        'rtl.css',
        'rtl.min.css',
    ]
}, {
    name: 'csv',
    fileExtensions: ['csv']
}, {
    name: 'cursor',
    fileExtensions: ['cur']
}, {
    name: 'cypress',
    fileExtensions: ['cy.js'],
    fileNames: ['cypress.json']
}, {
    name: 'd',
    fileExtensions: ['d']
}, {
    name: 'dart',
    fileExtensions: ['dart'],
    fileNames: [
        '.dartignore',
        'dart',
    ]
}, {
    name: 'dll',
    fileExtensions: [
        'dll',
        'drv',
        'ocx',
    ]
}, {
    name: 'docker',
    fileNames: [
        '.dockerignore',
        'dockerfile',
    ]
}, {
    name: 'drawio',
    fileExtensions: ['drawio']
}, {
    name: 'dylan',
    fileExtensions: [
        'dylan',
        'lid',
    ]
}, {
    name: 'editorconfig',
    fileNames: ['.editorconfig']
}, {
    name: 'eiffel',
    fileExtensions: ['e']
}, {
    name: 'elixir',
    fileExtensions: [
        'ex',
        'exs',
    ]
}, {
    name: 'elm',
    fileExtensions: ['elm']
}, {
    name: 'email',
    fileExtensions: [
        'eml',
        'emlx',
        'mbx',
        'msg',
    ]
}, {
    name: 'epub',
    fileExtensions: ['epub']
}, {
    name: 'erlang',
    fileExtensions: [
        'erl',
        'hrl',
    ]
}, {
    name: 'eslint',
    fileNames: [
        '.eslintignore',
        '.eslintrc.js',
        '.eslintrc.json',
        'eslint',
    ]
}, {
    name: 'exe',
    fileExtensions: ['exe']
}, {
    name: 'favicon',
    fileNames: [
        'favicon.ico',
        'favicon.png',
        'favicon.svg',
    ]
}, {
    name: 'firebase',
    fileNames: [
        '.firebaserc',
        'firebase.json',
    ]
}, {
    name: 'flstudio',
    fileExtensions: [
        'dmpatch',
        'fst',
    ]
}, {
    name: 'font',
    fileExtensions: [
        'dfont',
        'otf',
        'pfa',
        'pfb',
        't11',
        't42',
        'tte',
        'ttf',
        'ttf.bin',
        'ufo',
        'ufo2',
        'ufo3',
        'woff',
        'woff2',
    ]
}, {
    name: 'forth',
    fileExtensions: [
        '4th',
        'forth',
        'fth',
    ]
}, {
    name: 'fortran',
    fileExtensions: [
        'f',
        'f90',
        'for',
    ]
}, {
    name: 'fsharp',
    fileExtensions: [
        'fs',
        'fsi',
        'fsscript',
        'fsx',
    ]
}, {
    name: 'gatsby',
    fileNames: [
        'create-gatsby',
        'gatsby',
    ]
}, {
    name: 'gemfile',
    fileNames: [
        'gemfile',
        'gemfile.lock',
    ]
}, {
    name: 'git',
    fileNames: [
        '.gitattributes',
        '.gitignore',
        '.gitkeep',
        '.gitmessage',
        '.keep',
        '.mailmap',
    ]
}, {
    name: 'gitpod',
    fileNames: ['.gitpod.yml']
}, {
    name: 'gnu',
    fileNames: ['makefile']
}, {
    name: 'go',
    fileExtensions: ['go']
}, {
    name: 'gradle',
    fileExtensions: ['gradle']
}, {
    name: 'groovy',
    fileExtensions: [
        'groovy',
        'gsh',
        'gvy',
        'gy',
    ]
}, {
    name: 'gulp',
    fileNames: [
        'gulpfile.babel.js',
        'gulpfile.js',
        'gulpfile.ts',
    ]
}, {
    name: 'hack',
    fileExtensions: [
        'hack',
        'hck',
    ]
}, {
    name: 'harbour',
    fileExtensions: [
        'ch',
        'hb',
        'hbp',
        'prg',
    ]
}, {
    name: 'haskell',
    fileExtensions: [
        'hs',
        'lhs',
    ]
}, {
    name: 'haxe',
    fileExtensions: [
        'hx',
        'hxml',
    ]
}, {
    name: 'html',
    fileExtensions: [
        'htm',
        'html',
        'xhtml',
    ]
}, {
    name: 'husky',
    fileNames: [
        '.huskyrc',
        '.huskyrc.json',
    ]
}, {
    name: 'hy',
    fileExtensions: ['hy']
}, {
    name: 'icalendar',
    fileExtensions: [
        'ical',
        'icalendar',
        'ics',
        'ifb',
    ]
}, {
    name: 'image',
    fileExtensions: [
        'apng',
        'avci',
        'avcs',
        'avif',
        'avifs',
        'bmp',
        'bpg',
        'dib',
        'djv',
        'djvu',
        'exr',
        'flif',
        'gif',
        'hdp',
        'heic',
        'heics',
        'heif',
        'heifs',
        'ico',
        'j2c',
        'j2k',
        'jbg',
        'jbig',
        'jfi',
        'jfif',
        'jif',
        'jng',
        'jp2',
        'jpc',
        'jpe',
        'jpeg',
        'jpf',
        'jpg',
        'jpg2',
        'jpm',
        'jpx',
        'jxl',
        'jxr',
        'jxs',
        'mng',
        'pgf',
        'png',
        'qoi',
        'qtvr',
        'raw',
        'tif',
        'tiff',
        'wbmp',
        'wdp',
        'webp',
    ]
}, {
    name: 'iso',
    fileExtensions: ['iso']
}, {
    name: 'java',
    fileExtensions: [
        'class',
        'jar',
        'java',
        'jmod',
    ]
}, {
    name: 'javascript',
    fileExtensions: [
        'cjs',
        'js',
        'mjs',
    ]
}, {
    name: 'javascript-map',
    fileExtensions: [
        'js.map',
        'mjs.map',
    ]
}, {
    name: 'jquery',
    fileNames: [
        'jquery.js',
        'jquery.min.js',
    ]
}, {
    name: 'json',
    fileExtensions: [
        'json',
        'jsonc',
    ]
}, {
    name: 'julia',
    fileExtensions: ['jl']
}, {
    name: 'jupyter',
    fileExtensions: ['ipynb']
}, {
    name: 'key',
    fileExtensions: ['key']
}, {
    name: 'kotlin',
    fileExtensions: [
        'kt',
        'ktm',
        'kts',
    ]
}, {
    name: 'less',
    fileExtensions: ['less']
}, {
    name: 'license',
    fileNames: [
        'authors',
        'codeowners',
        'licence',
        'license',
        'license.txt',
        'patent_grant',
    ]
}, {
    name: 'livescript',
    fileExtensions: ['ls']
}, {
    name: 'lock',
    fileExtensions: [
        'enc',
        'lock',
    ]
}, {
    name: 'log',
    fileExtensions: ['log']
}, {
    name: 'lua',
    fileExtensions: ['lua']
}, {
    name: 'markdown',
    fileExtensions: [
        'markdown',
        'md',
    ]
}, {
    name: 'matlab',
    fileExtensions: [
        'fig',
        'm',
        'mat',
        'mex',
        'mlapp',
        'mlappinstall',
        'mlpkginstall',
        'mltbx',
        'mlx',
        'p',
    ]
}, {
    name: 'microsoft-access',
    fileExtensions: [
        'accda',
        'accdb',
        'accde',
        'accdr',
        'accdt',
        'adn',
        'laccdb',
        'maf',
        'mam',
        'maq',
        'mar',
        'mdw',
    ]
}, {
    name: 'microsoft-excel',
    fileExtensions: [
        'xla',
        'xlam',
        'xlb',
        'xlc',
        'xld',
        'xlk',
        'xll',
        'xlm',
        'xlsb',
        'xlsm',
        'xlsx',
        'xlt',
        'xltm',
        'xlv',
        'xlw',
    ]
}, {
    name: 'microsoft-onenote',
    fileExtensions: [
        'one',
        'onetoc2',
    ]
}, {
    name: 'microsoft-powerpoint',
    fileExtensions: [
        'potm',
        'potx',
        'ppam',
        'ppsm',
        'ppsx',
        'ppt',
        'pptm',
        'pptx',
    ]
}, {
    name: 'microsoft-visio',
    fileExtensions: [
        'vdw',
        'vsd',
        'vsdm',
        'vsdx',
        'vsl',
        'vss',
        'vssm',
        'vssx',
        'vst',
        'vstm',
        'vstx',
    ]
}, {
    name: 'microsoft-word',
    fileExtensions: [
        'doc',
        'docb',
        'docm',
        'docx',
        'dot',
        'dotm',
        'dotx',
        'wbk',
    ]
}, {
    name: 'mizu',
    fileExtensions: ['mizu']
}, {
    name: 'ml',
    fileExtensions: ['ml']
}, {
    name: 'music',
    fileExtensions: [
        'als',
        'mid',
        'ppsf',
        'vpr',
        'vsq',
        'vsqx',
    ]
}, {
    name: 'netlify',
    fileNames: ['netlify.toml']
}, {
    name: 'nim',
    fileExtensions: [
        'nim',
        'nimble',
        'nims',
    ]
}, {
    name: 'node',
    fileExtensions: ['node']
}, {
    name: 'npm',
    fileNames: [
        '.npmignore',
        '.npmrc',
    ]
}, {
    name: 'nvm',
    fileNames: ['.nvmrc']
}, {
    name: 'package',
    fileNames: ['package.json']
}, {
    name: 'partytown',
    fileNames: ['partytown']
}, {
    name: 'pdf',
    fileExtensions: ['pdf']
}, {
    name: 'perl',
    fileExtensions: [
        'cgi',
        'pl',
        'plx',
        'pm',
        'pod',
        't',
        'xs',
    ]
}, {
    name: 'php',
    fileExtensions: [
        'phar',
        'php',
        'phps',
        'pht',
        'phtml',
    ]
}, {
    name: 'plantuml',
    fileExtensions: [
        'plantuml',
        'pu',
        'puml',
    ]
}, {
    name: 'pnpm',
    fileNames: [
        'pnpm-lock.yaml',
        'pnpm-workspace.yaml',
    ]
}, {
    name: 'powershell',
    fileExtensions: [
        'cdxml',
        'ps1',
        'ps1xml',
        'psc1',
        'psd1',
        'psm1',
        'psrc',
        'pssc',
    ]
}, {
    name: 'prettier',
    fileNames: [
        '.prettierignore',
        '.prettierrc',
    ]
}, {
    name: 'processing',
    fileExtensions: ['pde']
}, {
    name: 'purescript',
    fileExtensions: ['purs']
}, {
    name: 'python',
    fileExtensions: [
        'py',
        'pyc',
        'pyd',
        'pyi',
        'pyo',
        'pyw',
        'pyz',
    ]
}, {
    name: 'r',
    fileExtensions: [
        'r',
        'rda',
        'rdata',
        'rds',
    ]
}, {
    name: 'racket',
    fileExtensions: ['rkt']
}, {
    name: 'rails',
    fileExtensions: [
        'html.erb',
        'text.erb',
    ],
    fileNames: ['rails']
}, {
    name: 'raku',
    fileExtensions: [
        'p6',
        'pm6',
        'pod6',
        'raku',
        'rakudoc',
        'rakumod',
        'rakutest',
        't6',
    ]
}, {
    name: 'react-js',
    fileExtensions: ['jsx']
}, {
    name: 'react-ts',
    fileExtensions: ['tsx']
}, {
    name: 'readme',
    fileNames: ['readme.md']
}, {
    name: 'reason',
    fileExtensions: [
        're',
        'rei',
    ]
}, {
    name: 'rebol',
    fileExtensions: ['reb']
}, {
    name: 'red',
    fileExtensions: [
        'red',
        'reds',
    ]
}, {
    name: 'rexx',
    fileExtensions: [
        'exec',
        'rex',
        'rexx',
    ]
}, {
    name: 'robots',
    fileNames: ['robots.txt']
}, {
    name: 'rspec',
    fileNames: ['.rspec']
}, {
    name: 'rubocop',
    fileNames: ['.rubocop.yml']
}, {
    name: 'ruby',
    fileExtensions: ['rb'],
    fileNames: [
        '.ruby-version',
        'rake',
        'rakefile',
    ]
}, {
    name: 'rust',
    fileExtensions: [
        'rlib',
        'rs',
    ]
}, {
    name: 'sass',
    fileExtensions: [
        'sass',
        'scss',
    ]
}, {
    name: 'scala',
    fileExtensions: [
        'sc',
        'scala',
    ]
}, {
    name: 'scratch',
    fileExtensions: [
        'sb2',
        'sb3',
        'scratch',
        'sprite',
        'sprite2',
        'sprite3',
    ]
}, {
    name: 'shell',
    fileExtensions: ['sh']
}, {
    name: 'smallbasic',
    fileExtensions: [
        'sb',
        'smallbasic',
    ]
}, {
    name: 'sql',
    fileExtensions: ['sql']
}, {
    name: 'sqlite',
    fileExtensions: [
        'db',
        'db3',
        's3db',
        'sl3',
        'sqlite',
        'sqlite3',
    ]
}, {
    name: 'stylelint',
    fileNames: [
        '.stylelintrc',
        '.stylelintrc.json',
    ]
}, {
    name: 'svg',
    fileExtensions: ['svg']
}, {
    name: 'swift',
    fileExtensions: ['swift']
}, {
    name: 'tcl',
    fileExtensions: [
        'tbc',
        'tcl',
    ]
}, {
    name: 'text',
    fileExtensions: ['txt']
}, {
    name: 'toml',
    fileExtensions: ['toml']
}, {
    name: 'torrent',
    fileExtensions: ['torrent']
}, {
    name: 'travis',
    fileNames: ['.travis.yml']
}, {
    name: 'typescript',
    fileExtensions: [
        'cts',
        'mts',
        'ts',
    ],
    fileNames: ['tsc']
}, {
    name: 'typescript-def',
    fileExtensions: ['d.ts']
}, {
    name: 'typescript-map',
    fileExtensions: ['ts.map']
}, {
    name: 'typescript-spec',
    fileExtensions: ['spec.ts']
}, {
    name: 'url',
    fileExtensions: ['url']
}, {
    name: 'vala',
    fileExtensions: [
        'vala',
        'vapi',
    ]
}, {
    name: 'video',
    fileExtensions: [
        '3g2',
        '3gp',
        'av1',
        'avc1',
        'avchd',
        'avi',
        'bik',
        'bk2',
        'f4v',
        'flv',
        'hevc',
        'ivf',
        'm1v',
        'm4p',
        'm4r',
        'm4v',
        'mj2',
        'mjp2',
        'mkv',
        'mov',
        'mp4',
        'mpeg',
        'mpg',
        'mpv',
        'ogv',
        'smk',
        'swf',
        'webm',
        'wmv',
    ]
}, {
    name: 'visualbasic',
    fileExtensions: [
        'vb',
        'vbhtml',
    ]
}, {
    name: 'visualstudio',
    fileNames: ['.vsixmanifest']
}, {
    name: 'vmware',
    fileExtensions: [
        'nvram',
        'scoreboard',
        'vmdk',
        'vmsd',
        'vmx',
    ]
}, {
    name: 'vscode',
    fileNames: [
        '.vscode/launch.json',
        '.vscode/settings.json',
        '.vscode/tasks.json',
        '.vscodeignore',
    ]
}, {
    name: 'vue',
    fileExtensions: ['vue']
}, {
    name: 'watchman',
    fileNames: ['.watchmanconfig']
}, {
    name: 'webmanifest',
    fileExtensions: ['webmanifest']
}, {
    name: 'wolfram',
    fileExtensions: [
        'nb',
        'wl',
    ]
}, {
    name: 'xml',
    fileExtensions: [
        'classpath',
        'project',
        'xml',
    ]
}, {
    name: 'yaml',
    fileExtensions: [
        'yaml',
        'yml',
    ]
}, {
    name: 'yarn',
    fileNames: [
        '.yarnrc',
        'yarn.lock',
    ]
}, {
    name: 'zenodo',
    fileNames: ['.zenodo.json']
}, {
    name: 'zig',
    fileExtensions: [
        'zig',
        'zir',
    ]
}, {
    name: 'zip',
    fileExtensions: [
        '7z',
        'a',
        'ace',
        'ar',
        'arc',
        'br',
        'bz2',
        'cpio',
        'gz',
        'lbr',
        'lz',
        'lz4',
        'lzma',
        'lzo',
        'rz',
        's7z',
        'sbx',
        'sfark',
        'shar',
        'sz',
        'tar',
        'tbz2',
        'tlz',
        'txz',
        'xz',
        'z',
        'zip',
        'zipx',
        'zst',
    ]
},
// Folders
{
    name: 'folder-white',
    folderNames: [
        '.bin',
        '.cache',
        '.github',
        '.trash',
        'bin',
        'binaries',
        'boot',
        'cache',
        'dcim',
        'issue_template',
        'mnt',
        'next',
        'storage',
        'workflows',
    ]
}, {
    name: 'folder-gray',
    folderNames: [
        '#private',
        '.circleci',
        '.config',
        '.local',
        '.private',
        '_private',
        '_temp',
        'build',
        'builds',
        'bus',
        'client',
        'conf',
        'config',
        'configuration',
        'controller',
        'controllers',
        'data',
        'dist',
        'distributable',
        'driver',
        'http',
        'in',
        'internal',
        'jobs',
        'json',
        'local',
        'log',
        'logs',
        'model',
        'models',
        'out',
        'priv',
        'private',
        'prod',
        'secure',
        'server',
        'settings',
        'share',
        'sys',
        'temp',
        'temporary',
        'tmp',
        'trash',
        'user',
        'usr',
        'var',
        'vendor',
        'vendors',
        'view',
        'views',
    ]
}, {
    name: 'folder-red',
    folderNames: [
        '.git',
        '.test',
        '.testing',
        '.tests',
        'automated_tests',
        'customer_testing',
        'debug',
        'dev',
        'development',
        'devtools',
        'error',
        'errors',
        'example',
        'examples',
        'forbidden_from_release_tests',
        'git',
        'info',
        'integration_tests',
        'manual_tests',
        'missing_dependency_tests',
        'rails',
        'test',
        'test_assets',
        'testing',
        'tests',
        'tracing_tests',
    ]
}, {
    name: 'folder-orange'
}, {
    name: 'folder-yellow',
    folderNames: [
        '.firebase',
        'database',
        'db',
        'firebase',
        'i',
        'icon',
        'icons',
        'javascript',
        'js',
        'script',
        'scripts',
        'sql',
    ]
}, {
    name: 'folder-chartreuse',
    folderNames: [
        'image',
        'images',
        'img',
        'media',
        'png',
    ]
}, {
    name: 'folder-green',
    folderNames: [
        'modules',
        'node',
        'node-cjs',
        'node_modules',
        'node_modules.nosync',
    ]
}, {
    name: 'folder-spring',
    folderNames: [
        'android',
        'apk',
        'cypress',
        'gradle',
        'vid',
        'video',
        'videos',
        'vids',
        'vue',
        'vue-compat',
        'wrapper',
    ]
}, {
    name: 'folder-cyan',
    folderNames: [
        'dom',
        'go',
        'golang',
        'jsx',
        'react',
    ]
}, {
    name: 'folder-azure',
    folderNames: [
        '.docker',
        '.vscode',
        '.yarn',
        'docker',
        'docs',
        'documentation',
        'global',
        'globalization',
        'lang',
        'language',
        'languages',
        'locale',
        'locales',
        'md',
        'onedrive',
        'system32',
        'ts',
        'tsconfigs',
        'tsx',
        'win',
        'windows',
        'x64',
        'x86',
    ]
}, {
    name: 'folder-blue',
    folderNames: [
        'api',
        'app',
        'apps',
        'asset',
        'assets',
        'audio',
        'bootstrap',
        'bundle',
        'chunks',
        'components',
        'css',
        'elements',
        'elems',
        'event',
        'events',
        'exception',
        'files',
        'fragment',
        'functions',
        'helpers',
        'import',
        'imports',
        'include',
        'includes',
        'layouts',
        'lib',
        'libraries',
        'music',
        'packages',
        'pages',
        'parser',
        'php',
        'plugins',
        'resources',
        'routes',
        'routing',
        'snippets',
        'sound',
        'sounds',
        'source',
        'src',
        'ssr',
        'static',
        'style',
        'styles',
        'stylesheets',
        'tools',
        'types',
        'util',
        'utilities',
        'utils',
    ]
}, {
    name: 'folder-purple',
    folderNames: [
        'eslint',
        'public',
        'web',
        'www',
        'wwwroot',
    ]
}, {
    name: 'folder-rose',
    folderNames: [
        '.idea',
    ]
},
]

export {
    Icon,
    icons
}

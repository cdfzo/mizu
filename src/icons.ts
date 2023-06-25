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
        'ada',
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
    name: 'adobe-premiere',
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
    name: 'android',
    fileExtensions: [
        'aab',
        'apk',
        'apkm',
        'apks',
        'dex',
        'smali',
        'xapk',
    ],
    fileNames: ['androidmanifest.xml']
}, {
    name: 'apache',
    fileNames: ['.htaccess']
}, {
    name: 'apple-numbers',
    fileExtensions: ['numbers']
}, {
    name: 'apple-pages',
    fileExtensions: ['pages']
}, {
    name: 'arduino',
    fileExtensions: ['ino']
}, {
    name: 'aspnet',
    fileExtensions: [
        'asp',
        'aspx',
        'cshtml',
        'razor',
        'vbhtml',
    ]
}, {
    name: 'astro',
    fileExtensions: ['astro']
}, {
    name: 'astro-config',
    fileNames: [
        'astro.config.cjs',
        'astro.config.cts',
        'astro.config.js',
        'astro.config.mjs',
        'astro.config.mts',
        'astro.config.ts',
    ]
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
        'h', // TODO: mv h
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
        'changelog',
        'changelog.md',
        'changelog.rst',
        'changelog.txt',
        'changes',
        'changes.md',
        'changes.rst',
        'changes.txt',
        'version',
        'version.md',
        'version.rst',
        'version.txt',
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
    name: 'conduct',
    fileNames: [
        'code_of_conduct',
        'code_of_conduct.md',
        'code_of_conduct.rst',
        'code_of_conduct.txt',
    ]
}, {
    name: 'coffeescript',
    fileExtensions: [
        'coffee',
        'litcoffee',
    ]
}, {
    name: 'config',
    fileExtensions: [
        'cfg',
        'cnf',
        'conf',
        'config',
        'env',
        'ini',
        'options',
        'prefs',
        'properties',
        'props',
        'settings',
    ],
    fileNames: [
        '.env.defaults',
        '.env.dev',
        '.env.dist',
        '.env.example',
        '.env.prod',
        '.env.sample',
        '.env.template',
        '.env.test',
      ]
}, {
    name: 'cpp',
    fileExtensions: [
        'c++',
        'cc',
        'cp',
        'cpp',
        'cxx',
        'h++', // TODO: mv hpp
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
    name: 'cursor',
    fileExtensions: ['cur']
}, {
    name: 'cypress',
    fileNames: [
        'cypress.config.cjs',
        'cypress.config.js',
        'cypress.config.mjs',
        'cypress.config.ts',
        'cypress.env.json',
        'cypress.json',
    ]
}, {
    name: 'd',
    fileExtensions: ['d']
}, {
    name: 'dart',
    fileExtensions: ['dart'],
    fileNames: [
        '.dartignore',
        '.pubignore',
        'dart',
    ]
}, {
    name: 'deno',
    fileNames: [
        'deno.json',
        'deno.jsonc',
        'deno.lock',
    ]
}, {
    name: 'dll',
    fileExtensions: [
        'dlc',
        'dll',
        'drv',
        'ocx',
    ]
}, {
    name: 'docker',
    fileNames: [
        '.dockerignore',
        'compose.yaml',
        'compose.yml',
        'docker-compose.yaml',
        'docker-compose.yml',
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
    ],
    fileNames: ['.mailmap']
}, {
    name: 'ember',
    fileNames: [
        '.ember-cli',
        '.ember-cli.js',
        'ember-cli-builds.js',
    ],
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
        '.eslintcache',
        '.eslintignore',
        '.eslintrc',
        '.eslintrc.cjs',
        '.eslintrc.js',
        '.eslintrc.json',
        '.eslintrc.yaml',
        '.eslintrc.yml',
        'eslint',
        'eslint.config.js',
        'eslint.config.mjs',
    ]
}, {
    name: 'exe',
    fileExtensions: [
        'exe',
        'msi',
    ]
}, {
    name: 'favicon',
    fileNames: [
        'favicon.ico',
        'favicon.png',
        'favicon.svg',
        'favicon.webp',
    ]
}, {
    name: 'figma',
    fileExtensions: [
        'fig',
        'jam',
    ]
}, {
    name: 'firebase',
    fileNames: [
        '.firebaserc',
        'firebase.json',
        'firestore.indexes.json',
        'firestore.rules',
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
        'eot',
        'fnt',
        'odttf',
        'otf',
        'pfa',
        'pfb',
        't11',
        't42',
        'ttc',
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
        'f03',
        'f77',
        'f90',
        'f95',
        'for',
    ]
}, {
    name: 'fsharp',
    fileExtensions: [
        'fs',
        'fsi',
        'fsproj',
        'fsscript',
        'fsx',
    ]
}, {
    name: 'gatsby',
    fileNames: [
        'gatsby-browser.js',
        'gatsby-browser.tsx',
        'gatsby-config.js',
        'gatsby-config.mjs',
        'gatsby-config.ts',
        'gatsby-node.js',
        'gatsby-node.mjs',
        'gatsby-node.ts',
        'gatsby-ssr.js',
        'gatsby-ssr.tsx',
    ]
}, {
    name: 'gemfile',
    fileNames: [
        'gemfile',
        'gemfile.lock',
    ]
}, {
    name: 'git',
    fileExtensions: ['patch'],
    fileNames: [
        '.git-blame-ignore',
        '.git-blame-ignore-revs',
        '.gitattributes',
        '.gitconfig',
        '.gitignore',
        '.gitinclude',
        '.gitkeep',
        '.gitmessage',
        '.gitmodules',
        '.gitpreserve',
        '.keep',
    ]
}, {
    name: 'gitpod',
    fileNames: ['.gitpod.yml']
}, {
    name: 'go',
    fileExtensions: ['go']
}, {
    name: 'godot',
    fileExtensions: ['gd']
}, {
    name: 'gradle',
    fileExtensions: ['gradle'],
    fileNames: [
        'gradle',
        'gradle-wrapper.properties',
        'gradle.properties',
        'gradlew',
    ]
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
        'gulpfile.cjs',
        'gulpfile.cts',
        'gulpfile.js',
        'gulpfile.mjs',
        'gulpfile.mts',
        'gulpfile.ts',
    ]
}, {
    name: 'hack',
    fileExtensions: [
        'hack',
        'hck',
    ]
}, {
    name: 'hack-config',
    fileNames: ['.hhconfig']
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
        '.huskyrc.js',
        '.huskyrc.json',
        '.huskyrc.yaml',
        '.huskyrc.yml',
        'husky.config.js',
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
        'afphoto',
        'apng',
        'apng',
        'avci',
        'avci',
        'avcs',
        'avcs',
        'avif',
        'avif',
        'avifs',
        'avifs',
        'bmp',
        'bmp',
        'bpg',
        'bpg',
        'dib',
        'dib',
        'djv',
        'djv',
        'djvu',
        'djvu',
        'exr',
        'exr',
        'flif',
        'flif',
        'gif',
        'gif',
        'hdp',
        'hdp',
        'heic',
        'heic',
        'heics',
        'heics',
        'heif',
        'heif',
        'heifs',
        'heifs',
        'ico',
        'ico',
        'j2c',
        'j2c',
        'j2k',
        'j2k',
        'jb2',
        'jb2',
        'jbg',
        'jbg',
        'jbig',
        'jbig',
        'jbig2',
        'jbig2',
        'jfi',
        'jfi',
        'jfif',
        'jfif',
        'jif',
        'jif',
        'jng',
        'jng',
        'jp2',
        'jp2',
        'jpc',
        'jpc',
        'jpe',
        'jpe',
        'jpeg',
        'jpeg',
        'jpf',
        'jpf',
        'jpg',
        'jpg',
        'jpg2',
        'jpg2',
        'jpm',
        'jpm',
        'jpx',
        'jpx',
        'jxl',
        'jxl',
        'jxr',
        'jxr',
        'jxs',
        'jxs',
        'mng',
        'mng',
        'pgf',
        'pgf',
        'png',
        'png',
        'qoi',
        'qoi',
        'qtvr',
        'qtvr',
        'raw',
        'raw',
        'tga',
        'tga',
        'tif',
        'tif',
        'tiff',
        'tiff',
        'wbmp',
        'wbmp',
        'wdp',
        'wdp',
        'webp',
        'webp',
        'xcf',
        'xcf',
    ]
}, {
    name: 'iso',
    fileExtensions: ['iso']
}, {
    name: 'java',
    fileExtensions: [
        'class',
        'jar', // TODO: mv jar
        'java',
        'jmod',
        'jsp',
    ]
}, {
    name: 'javascript',
    fileExtensions: [
        'cjs',
        'js',
        'mjs',
    ]
}, {
    name: 'javascript-config',
    fileNames: ['jsconfig.json']
}, {
    name: 'javascript-map',
    fileExtensions: [
        'cjs.map',
        'js.map',
        'mjs.map',
    ]
}, {
    name: 'javascript-test',
    fileExtensions: [
        'cy.js',
        'e2e-spec.cjs',
        'e2e-spec.js',
        'e2e-spec.mjs',
        'js.snap',
        'spec.cjs',
        'spec.js',
        'spec.mjs',
        'test.cjs',
        'test.js',
        'test.mjs',
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
        'json5',
        'jsonc',
        'jsonl',
        'ndjson',
    ]
}, {
    name: 'json-other',
    fileExtensions: [
        'cson',
        'ron',
    ]
}, {
    name: 'julia',
    fileExtensions: ['jl']
}, {
    name: 'jupyter',
    fileExtensions: ['ipynb']
}, {
    name: 'key',
    fileExtensions: [
        'asc',
        'gpg',
        'key',
        'pem',
        'pub',
    ],
    fileNames: ['.htpasswd']
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
        'copyright',
        'copyright.txt',
        'licence',
        'license',
        'license.md',
        'license.rst',
        'license.txt',
        'patent_grant',
    ]
}, {
    name: 'lighthouse',
    fileNames: [
        '.lighthouserc.js',
        '.lighthouserc.json',
        '.lighthouserc.yaml',
        '.lighthouserc.yml',
        'lighthouserc.js',
        'lighthouserc.json',
        'lighthouserc.yaml',
        'lighthouserc.yml',
    ]
}, {
    name: 'livescript',
    fileExtensions: ['ls']
}, {
    name: 'lock',
    fileExtensions: [
        'enc',
        'lock',
    ],
    fileNames: [
        'security',
        'security.md',
        'security.txt',
    ]
}, {
    name: 'log',
    fileExtensions: ['log']
}, {
    name: 'lua',
    fileExtensions: ['lua'],
    fileNames: ['.luacheckrc']
}, {
    name: 'makefile',
    fileExtensions: ['mk'],
    fileNames: [
        'gnumakefile',
        'kbuild',
        'makefile',
    ]
}, {
    name: 'markdown',
    fileExtensions: [
        'markdown',
        'md',
        'rmd',
        'rst',
    ]
}, {
    name: 'markdown-mdx',
    fileExtensions: ['mdx']
}, {
    name: 'mathematica',
    fileExtensions: ['nb']
}, {
    name: 'matlab',
    fileExtensions: [
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
        'odp',
        'potm',
        'potx',
        'ppa',
        'ppam',
        'pps',
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
    name: 'minecraft',
    fileExtensions: [
        'mca',
        'mcaddon',
        'mcfunction',
        'mcgame',
        'mclevel',
        'mcmeta',
        'mcpack',
        'mcproject',
        'mcr',
        'mcstructure',
        'mctemplate',
        'mcworld',
        'mine',
        'mus',
    ],
    fileNames: [
        '.mcattributes',
        '.mcdefinitions',
        '.mcignore'
    ],
}, {
    name: 'mizu',
    fileExtensions: ['mizu']
}, {
    name: 'mojo',
    fileExtensions: [
        'mojo',
        '🔥',
    ]
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
    fileNames: [
        'netlify.json',
        'netlify.toml',
        'netlify.yaml',
        'netlify.yml',
    ]
}, {
    name: 'next',
    fileNames: [
        'next.config.js',
        'next.config.mjs',
        'next.config.mts',
        'next.config.ts',
    ]
}, {
    name: 'nim',
    fileExtensions: [
        'nim',
        'nimble',
        'nims',
    ]
}, {
    name: 'node',
    fileExtensions: ['node'],
    fileNames: [
        '.esmrc',
        '.node-version',
    ]
}, {
    name: 'npm',
    fileNames: [
        '.npmignore',
        '.npmrc',
        'package-lock.json',
    ]
}, {
    name: 'nuxt',
    fileNames: ['.nuxtignore']
}, {
    name: 'nuxt-config',
    fileNames: [
        'nuxt.config.js',
        'nuxt.config.ts',
    ]
}, {
    name: 'nvm',
    fileNames: ['.nvmrc']
}, {
    name: 'ocaml',
    fileExtensions: [
        'ml',
        'mli',
    ]
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
    name: 'playwright',
    fileNames: [
        'playwright-ct.config.js',
        'playwright-ct.config.mjs',
        'playwright-ct.config.ts',
        'playwright.config.js',
        'playwright.config.mjs',
        'playwright.config.ts',
    ]
}, {
    name: 'pnpm',
    fileNames: [
        '.pnpmfile.cjs',
        'pnpm-lock.yaml',
        'pnpm-workspace.yaml',
    ]
}, {
    name: 'post',
    fileExtensions: [
        'pcss',
        'sss',
    ]
}, {
    name: 'post-config',
    fileNames: [
        '.postcssrc',
        '.postcssrc.cjs',
        '.postcssrc.cts',
        '.postcssrc.js',
        '.postcssrc.json',
        '.postcssrc.ts',
        '.postcssrc.yaml',
        '.postcssrc.yml',
        'postcss.config.cjs',
        'postcss.config.cts',
        'postcss.config.js',
        'postcss.config.ts',
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
        '.prettierrc.cjs',
        '.prettierrc.js',
        '.prettierrc.json',
        '.prettierrc.toml',
        '.prettierrc.yaml',
        '.prettierrc.yml',
        'prettier.config.cjs',
        'prettier.config.js',
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
        'whl',
    ]
}, {
    name: 'r',
    fileExtensions: [
        'r',
        'rda',
        'rdata',
        'rds',
    ],
    fileNames: ['.rhistory']
}, {
    name: 'racket',
    fileExtensions: ['rkt']
}, {
    name: 'rails',
    fileExtensions: ['erb'],
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
    name: 'reactjs',
    fileExtensions: ['jsx']
}, {
    name: 'reactjs-test',
    fileExtensions: [
        'cy.jsx',
        'spec-d.jsx',
        'spec.jsx',
        'test-d.jsx',
        'test.jsx',
        'jsx.snap',
    ]
}, {
    name: 'reactts',
    fileExtensions: ['tsx']
}, {
    name: 'reactts-test',
    fileExtensions: [
        'cy.tsx',
        'spec-d.tsx',
        'spec.tsx',
        'test-d.tsx',
        'test.tsx',
        'tsx.snap',
    ]
}, {
    name: 'readme',
    fileNames: [
        'readme',
        'readme.md',
        'readme.rst',
        'readme.txt',
    ]
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
    name: 'remix',
    fileNames: [
        'remix.config.js',
        'remix.config.ts'
    ],
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
    fileNames: [
        '.rubocop.yml',
        '.rubocop_todo.yml',
    ]
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
    fileExtensions: [
        'awk',
        'ksh',
        'sh',
    ]
}, {
    name: 'sketch',
    fileExtensions: ['sketch']
}, {
    name: 'smallbasic',
    fileExtensions: [
        'sb',
        'smallbasic',
    ]
}, {
    name: 'spreadsheet',
    fileExtensions: [
        'csv',
        'ods',
        'psv',
        'tsv',
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
        '.stylelintcache',
        '.stylelintignore',
        '.stylelintrc.cjs',
        '.stylelintrc.js',
        '.stylelintrc.json',
        '.stylelintrc.yaml',
        '.stylelintrc.yml',
        'stylelint.config.cjs',
        'stylelint.config.js',
    ]
}, {
    name: 'svelte',
    fileExtensions: ['svelte']
}, {
    name: 'svelte-config',
    fileNames: [
        'svelte.config.cjs',
        'svelte.config.js',
    ]
}, {
    name: 'svg',
    fileExtensions: [
        'svg',
        'svgz',
    ]
}, {
    name: 'swift',
    fileExtensions: ['swift']
}, {
    name: 'tailwind',
    fileNames: [
        'tailwind.config.cjs',
        'tailwind.config.cts',
        'tailwind.config.js',
        'tailwind.config.ts',
        'tailwind.js',
        'tailwind.ts',
    ]
}, {
    name: 'tauri',
    fileNames: [
        'tauri.conf.json',
        'tauri.conf.json5',
        'tauri.config.json',
        'tauri.linux.conf.json',
        'tauri.macos.conf.json',
        'tauri.toml',
        'tauri.windows.conf.json',
    ]
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
    name: 'typescript-config',
    fileNames: ['tsconfig.json']
}, {
    name: 'typescript-def',
    fileExtensions: [
        'd.cts',
        'd.mts',
        'd.ts',
    ]
}, {
    name: 'typescript-map',
    fileExtensions: ['ts.map']
}, {
    name: 'typescript-test',
    fileExtensions: [
        'cy.ts',
        'e2e-spec.cts',
        'e2e-spec.mts',
        'e2e-spec.ts',
        'spec-d.ts',
        'spec.cts',
        'spec.mts',
        'spec.ts',
        'test-d.ts',
        'test.cts',
        'test.mts',
        'test.ts',
        'ts.snap',
    ]
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
        'gifv',
        'hevc',
        'ivf',
        'm1v',
        'm2v',
        'm4p',
        'm4r',
        'm4v',
        'mj2',
        'mjp2',
        'mkv',
        'mov',
        'mp4',
        'mpe',
        'mpeg',
        'mpg',
        'mpv',
        'ogv',
        'qt',
        'rm',
        'rmvb',
        'smk',
        'swf',
        'vob',
        'webm',
        'wmv',
        'yuv',
    ]
}, {
    name: 'visualbasic',
    fileExtensions: [
        'vb',
        'vbs',
    ]
}, {
    name: 'vim',
    fileExtensions: ['vim'],
    fileNames: [
        '.exrc',
        '.gvimrc',
        '.viminfo',
        '.vimrc',
    ]
}, {
    name: 'visualstudio',
    fileExtensions: [
        'csproj',
        'filters',
        'ruleset',
        'sln',
        'suo',
        'vcxitems',
        'vcxproj',
        'vsix',
        'vsixmanifest',
    ]
}, {
    name: 'vite',
    fileNames: [
        'vite.config.cjs',
        'vite.config.cts',
        'vite.config.js',
        'vite.config.mjs',
        'vite.config.mts',
        'vite.config.ts',
    ]
}, {
    name: 'vitest',
    fileNames: [
        'vitest.config.cjs',
        'vitest.config.cts',
        'vitest.config.js',
        'vitest.config.mjs',
        'vitest.config.mts',
        'vitest.config.ts',
    ]
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
    name: 'vue-config',
    fileNames: [
        'vetur.config.js',
        'vetur.config.ts',
        'volar.config.js',
        'vue.config.js',
        'vue.config.ts',
    ]
}, {
    name: 'watchman',
    fileNames: ['.watchmanconfig']
}, {
    name: 'webmanifest',
    fileExtensions: ['webmanifest']
}, {
    name: 'windi',
    fileExtensions: ['windi'],
    fileNames: [
        'windi.config.js',
        'windi.config.json',
        'windi.config.ts',
    ]
}, {
    name: 'wolfram',
    fileExtensions: ['wl']
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
        '.yarn-integrity',
        '.yarnclean',
        '.yarnrc',
        '.yarnrc.yaml',
        '.yarnrc.yml',
        'yarn-error.log',
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
        'bzip2',
        'cpio',
        'gz',
        'gzip',
        'lbr',
        'lz',
        'lz4',
        'lzma',
        'lzo',
        'rar',
        'rz',
        's7z',
        'sbx',
        'sfark',
        'shar',
        'sz',
        'tar',
        'tbz2',
        'tgz',
        'tlz',
        'txz',
        'tz',
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

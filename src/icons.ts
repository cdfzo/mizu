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
    name: '3d',
    fileExtensions: [
        '3d',
        'ac',
        'blend',
        'fbx',
        'kv6',
        'mesh',
        'mqo',
        'obj',
        'pmd',
        'pmx',
        'skp',
        'stl',
        'stp',
        'vac',
        'vox',
        'voxb',
        'x',
    ]
}, {
    name: 'access',
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
        'mdb',
        'mdw',
    ]
}, {
    name: 'actionscript',
    fileExtensions: ['as']
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
    name: 'adobe-coldfusion',
    fileExtensions: [
        'cfc',
        'cfm',
        'cfml',
        'lucee',
    ]
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
    name: 'assembly',
    fileExtensions: [
        'aea',
        'agc',
        'ags',
        'argus',
        'asm',
        'bin',
        'binsource',
        'inc',
        'mitigus',
        'nasm',
        's',
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
    name: 'babel',
    fileNames: [
        '.babel-plugin-macrosrc',
        '.babel-plugin-macrosrc.js',
        '.babel-plugin-macrosrc.json',
        '.babel-plugin-macrosrc.yaml',
        '.babel-plugin-macrosrc.yml',
        '.babelrc',
        '.babelrc.cjs',
        '.babelrc.js',
        '.babelrc.json',
        '.babelrc.mjs',
        'babel-plugin-macros.config.js',
        'babel-transform.js',
        'babel.config.cjs',
        'babel.config.js',
        'babel.config.json',
        'babel.config.mjs',
    ]
}, {
    name: 'ballerina',
    fileExtensions: [
        'bal',
        'balx',
    ]
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
        '.bazelrc',
        '.bazelversion',
    ]
}, {
    name: 'bazel-ignore',
    fileNames: ['.bazelignore']
}, {
    name: 'bitbucket',
    fileNames: [
        'bitbucket-pipelines.yaml',
        'bitbucket-pipelines.yml',
    ]
}, {
    name: 'brainfuck',
    fileExtensions: [
        'b',
        'bf',
    ]
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
    fileExtensions: ['c']
}, {
    name: 'carbon',
    fileExtensions: ['carbon']
}, {
    name: 'cargo',
    fileNames: ['cargo.toml']
}, {
    name: 'cargo-lock',
    fileNames: ['cargo.lock']
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
    name: 'cuda',
    fileExtensions: [
        'cu',
        'cuh',
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
        '.pubignore',
        'dart',
    ]
}, {
    name: 'dart-ignore',
    fileNames: ['.dartignore']
}, {
    name: 'deno',
    fileNames: [
        'deno.json',
        'deno.jsonc',
        'deno.lock',
    ]
}, {
    name: 'dependabot',
    fileNames: [
        'dependabot.yaml',
        'dependabot.yml',
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
        'compose.yaml',
        'compose.yml',
        'docker-compose.yaml',
        'docker-compose.yml',
        'dockerfile',
    ]
}, {
    name: 'docker-ignore',
    fileNames: ['.dockerignore']
}, {
    name: 'dot',
    fileExtensions: [
        'def',
        'dot',
        'jst',
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
        'eex',
        'ex',
        'exs',
        'heex',
        'leex',
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
    name: 'eslint-ignore',
    fileNames: ['.eslintignore']
}, {
    name: 'excel',
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
    fileNames: ['gemfile']
}, {
    name: 'gemfile-lock',
    fileNames: ['gemfile.lock']
}, {
    name: 'git',
    fileExtensions: ['patch'],
    fileNames: [
        '.gitattributes',
        '.gitinclude',
        '.gitkeep',
        '.gitmessage',
        '.gitmodules',
        '.gitpreserve',
        '.keep',
    ]
}, {
    name: 'git-config',
    fileNames: [
        '.git/config',
        '.gitconfig',
    ]
}, {
    name: 'git-ignore',
    fileNames: [
        '.git-blame-ignore',
        '.git-blame-ignore-revs',
        '.gitignore',
    ]
}, {
    name: 'gitlab',
    fileNames: ['.gitlab-ci.yml']
}, {
    name: 'gitpod',
    fileNames: ['.gitpod.yml']
}, {
    name: 'go',
    fileExtensions: ['go']
}, {
    name: 'go-mod',
    fileNames: [
        'go.mod',
        'go.sum',
        'go.work',
        'go.work.sum',
    ]
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
    name: 'graphcool',
    fileExtensions: ['graphcool']
}, {
    name: 'graphql',
    fileExtensions: [
        'gql',
        'graphql',
    ]
}, {
    name: 'graphql-config',
    fileNames: [
        '.graphqlconfig',
        '.graphqlrc',
        '.graphqlrc.cjs',
        '.graphqlrc.js',
        '.graphqlrc.json',
        '.graphqlrc.toml',
        '.graphqlrc.ts',
        '.graphqlrc.yaml',
        '.graphqlrc.yml',
        'graphql.config.cjs',
        'graphql.config.js',
        'graphql.config.json',
        'graphql.config.toml',
        'graphql.config.ts',
        'graphql.config.yaml',
        'graphql.config.yml',
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
    name: 'h',
    fileExtensions: ['h']
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
    name: 'handlebars',
    fileExtensions: [
        'handlebars',
        'hbs',
        'mustache',
    ]
}, {
    name: 'hardhat',
    fileNames: [
        'hardhat.config.js',
        'hardhat.config.ts',
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
    name: 'hcl',
    fileExtensions: ['hcl']
}, {
    name: 'heroku',
    fileNames: [
        'heroku.yml',
        'procfile',
    ]
}, {
    name: 'hpp',
    fileExtensions: [
        'h++',
        'hh',
        'hpp',
        'hxx',
        'inl',
        'tcc',
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
    name: 'idris',
    fileExtensions: [
        'ibc',
        'idr',
    ]
}, {
    name: 'image',
    fileExtensions: [
        'afphoto',
        'apng',
        'apx',
        'ase',
        'aseprite',
        'avci',
        'avcs',
        'avif',
        'avifs',
        'bmp',
        'bpg',
        'brk',
        'clip',
        'cpt',
        'dds',
        'dib',
        'djv',
        'djvu',
        'dng',
        'eps', // TODO: mv eps
        'exr',
        'flif',
        'fpx',
        'gbr',
        'gif',
        'hdp',
        'hdp',
        'heic',
        'heics',
        'heif',
        'heifs',
        'icns',
        'ico',
        'img',
        'j2c',
        'j2k',
        'jb2',
        'jbg',
        'jbig',
        'jbig2',
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
        'kra',
        'mdp',
        'mng',
        'ora',
        'pbm',
        'pdn',
        'pgf',
        'pgm',
        'pic',
        'png',
        'pnm',
        'ppm',
        'qoi',
        'qtvr',
        'raw',
        'sai',
        'sai2',
        'tga',
        'tif',
        'tiff',
        'wbmp',
        'wdp',
        'webp',
        'wp2',
        'xcf',
    ]
}, {
    name: 'iso',
    fileExtensions: ['iso']
}, {
    name: 'jar',
    fileExtensions: [
        'class',
        'jar',
    ]
}, {
    name: 'java',
    fileExtensions: [
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
    name: 'jenkins',
    fileExtensions: [
        'jenkins',
        'jenkinsfile',
    ],
    fileNames: ['jenkinsfile']
}, {
    name: 'jinja',
    fileExtensions: [
        'j2',
        'jinja',
        'jinja2',
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
        'tf.json',
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
    name: 'laravel',
    fileExtensions: [
        'blade.php',
        'inky.php',
    ],
    fileNames: ['artisan']
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
    name: 'marko',
    fileExtensions: ['marko']
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
    name: 'mermaid',
    fileExtensions: [
        'mermaid',
        'mmd',
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
    ]
}, {
    name: 'minecraft-ignore',
    fileNames: ['.mcignore']
}, {
    name: 'mizu',
    fileExtensions: [
        'mizu',
        'mz',
    ]
}, {
    name: 'mocha',
    fileNames: [
        '.mocharc.js',
        '.mocharc.json',
        '.mocharc.jsonc',
        '.mocharc.yaml',
        '.mocharc.yml',
        'mocha.opts',
    ]
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
        'dmpatch',
        'fst',
        'mid',
        'ppsf',
        'vpr',
        'vsq',
        'vsqx',
    ]
}, {
    name: 'nanostaged',
    fileNames: [
        '.nano-staged.cjs',
        '.nano-staged.js',
        '.nano-staged.json',
        '.nano-staged.mjs',
        '.nanostagedrc',
        'nano-staged.cjs',
        'nano-staged.js',
        'nano-staged.json',
        'nano-staged.mjs',
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
    name: 'nodemon',
    fileNames: [
        'nodemon-debug.json',
        'nodemon.json',
    ]
}, {
    name: 'npm',
    fileNames: ['.npmrc']
}, {
    name: 'npm-ignore',
    fileNames: ['.npmignore']
}, {
    name: 'numbers',
    fileExtensions: ['numbers']
}, {
    name: 'nuxt',
    fileNames: [
        'nuxt.config.js',
        'nuxt.config.ts',
    ]
}, {
    name: 'nuxt-ignore',
    fileNames: ['.nuxtignore']
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
    name: 'onenote',
    fileExtensions: [
        'one',
        'onetoc2',
    ]
}, {
    name: 'package',
    fileNames: ['package.json']
}, {
    name: 'package-lock',
    fileNames: ['package-lock.json']
}, {
    name: 'pages',
    fileExtensions: ['pages']
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
    name: 'pine',
    fileExtensions: ['pine']
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
    name: 'powerpoint',
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
    name: 'prettier-ignore',
    fileNames: ['.prettierignore']
}, {
    name: 'processing',
    fileExtensions: ['pde']
}, {
    name: 'pug',
    fileExtensions: ['pug'],
    fileNames: [
        '.pug-lintrc',
        '.pug-lintrc.js',
        '.pug-lintrc.json',
    ]
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
    name: 'replit',
    fileNames: ['.replit']
}, {
    name: 'rescript',
    fileExtensions: ['res']
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
    name: 'semgrep',
    fileNames: ['semgrep.yml']
}, {
    name: 'semgrep-ignore',
    fileNames: ['.semgrepignore']
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
    name: 'solidity',
    fileExtensions: ['sol']
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
    fileExtensions: [
        'db',
        'pdb',
        'pgsql',
        'pkb',
        'pks',
        'sql',
    ]
}, {
    name: 'sqlite',
    fileExtensions: [
        'db3',
        's3db',
        'sl3',
        'sqlite',
        'sqlite3',
    ]
}, {
    name: 'storybook',
    fileExtensions: [
        'stories.js',
        'stories.jsx',
        'stories.mdx',
        'stories.svelte',
        'stories.ts',
        'stories.tsx',
        'story.js',
        'story.jsx',
        'story.mdx',
        'story.ts',
        'story.tsx',
    ]
}, {
    name: 'stylelint',
    fileNames: [
        '.stylelintcache',
        '.stylelintrc.cjs',
        '.stylelintrc.js',
        '.stylelintrc.json',
        '.stylelintrc.yaml',
        '.stylelintrc.yml',
        'stylelint.config.cjs',
        'stylelint.config.js',
    ]
}, {
    name: 'stylelint-ignore',
    fileNames: ['.stylelintignore']
}, {
    name: 'sublime',
    fileExtensions: [
        'sublime-project',
        'sublime-workspace',
    ]
}, {
    name: 'supabase',
    fileNames: [
        'supabase.js',
        'supabase.py',
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
    name: 'terraform',
    fileExtensions: [
        'tf',
        'tfstate',
        'tfvars',
    ]
}, {
    name: 'text',
    fileExtensions: ['txt']
}, {
    name: 'todo',
    fileExtensions: ['todo'],
    fileNames: [
        'todo',
        'todo.md',
        'todo.rst',
        'todo.txt',
        'todos.md',
        'todos.rst',
        'todos.txt',
]
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
    name: 'turborepo',
    fileNames: ['turbo.json']
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
    name: 'uno',
    fileNames: [
        'uno.config.js',
        'uno.config.mjs',
        'uno.config.mts',
        'uno.config.ts',
        'unocss.config.js',
        'unocss.config.mjs',
        'unocss.config.mts',
        'unocss.config.ts',
    ]
}, {
    name: 'url',
    fileExtensions: ['url']
}, {
    name: 'v',
    fileExtensions: ['v'],
    fileNames: [
        'v.mod',
        'vpkg.json',
    ]
}, {
    name: 'vala',
    fileExtensions: [
        'vala',
        'vapi',
    ]
}, {
    name: 'vercel',
    fileNames: [
        'now.json',
        'vercel.json',
    ]
}, {
    name: 'vercel-ignore',
    fileNames: [
        '.nowignore',
        '.vercelignore',
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
    name: 'visio',
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
    ]
}, {
    name: 'vscode-ignore',
    fileNames: ['.vscodeignore']
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
    name: 'webassembly',
    fileExtensions: [
        'wasm',
        'wat',
    ]
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
    name: 'word',
    fileExtensions: [
        'doc',
        'docb',
        'docm',
        'docx',
        'dot',
        'dotm',
        'dotx',
        'odt',
        'rtf',
        'wbk',
    ]
}, {
    name: 'xml',
    fileExtensions: [
        'classpath',
        'dtd',
        'iml',
        'jrxml',
        'manifest',
        'plist',
        'project',
        'resx',
        'tmLanguage',
        'xml',
        'xml.dist',
        'xml.dist.sample',
        'xquery',
        'xsd',
        'xsl',
        'xslt',
    ]
}, {
    name: 'yaml',
    fileExtensions: [
        'yaml',
        'yaml-tmlanguage',
        'yaml.dist',
        'yml',
        'yml.dist',
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

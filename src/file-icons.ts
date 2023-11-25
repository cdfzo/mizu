interface Icon {
    name: string
    fileExtensions?: string[]
    fileNames?: string[]
    folderNames?: string[]
}

const fileIcons: Icon[] = [
{
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
    name: 'aftereffects',
    fileExtensions: ['aep']
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
    name: 'angular',
    fileNames: [
        '.angular-cli.json',
        'angular-cli.json',
        'angular.json',
        'ng-package.json',
    ]
}, {
    name: 'antlr',
    fileExtensions: ['g4']
}, {
    name: 'apache',
    fileNames: ['.htaccess']
}, {
    name: 'applescript',
    fileExtensions: [
        'applescript',
        'ipa',
        'scpt',
        'scptd',
    ]
}, {
    name: 'appletouchicon',
    fileNames: [
        'apple-touch-icon-precomposed.png',
        'apple-touch-icon.png',
    ]
}, {
    name: 'appveyor',
    fileNames: [
        '.appveyor.yml',
        'appveyor.yml',
    ]
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
    name: 'audition',
    fileExtensions: ['sesx']
}, {
    name: 'aurelia',
    fileNames: ['aurelia.json']
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
    name: 'bithound',
    fileNames: ['.bithoundrc']
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
    name: 'buildkite',
    fileNames: [
        'buildkite.yaml',
        'buildkite.yml',
    ]
}, {
    name: 'bun',
    fileNames: ['bunfig.toml']
}, {
    name: 'bun-lock',
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
    name: 'check',
    fileNames: [
        'check',
        'fastcheck',
    ]
}, {
    name: 'ci-yml',
    fileNames: [
        'ci.yaml',
        'ci.yml',
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
    name: 'cloudfoundry',
    fileNames: ['.cfignore']
}, {
    name: 'cobol',
    fileExtensions: [
        'cbl',
        'cob',
    ]
}, {
    name: 'codeclimate',
    fileNames: ['.codeclimate.yml']
}, {
    name: 'coldfusion',
    fileExtensions: [
        'cfc',
        'cfm',
        'cfml',
        'lucee',
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
        '.env.development',
        '.env.dist',
        '.env.example',
        '.env.prod',
        '.env.production',
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
    fileExtensions: ['dockerfile'],
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
    ],
    fileNames: ['.elixir']
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
    name: 'fastlane',
    fileNames: [
        'appfile',
        'fastfile',
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
    name: 'file'
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
    name: 'funding-yml',
    fileNames: [
        'funding.yaml',
        'funding.yml',
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
        'procfile.dev',
        'procfile.prod',
    ]
}, {
    name: 'heroku-ignore',
    fileNames: ['.slugignore']
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
    name: 'illustrator',
    fileExtensions: ['ai']
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
        'six',
        'sixel',
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
    name: 'indesign',
    fileExtensions: ['indd']
}, {
    name: 'iso',
    fileExtensions: ['iso']
}, {
    name: 'java',
    fileExtensions: [
        'java',
        'jmod',
        'jsp',
    ]
}, {
    name: 'java-class',
    fileExtensions: ['class']
}, {
    name: 'java-jar',
    fileExtensions: ['jar']
}, {
    name: 'javascript',
    fileExtensions: [
        'cjs',
        'js',
        'mjs',
    ]
}, {
    name: 'javascript-component',
    fileExtensions: ['component.js']
}, {
    name: 'javascript-config',
    fileNames: ['jsconfig.json']
}, {
    name: 'javascript-controller',
    fileExtensions: ['controller.js']
}, {
    name: 'javascript-exception',
    fileExtensions: [
        'error.js',
        'exception.js',
    ]
}, {
    name: 'javascript-filter',
    fileExtensions: ['filter.js']
}, {
    name: 'javascript-guard',
    fileExtensions: ['guard.js']
}, {
    name: 'javascript-map',
    fileExtensions: [
        'cjs.map',
        'js.map',
        'mjs.map',
    ]
}, {
    name: 'javascript-pipe',
    fileExtensions: ['pipe.js']
}, {
    name: 'javascript-server',
    fileExtensions: ['server.js']
}, {
    name: 'javascript-store',
    fileExtensions: ['store.js']
}, {
    name: 'javascript-service',
    fileExtensions: ['service.js']
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
    name: 'javascript-worker',
    fileNames: [
        'service-worker.js',
        'serviceworker.js',
        'sw.js',
        'worker.js',
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
    name: 'ki',
    fileExtensions: ['ki']
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
    name: 'lisp',
    fileExtensions: [
        'lisp',
        'lsp',
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
    name: 'lolcode',
    fileExtensions: [
        'lol',
        'lols',
    ]
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
    name: 'markdownlint',
    fileNames: ['.mdlrc']
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
    ]
}, {
    name: 'maven',
    fileNames: [
        'jvm.config',
        'maven.config',
        'mvnw',
        'mvnw.cmd',
        'pom.xml',
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
    name: 'modernizr',
    fileNames: [
        '.modernizrrc',
        '.modernizrrc.js',
        '.modernizrrc.json',
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
    name: 'newrelic',
    fileNames: ['newrelic.yml']
}, {
    name: 'next',
    fileNames: [
        'next.config.js',
        'next.config.mjs',
        'next.config.mts',
        'next.config.ts',
    ]
}, {
    name: 'nginx',
    fileNames: [
        'fastcgi.conf',
        'mime.types',
        'nginx.conf',
        'proxy.conf',
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
    name: 'nrwl',
    fileNames: ['nx.json']
}, {
    name: 'nrwl-ignore',
    fileNames: ['.nxignore']
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
    name: 'percy',
    fileNames: ['.percy.yml']
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
    name: 'photoshop',
    fileExtensions: [
        'psb',
        'psd',
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
    name: 'plasmic',
    fileNames: ['plasmic.json']
}, {
    name: 'plasmic-lock',
    fileNames: ['plasmic.lock']
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
    name: 'premiere',
    fileExtensions: ['prproj']
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
    name: 'prisma',
    fileExtensions: ['prisma']
}, {
    name: 'processing',
    fileExtensions: ['pde']
}, {
    name: 'prolog',
    fileExtensions: [
        'p',
        'pro',
    ]
}, {
    name: 'protractor',
    fileNames: [
        'protractor.conf.coffee',
        'protractor.conf.js',
        'protractor.conf.ts',
        'protractor.config.js',
        'protractor.config.ts',
    ]
}, {
    name: 'publish-yml',
    fileNames: [
        'publish.yaml',
        'publish.yml',
    ]
}, {
    name: 'pug',
    fileExtensions: [
        'jade',
        'pug',
    ],
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
    name: 'restql',
    fileExtensions: [
        'restql',
        'rql',
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
    fileNames: [
        '.rspec',
        'rspec',
    ]
}, {
    name: 'rubocop',
    fileNames: [
        '.rubocop.yml',
        '.rubocop_todo.yml',
    ]
}, {
    name: 'ruby',
    fileExtensions: [
        'gem',
        'gemspec',
        'rake',
        'rb',
    ],
    fileNames: [
        'rake',
        'rakefile',
    ]
}, {
    name: 'ruby-application',
    fileNames: ['application.rb']
}, {
    name: 'ruby-assets',
    fileNames: ['assets.rb']
}, {
    name: 'ruby-config',
    fileNames: ['config.ru']
}, {
    name: 'ruby-environment',
    fileNames: [
        'development.rb',
        'environment.rb',
        'environments/test.rb',
        'production.rb',
    ]
}, {
    name: 'ruby-importmap',
    fileNames: ['importmap.rb']
}, {
    name: 'ruby-puma',
    fileNames: ['puma.rb']
}, {
    name: 'ruby-routes',
    fileNames: ['routes.rb']
}, {
    name: 'ruby-schema',
    fileNames: [
        'schema.rb',
        'seeds.rb',
    ]
}, {
    name: 'ruby-version',
    fileNames: ['.ruby-version']
}, {
    name: 'run',
    fileNames: ['run']
}, {
    name: 'rust',
    fileExtensions: [
        'rlib',
        'rs',
    ]
}, {
    name: 'rust-main',
    fileNames: ['main.rs']
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
    name: 'sentry',
    fileNames: ['.sentryclirc']
}, {
    name: 'server',
    fileExtensions: ['pid']
}, {
    name: 'setup',
    fileNames: ['setup']
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
    name: 'slim',
    fileExtensions: ['slim']
}, {
    name: 'smallbasic',
    fileExtensions: [
        'sb',
        'smallbasic',
    ]
}, {
    name: 'snowpack',
    fileNames: [
        'snowpack.config.cjs',
        'snowpack.config.cts',
        'snowpack.config.js',
        'snowpack.config.json',
        'snowpack.config.mjs',
        'snowpack.config.mts',
        'snowpack.config.ts',
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
    name: 'swc',
    fileNames: ['.swcrc']
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
        'todos',
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
    name: 'typescript-component',
    fileExtensions: ['component.ts']
}, {
    name: 'typescript-config',
    fileNames: [
        'tsconfig.cjs.json',
        'tsconfig.esm.json',
        'tsconfig.json',
        'tsconfig.test.json',
    ]
}, {
    name: 'typescript-controller',
    fileExtensions: ['controller.ts']
}, {
    name: 'typescript-def',
    fileExtensions: [
        'd.cts',
        'd.mts',
        'd.ts',
    ]
}, {
    name: 'typescript-exception',
    fileExtensions: [
        'error.ts',
        'exception.ts',
    ]
}, {
    name: 'typescript-filter',
    fileExtensions: ['filter.ts']
}, {
    name: 'typescript-guard',
    fileExtensions: ['guard.ts']
}, {
    name: 'typescript-map',
    fileExtensions: [
        'cts.map',
        'mts.map',
        'ts.map',
    ]
}, {
    name: 'typescript-pipe',
    fileExtensions: ['pipe.ts']
}, {
    name: 'typescript-server',
    fileExtensions: ['server.ts']
}, {
    name: 'typescript-service',
    fileExtensions: ['service.ts']
}, {
    name: 'typescript-store',
    fileExtensions: ['store.ts']
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
    name: 'typescript-worker',
    fileNames: [
        'service-worker.ts',
        'serviceworker.ts',
        'sw.ts',
        'worker.ts',
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
    name: 'unity',
    fileExtensions: [
        'unity',
        'unity3d',
        'unitypackage',
        'unityweb',
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
    name: 'verdaccio',
    fileNames: ['verdaccio.yml']
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
    fileExtensions: ['code-profile'],
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
    name: 'wakatime',
    fileNames: [
        '.wakatime-project',
        '.wakatime.cfg',
    ],
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
    name: 'webhint',
    fileNames: ['.hintrc']
}, {
    name: 'webmanifest',
    fileExtensions: ['webmanifest'],
    fileNames: ['manifest.json']
}, {
    name: 'webpack',
    fileNames: [
        'webpack.base.js',
        'webpack.base.ts',
        'webpack.common.js',
        'webpack.common.ts',
        'webpack.config.babel.js',
        'webpack.config.babel.ts',
        'webpack.config.base.js',
        'webpack.config.base.ts',
        'webpack.config.cjs',
        'webpack.config.common.js',
        'webpack.config.common.ts',
        'webpack.config.cts',
        'webpack.config.dev.js',
        'webpack.config.dev.ts',
        'webpack.config.js',
        'webpack.config.mjs',
        'webpack.config.mts',
        'webpack.config.prod.js',
        'webpack.config.prod.ts',
        'webpack.config.ts',
        'webpack.dev.js',
        'webpack.dev.ts',
        'webpack.dist.js',
        'webpack.dist.ts',
        'webpack.prod.js',
        'webpack.prod.ts',
        'webpack.test.js',
        'webpack.test.ts',
    ]
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
    name: 'workspace',
    fileExtensions: ['workspace'],
    fileNames: ['workspace']
}, {
    name: 'xd',
    fileExtensions: ['xd']
}, {
    name: 'xml',
    fileExtensions: [
        'classpath',
        'dtd',
        'entitlements',
        'iml',
        'jrxml',
        'manifest',
        'plist',
        'project',
        'resx',
        'tmlanguage',
        'xcscheme',
        'xcsettings', // TODO: mv xcode
        'xcworkspacedata',
        'xml',
        'xml.dist',
        'xml.dist.sample',
        'xquery',
        'xsd',
        'xsl',
        'xslt',
    ]
}, {
    name: 'yarn',
    fileNames: [
        '.yarn-integrity',
        '.yarnclean',
        '.yarnrc',
        '.yarnrc.yaml',
        '.yarnrc.yml',
        'yarn',
        'yarn-error.log',
        'yarn.lock',
    ]
}, {
    name: 'yarn-lock',
    fileNames: ['yarn.lock']
}, {
    name: 'yml',
    fileExtensions: [
        'yaml',
        'yaml-tmlanguage',
        'yaml.dist',
        'yml',
        'yml.dist',
    ]
}, {
    name: 'zenodo',
    fileNames: ['.zenodo.json']
}, {
    name: 'zig',
    fileExtensions: [
        'zig',
        'zir',
        'zon',
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
]

export {
    Icon,
    fileIcons
}

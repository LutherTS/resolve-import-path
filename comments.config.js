const data = {
  jsDoc: {
    //     resolveImportingPath: `* Resolves a JavaScript or TypeScript import path to a filesystem path (node_modules excluded), handling:
    //  * - Base url and aliases (via tsconfig.json \`baseUrl\` and \`paths\` compiler options).
    //  * - Missing extensions (appends \`.ts\`, \`.tsx\`, etc.).
    //  * - Directory imports (e.g., \`./components\` → \`./components/index.ts\`).
    //  * @param {string} currentDir The directory of the file performing the import, such as from \`path.dirname(context.filename)\`.
    //  * @param {string} importPath The import specifier (e.g., \`@/components/Button\` or \`./utils\`), such as one from a node being currently traversed.
    //  * @param {string} cwd The project root, such as from \`context.cwd\`.
    //  * @returns The absolute resolved importing path or \`null\` if no path is found.`, // $COMMENT#JSDOC#RESOLVEIMPORTINGPATH
    //   },
    definitions: {
      resolveImportingPath:
        "Resolves a JavaScript or TypeScript import path to a filesystem path (node_modules excluded), handling:", // $COMMENT#JSDOC#DEFINITIONS#RESOLVEIMPORTINGPATH
    },
    details: {
      baseUrlAliases:
        "Base url and aliases (via tsconfig.json `baseUrl` and `paths` compiler options).", // $COMMENT#JSDOC#RETURNS#BASEURLALIASES
      extensions: "Missing extensions (appends `.ts`, `.tsx`, etc.).", // $COMMENT#JSDOC#RETURNS#EXTENSIONS
      directories:
        "Directory imports (e.g., `./components` → `./components/index.ts`).", // $COMMENT#JSDOC#RETURNS#DIRECTORIES
    },
    params: {
      currentDir:
        "The directory of the file performing the import, such as from `path.dirname(context.filename)`.", // $COMMENT#JSDOC#PARAMS#CURRENTDIR
      importPath:
        "The import specifier (e.g., `@/components/Button` or `./utils`), such as one from a node being currently traversed.", // $COMMENT#JSDOC#PARAMS#IMPORTPATH
      cwd: "The project root, such as from `context.cwd`.", // $COMMENT#JSDOC#PARAMS#CWD
    },
    returns: {
      resolveImportingPath:
        "The absolute resolved importing path or `null` if no path is found.", // $COMMENT#JSDOC#RETURNS#RESOLVEIMPORTINGPATH
    },
  },
};

const ignores = [];

const config = {
  data,
  ignores,
};

export default config;

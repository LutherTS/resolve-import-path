const data = {
  jsDoc: Object.freeze({
    definitions: Object.freeze({
      resolveImportingPath:
        "Resolves a JavaScript or TypeScript import path to a filesystem path (node_modules excluded), handling:", // $COMMENT#JSDOC#DEFINITIONS#RESOLVEIMPORTINGPATH
      findExistingPath:
        "Finds the existing path of an import that does not have an extension specified.",
    }),
    details: Object.freeze({
      baseUrlAliases:
        "Base url and aliases (via tsconfig.json `baseUrl` and `paths` compiler options).", // $COMMENT#JSDOC#DETAILS#BASEURLALIASES
      extensions: "Missing extensions (appends `.ts`, `.tsx`, etc.).", // $COMMENT#JSDOC#DETAILS#EXTENSIONS
      directories:
        "Directory imports (e.g., `./components` → `./components/index.ts`).", // $COMMENT#JSDOC#DETAILS#DIRECTORIES
    }),
    params: Object.freeze({
      currentDir:
        "The directory of the file performing the import, such as from `path.dirname(context.filename)`.", // $COMMENT#JSDOC#PARAMS#CURRENTDIR
      importPath:
        "The import specifier (e.g., `@/components/Button` or `./utils`), such as one from a node being currently traversed.", // $COMMENT#JSDOC#PARAMS#IMPORTPATH
      cwd: "The project root, such as from `context.cwd`.", // $COMMENT#JSDOC#PARAMS#CWD
      basePath: "The absolute import path with its extension yet resolved.",
    }),
    returns: Object.freeze({
      resolveImportingPath:
        "The absolute resolved importing path or `null` if no path is found.", // $COMMENT#JSDOC#RETURNS#RESOLVEIMPORTINGPATH
      findExistingPath:
        "The absolute importing path with its extension, or `null` if no path is found.",
    }),
  }),
};

const ignores = [];

const config = {
  data,
  ignores,
};

export default config;

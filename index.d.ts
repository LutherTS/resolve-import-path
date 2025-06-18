// must be manually maintained

/**
 * Resolves a JavaScript or TypeScript import path to a filesystem path (node_modules excluded), handling:
 * - Base url and aliases (via tsconfig.json `baseUrl` and `paths` compiler options).
 * - Missing extensions (appends `.ts`, `.tsx`, etc.).
 * - Directory imports (e.g., `./components` → `./components/index.ts`).
 * @param {string} currentDir The directory of the file performing the import, such as from `path.dirname(context.filename)`.
 * @param {string} importPath The import specifier (e.g., `@/components/Button` or `./utils`), such as one from a node being currently traversed.
 * @param {string} cwd The project root, such as from `context.cwd`.
 * @returns The absolute resolved importing path or `null` if no path is found.
 */
export const resolveImportingPath: (
  currentDir: string,
  importPath: string,
  cwd: string
) => string | null;

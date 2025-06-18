A utility that I am bound to reuse between open-source projects. Here is the code with JSDoc comments:

```js
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
export const resolveImportingPath = (
  currentDir,
  importPath,
  cwd = process.cwd()
) => {
  // Step 1: Resolves baseUrl and aliases
  const config = loadConfig(cwd);

  const resolveTSConfig =
    config.resultType === "success"
      ? createMatchPath(config.absoluteBaseUrl, config.paths)
      : null;

  const baseUrlOrAliasedPath = resolveTSConfig
    ? resolveTSConfig(importPath, undefined, undefined, EXTENSIONS)
    : null;

  // Step 2: Resolves relative/absolute paths
  const basePath = baseUrlOrAliasedPath || path.resolve(currentDir, importPath);

  // does not resolve on node_modules
  if (basePath.includes("node_modules")) return null;

  // Case 1: File with extension exists
  if (path.extname(importPath) && fs.existsSync(basePath)) return basePath;

  // Case 2: Tries appending extensions
  const extensionlessImportPath = findExistingPath(basePath);
  if (extensionlessImportPath) return extensionlessImportPath;

  // Case 3: Directory import (e.g., `./components` → `./components/index.ts`)
  const indexPath = path.join(basePath, "index");
  const directoryImportPath = findExistingPath(indexPath);
  if (directoryImportPath) return directoryImportPath;

  return null; // not found
};
```

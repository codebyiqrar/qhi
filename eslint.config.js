import eslintPluginImport from "eslint-plugin-import";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true, // ← enable JSX parsing
      },
    },
    plugins: {
      import: eslintPluginImport,
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    ignores: [".next/**", "out/**", "build/**"],
  },
];

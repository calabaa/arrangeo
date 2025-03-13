import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsPlugin from "@typescript-eslint/eslint-plugin"


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser" // 设置 TypeScript 解析器
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tsPlugin.configs.recommended, // 使用 TypeScript ESLint 插件的推荐配置
];
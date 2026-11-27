import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import shell from "@eslint/shell";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["package-lock.json", "node_modules/**"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"], rules: {  "css/no-invalid-properties": [ "error", { allowUnknownVariables: true, }, ], }, },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
  { files: ["**/*.sh", "**/*.bash"], plugins: { shell }, language: "shell/bash", extends: ["shell/recommended"] },
]);

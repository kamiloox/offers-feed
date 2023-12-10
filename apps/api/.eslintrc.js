/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/library.js", "@sanity/eslint-config-studio"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

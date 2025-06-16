import { antfu } from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  markdown: true,
  jsonc: true,
  test: true,
  typescript: true,
  yaml: true,
  formatters: {
    markdown: "prettier",
  },
});

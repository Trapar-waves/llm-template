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
  ignores: ["src/prompt/**/*.md"],
}, {
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  files: ["pnpm-workspace.yaml"],
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
});

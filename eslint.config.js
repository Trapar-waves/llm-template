import { renton } from "@renton/eslint-config";

export default renton({
  ignores: ["src/prompt/**/*.md"],
  stylistic: {
    quotes: "double",
    semi: true,
  },
}, {
  files: ["pnpm-workspace.yaml"],
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
});

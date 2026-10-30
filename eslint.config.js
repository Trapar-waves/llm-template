import { renton } from "@renton/eslint-config";

export default renton({
  ignores: ["src/prompt/**/*.md"],
  stylistic: {
    quotes: "double",
    semi: true,
  },
});

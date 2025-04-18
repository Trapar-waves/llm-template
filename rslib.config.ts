import { defineConfig } from "@rslib/core";

export default defineConfig({
  source: {
    entry: {
      index: "src/index.ts",
    },
  },
  output: {
    cleanDistPath: true,
    sourceMap: true,
  },
  lib: [
    { format: "esm", dts: true },
    { format: "cjs", dts: true },
  ],
  tools: {
    rspack(_config, { addRules }) {
      addRules([
        {
          test: /\.md$/,
          type: "asset/source",
          generator: {
            importMode: "preserve",
          },
        },
      ]);
    },
  },
});

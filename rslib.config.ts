import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    { dts: true, format: "esm" },
    { dts: true, format: "cjs" },
  ],
  output: {
    cleanDistPath: true,
    sourceMap: true,
  },
  source: {
    entry: {
      index: "src/index.ts",
    },
  },
  tools: {
    rspack(_config, { addRules }) {
      addRules([
        {
          generator: {
            importMode: "preserve",
          },
          test: /\.md$/,
          type: "asset/source",
        },
      ]);
    },
  },
});

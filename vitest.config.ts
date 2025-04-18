import dotenv from "dotenv";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  test: {
    testTimeout: 10 * 60 * 1000,
    env: dotenv.config({ path: [".env.local", ".env"] }).parsed,
  },
});

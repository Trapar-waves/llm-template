import dotenv from "dotenv";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  test: {
    env: dotenv.config({ path: [".env.local", ".env"] }).parsed,
    testTimeout: 10 * 60 * 1000,
  },
});

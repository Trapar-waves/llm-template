import { readFileSync } from "node:fs";
import { expect, it } from "vitest";
import { z } from "zod";
// eslint-disable-next-line antfu/no-import-dist
import { run } from "../dist";

const zodSchema = z.object({
  markdown: z.string(),
});

it("run", async () => {
  const response = await run(
    readFileSync("./package.json").toString(),
    { apiKey: import.meta.env.VITE_API_KEY, baseURL: import.meta.env.VITE_BASE_URL },
  );
  const result = zodSchema.safeParse(response.object);
  expect(result.success).toBe(true);
});

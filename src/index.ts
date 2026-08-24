import { generateObject } from "ai";
import { z } from "zod";
import { indexOpenAi } from "./model";
import { testPrompt } from "./prompt";

interface RunOptions {
  apiKey: string;
  baseURL?: string;
}

export async function run(message: string, options: RunOptions) {
  const openai = indexOpenAi(options.apiKey, options.baseURL);
  return await generateObject({
    model: openai("qwen-2.5-max"),
    prompt: testPrompt(message),
    schema: z.object({
      markdown: z.string(),
    }),
  });
}

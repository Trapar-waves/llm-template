import { createOpenAI } from "@ai-sdk/openai";

export function indexOpenAi(apiKey: string, baseURL?: string) {
  return createOpenAI({
    apiKey,
    baseURL,
  });
}

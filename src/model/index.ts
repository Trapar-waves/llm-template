import { createOpenAI } from "@ai-sdk/openai";

export function iOpenAi(apiKey: string, baseURL?: string) {
  return createOpenAI({
    baseURL,
    apiKey,
  });
}

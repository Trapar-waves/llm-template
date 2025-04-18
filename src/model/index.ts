import { createOpenAI } from "@ai-sdk/openai";

export function iOpenAi(apiKey: string, baseURL?: string) {
  return createOpenAI({
    compatibility: "strict",
    baseURL,
    apiKey,
  });
}

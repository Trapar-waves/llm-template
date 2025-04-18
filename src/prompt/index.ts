import md from "./test.md";

export function testPrompt(userInput: string) {
  return md.replace("{{userInput}}", userInput);
}

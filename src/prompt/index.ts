import md from "./test.md";

export function testPrompt(userInput: string) {
  // eslint-disable-next-line unicorn/no-unsafe-string-replacement -- template placeholder is a fixed pattern
  return md.replaceAll("{{userInput}}", userInput);
}

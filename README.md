# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/github/license/Trapar-waves/llm-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/llm-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> A production-ready template for LLM (Large Language Model) application development, integrating AI tools, TypeScript type safety, Zod validation, and modern dev utilities.

## ✨ Features

- **Type Safety:** Leverages TypeScript to improve code quality and reduce runtime errors.
- **Fast Development Workflow:** Utilizes Vite for quick server starts and hot module replacement.
- **Optimized Builds:** Employs Rslib for efficient library bundling and optimized production outputs.
- **AI Integration:** Pre-configured with `@ai-sdk/openai` and `ai` for seamless interaction with large language models.
- **Robust Validation:** Utilizes Zod for runtime schema validation, ensuring data integrity.
- **Focus on Testing:** Includes Vitest for fast and reliable unit testing.
- **Code Consistency:** Enforces code style and quality using Prettier and Antfu's ESLint configuration.
- **Environment Management:** Uses `dotenv` for secure configuration of API keys and environment-specific settings.
- **Cross-Platform Paths:** Employs `pathe` for consistent file path handling across different operating systems.

## 💻 Tech Stack

Key technologies used in this project include:

- **Language:** TypeScript
- **LLM Framework:** AI SDK (`@ai-sdk/openai`, `ai`)
- **Validation:** Zod
- **Testing Framework:** Vitest
- **Build Tool:** Rslib
- **Development Server:** Vite
- **Code Quality:** ESLint (Antfu's config), Prettier
- **Utilities:** Dotenv, Pathe

See the [package.json](package.json) for a full list of dependencies.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.x recommended)
- Package manager (npm, yarn, or pnpm)

```bash
node -v
npm -v
```

### Installation

Run script

```bash
pnpm create trapar-waves
```

Install dependencies

```bash
npm install
yarn install
pnpm install
```

### Available Scripts

Common scripts available via `npm run <script>`, `yarn <script>`, or `pnpm <script>`:

- `build`: Creates a production-ready build using Rslib.
- `build:watch`: Creates a production-ready build using Rslib in watch mode.
- `lint`: Checks the code for style and errors using ESLint.

Example:

```bash
# Create production build
npm run build
```

## 🛠️ Usage

This template provides a foundational structure for building LLM applications. It includes:

- A basic project structure with `src/` directory.
- Integration with OpenAI API through `@ai-sdk/openai`.
- Example usage of `ai` and `zod` for generating structured output.
- Configuration for building and testing with Rslib and Vitest.

Developers can extend this template by adding their own prompts, models, and application logic within the `src/` directory.

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Homepage:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Issues:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

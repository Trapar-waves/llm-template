# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)

[中文](readme/README-CN.md) | [日本語](readme/README-JP.md) | [Русский](readme/README-RU.md)

> A production-ready template for LLM (Large Language Model) application development, integrating AI tools, TypeScript type safety, Zod validation, and modern dev utilities.

## ✨ Key Features

- **Type Safety:** Powered by TypeScript for compile-time type checking and enhanced code maintainability.
- **Runtime Validation:** Zod schema validation ensures data integrity across API endpoints and model interactions.
- **Rapid Development:** Vite-based dev server with HMR (Hot Module Replacement) for instant feedback during iteration.
- **Test-Driven:** Vitest integrated for fast unit testing, ensuring code reliability from development to production.
- **AI-Ready:** Pre-configured with AI SDKs (`@ai-sdk/openai`, `ai`) for seamless LLM integration and workflow automation.
- **Cross-Platform Paths:** `pathe` for consistent path handling across Windows/macOS/Linux environments.
- **Code Consistency:** Prettier formatting and Antfu's ESLint rules enforce standardized code style.
- **Environment Management:** `dotenv` for secure configuration of API keys and environment-specific settings.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

- Ensure you have the following installed:
  - Node.js (e.g., >= 18.x)
  - Package manager (npm, yarn, or pnpm)
  ```bash
  node -v
  npm -v # or yarn -v or pnpm -v
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Trapar-waves/llm-template.git
   cd @trapar-waves/llm-template
   ```
2. Install dependencies:
   ```bash
   # Use your preferred package manager
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## 🛠️ Usage

Explain how to run and use the project after installation.

### Available Scripts

Common scripts available via `npm run <script>`, `yarn <script>`, or `pnpm <script>`:

- `build`: Builds the project using `rslib build`.
- `build:watch`: Watches for file changes and rebuilds the project automatically using `rslib build --watch`.

Example:

```bash
# Build the project
npm run build

# Watch and rebuild on changes
npm run build:watch
```

## 💻 Tech Stack

Core technologies powering the template:

### Development

- **Language:** TypeScript (strict type checking)
- **Dev Server:** Vite (fast HMR and module bundling)
- **Build Tool:** Rslib (`@rslib/core`) for optimized production builds

### AI Integration

- `@ai-sdk/openai`: OpenAI API client for LLM interactions
- `ai`: Utilities for building AI-driven workflows

### Validation & Quality

- `zod`: Runtime schema validation for data integrity
- `eslint` + `@antfu/eslint-config`: Code quality enforcement
- `prettier`: Consistent code formatting

### Tooling

- `vitest`: Fast unit testing framework
- `pathe`: Cross-platform path manipulation
- `dotenv`: Environment variable management

Full dependency list available in [package.json](package.json).

## 🤝 Contributing

Contributions are welcome!

## 📄 License

Distributed under the **MIT** License. See `LICENSE` file for more information.

## 👤 Author

- **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
- GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Homepage:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Issues:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

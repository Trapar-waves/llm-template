# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/github/license/Trapar-waves/llm-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/llm-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> 一个生产就绪的LLM（大型语言模型）应用开发模板，集成AI工具、TypeScript类型安全、Zod验证和现代开发工具。

## ✨ 特性

- **类型安全:** 利用TypeScript提高代码质量并减少运行时错误。
- **快速开发工作流:** 利用Vite实现快速服务器启动和热模块替换。
- **优化构建:** 采用Rslib进行高效的库打包和优化的生产输出。
- **AI集成:** 预配置了 `@ai-sdk/openai` 和 `ai`，便于与大型语言模型无缝交互。
- **强大的验证:** 利用Zod进行运行时模式验证，确保数据完整性。
- **注重测试:** 包含Vitest，用于快速可靠的单元测试。
- **代码一致性:** 使用Prettier和Antfu的ESLint配置强制执行代码风格和质量。
- **环境管理:** 使用 `dotenv` 安全配置API密钥和特定于环境的设置。
- **跨平台路径:** 使用 `pathe` 实现跨不同操作系统的统一文件路径处理。

## 💻 技术栈

本项目使用的核心技术包括：

- **语言:** TypeScript
- **LLM框架:** AI SDK (`@ai-sdk/openai`, `ai`)
- **验证:** Zod
- **测试框架:** Vitest
- **构建工具:** Rslib
- **开发服务器:** Vite
- **代码质量:** ESLint (Antfu 配置), Prettier
- **实用工具:** Dotenv, Pathe

完整依赖列表参见[package.json](package.json)。

## 🚀 开始使用

按照以下说明在本地运行项目。

### 前提条件

确保已安装以下软件：

- Node.js (推荐 >= 18.x 版本)
- 包管理器 (npm, yarn 或 pnpm)

```bash
node -v
npm -v
```

### 安装步骤

运行脚本

```bash
pnpm create trapar-waves
```

安装依赖

```bash
npm install
yarn install
pnpm install
```

### 可用脚本

可通过 `npm run <script>`、`yarn <script>` 或 `pnpm <script>` 使用的常见脚本：

- `build`: 使用 Rslib 创建生产就绪的构建。
- `build:watch`: 使用 Rslib 在监视模式下创建生产就绪的构建。
- `lint`: 使用 ESLint 检查代码样式和错误。

示例:

```bash
# 创建生产构建
npm run build
```

## 🛠️ 使用方法

此模板为构建LLM应用程序提供了一个基础结构。它包括：

- 一个带有 `src/` 目录的基本项目结构。
- 通过 `@ai-sdk/openai` 与 OpenAI API 集成。
- 使用 `ai` 和 `zod` 生成结构化输出的示例。
- 使用 Rslib 和 Vitest 进行构建和测试的配置。

开发人员可以通过在 `src/` 目录中添加自己的提示、模型和应用程序逻辑来扩展此模板。

## 🤝 贡献指南

欢迎贡献，非常感谢您的支持！请按照以下步骤进行贡献：

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开Pull Request

## 📄 许可证

根据MIT许可证分发。有关更多信息，请参见 `LICENSE` 文件。

## 👤 作者

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **主页:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **问题:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

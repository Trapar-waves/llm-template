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

- **类型安全:** 基于TypeScript实现编译时类型检查，提升代码可维护性。
- **运行时验证:** Zod模式验证确保API端点和模型交互的数据完整性。
- **快速开发:** 基于Vite的开发服务器，配备HMR（热模块替换），迭代过程中提供即时反馈。
- **测试驱动:** 集成Vitest进行快速单元测试，确保从开发到生产的代码可靠性。
- **AI就绪:** 预配置AI SDK（`@ai-sdk/openai`、`ai`），实现无缝LLM集成和工作流自动化。
- **跨平台路径:** `pathe`用于在Windows/macOS/Linux环境中实现一致的路径处理。
- **代码一致性:** Prettier格式化和Antfu的ESLint规则强制标准化代码风格。
- **环境管理:** `dotenv`用于安全配置API密钥和环境特定设置。

## 💻 技术栈

- **开发工具:** 提供TypeScript语言支持、Vite开发服务器和Rslib构建工具，实现严格类型检查、快速热模块替换和优化的生产构建。
- **AI集成:** 集成OpenAI API客户端和AI工作流工具，支持大型语言模型交互和AI驱动的功能开发。
- **验证与质量:** 包含Zod运行时模式验证、ESLint代码质量检查和Prettier格式化工具，确保代码完整性和一致性。
- **开发辅助:** 包含Vitest测试框架、Pathe路径处理、Dotenv环境变量管理等开发工具，支持全面的项目需求。

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

## 🤝 贡献指南

欢迎贡献，非常感谢您的支持！请按照以下步骤进行贡献：

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开Pull Request

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **仓库:** [https://github.com/llm-template/Trapar-waves](https://github.com/llm-template/Trapar-waves)
- **主页:** [https://github.com/llm-template/Trapar-waves](https://github.com/llm-template/Trapar-waves)
- **问题:** [https://github.com/llm-template/Trapar-waves/issues](https://github.com/llm-template/Trapar-waves/issues)

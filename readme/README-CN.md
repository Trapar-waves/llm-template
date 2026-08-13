# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/github/license/Trapar-waves/llm-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/llm-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 一个生产就绪的 LLM（大型语言模型）应用开发模板，集成 AI 工具、TypeScript 类型安全、Zod 验证和现代开发工具。

![llm-template hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **类型安全：** 利用 TypeScript 提高代码质量并减少运行时错误。
- **快速开发工作流：** 利用 Vite 实现快速服务器启动和热模块替换。
- **优化构建：** 采用 Rslib 进行高效的库打包和优化的生产输出。
- **AI 集成：** 预配置了 `@ai-sdk/openai` 和 `ai`，便于与大型语言模型无缝交互。
- **强大的验证：** 利用 Zod 进行运行时模式验证，确保数据完整性。
- **注重测试：** 包含 Vitest，用于快速可靠的单元测试。
- **代码一致性：** 使用 Prettier 和 Antfu 的 ESLint 配置强制执行代码风格和质量。
- **环境管理：** 使用 `dotenv` 安全配置 API 密钥和特定于环境的设置。
- **跨平台路径：** 使用 `pathe` 实现跨不同操作系统的统一文件路径处理。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **语言：** TypeScript
- **LLM 框架：** AI SDK (`@ai-sdk/openai`, `ai`)
- **验证：** Zod
- **测试框架：** Vitest
- **构建工具：** Rslib
- **开发服务器：** Vite
- **代码质量：** ESLint（Antfu 配置），Prettier
- **实用工具：** Dotenv，Pathe

查看 [package.json](../package.json) 获取完整的依赖列表。

![Getting Started](../assets/readme/headers/getting-started.svg)

## 前置条件

- Node.js（推荐 >= 18.x）
- 包管理器（npm、yarn 或 pnpm）

## 安装

1. 使用模板创建新项目：

   ```bash
   pnpm create trapar-waves
   ```

2. 导航到项目目录并安装依赖：

   ```bash
   pnpm install
   ```

3. 启动开发服务器：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── src/                # 源代码
│   ├── model/          # LLM 模型配置与交互
│   ├── prompt/         # 提示词模板和测试数据
│   └── index.ts        # 入口点
├── tests/              # 单元测试
├── rslib.config.ts     # Rslib 配置
├── vitest.config.ts    # Vitest 配置
├── tsconfig.json       # TypeScript 配置
├── eslint.config.js    # ESLint 配置
└── package.json        # 项目依赖和脚本
```

![Contributing](../assets/readme/headers/contributing.svg)

欢迎贡献，非常感谢！请按照以下步骤贡献：

1. Fork 仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub 主页：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库：** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Issues：** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

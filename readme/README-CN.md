# @trapar-waves/llm-template

![npm 月下载量](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm 月下载量](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![许可证](https://img.shields.io/badge/license-MIT-green)
![GitHub 上次提交](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)

> 一个用于构建大语言模型（LLM）应用程序的项目模板。

## ✨ 特性

- **类型安全:** 使用 TypeScript（通过 `typescript`）提高代码质量，减少运行时错误。
- **Zod 验证:** 使用 Zod (`zod`) 实现强大的运行时数据验证和模式定义。
- **快速开发流程:** 借助 Vite (`vite`) 实现快速服务器启动以及开发中的热模块替换。
- **测试支持:** 包含 Vitest (`vitest`) 用于单元测试，显示对代码可靠性的重视。
- **人工智能集成:** 内置专注于人工智能的库，如 `@ai-sdk/openai` 和 `ai`，表明对大语言模型或 AI 驱动工作流集成的关注。
- **高效的路径管理:** 使用 `pathe` 进行跨平台路径操作，确保文件处理的一致性。
- **代码格式化:** 使用 Prettier (`prettier`) 实现一致的代码格式化，提高代码的可读性和可维护性。
- **环境变量管理:** 包含 `dotenv` 用于管理环境变量，方便配置不同环境（开发、生产等）。
- **代码质量检查:** 集成了 ESLint (`eslint`) 和 Antfu 的 ESLint 配置 (`@antfu/eslint-config`)，确保编码标准和最佳实践的执行。

## 🚀 快速入门

按照以下说明在本地运行该项目。

### 前置条件

- 确保已安装以下内容：
  - Node.js（例如：>= 18.x 版本）
  - 包管理器（npm、yarn 或 pnpm）
  ```bash
  node -v
  npm -v # 或 yarn -v 或 pnpm -v
  ```

### 安装

1. 克隆仓库：
   ```bash
   git clone https://github.com/Trapar-waves/llm-template.git
   cd @trapar-waves/llm-template
   ```
2. 安装依赖：
   ```bash
   # 使用你喜欢的包管理器
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

## 🛠️ 使用方法

安装完成后，以下是运行和使用该项目的步骤。

### 可用脚本

通过 `npm run <script>`、`yarn <script>` 或 `pnpm <script>` 可运行常用脚本：

- `build`: 使用 `rslib build` 构建项目。
- `build:watch`: 监听文件变化并使用 `rslib build --watch` 自动重新构建项目。

示例：

```bash
# 构建项目
npm run build

# 监听并重新构建
npm run build:watch
```

## 💻 技术栈

该项目使用的关键技术包括：

- **框架/库:** 模块化的 JavaScript/TypeScript 设置（由 `type: "module"` 指示）。
- **人工智能集成:** 如 `@ai-sdk/openai` 和 `ai` 等库，用于与大语言模型协作。
- **验证:** Zod (`zod`) 用于运行时类型验证。
- **构建工具:** Rslib (`@rslib/core`) 用于构建和打包项目。
- **测试:** Vitest (`vitest`) 用于单元测试。
- **样式和格式化:** Prettier (`prettier`) 用于一致的代码格式化。
- **语言:** TypeScript (`typescript`) 用于类型安全。
- **环境变量管理:** Dotenv (`dotenv`) 用于管理环境变量。

更多依赖项，请查看 [package.json](package.json) 文件。

## 🤝 贡献

欢迎贡献！

## 📄 许可证

该项目基于 **MIT** 许可证分发。更多信息，请参阅 `LICENSE` 文件。

## 👤 作者

- **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
- GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **主页:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **问题:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

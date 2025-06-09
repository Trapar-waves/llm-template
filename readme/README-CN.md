# @trapar-waves/llm-template

![npm 版本](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm 月下载量](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![许可证](https://img.shields.io/badge/license-MIT-green)
![GitHub 上次提交](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)

[英文](../README.md) | [日文](README-JP.md) | [俄文](README-RU.md)

> 一个面向大语言模型（LLM）应用开发的生产就绪模板，集成AI工具、TypeScript类型安全、Zod验证及现代开发工具链。

## ✨ 核心特性

- **类型安全**：由TypeScript驱动，提供编译时类型检查，增强代码可维护性。
- **运行时验证**：Zod模式验证确保API端点和模型交互的数据完整性。
- **快速开发**：基于Vite的开发服务器支持HMR（热模块替换），提供即时迭代反馈。
- **测试驱动**：集成Vitest实现快速单元测试，保障从开发到生产的代码可靠性。
- **AI就绪**：预配置AI SDK（`@ai-sdk/openai`、`ai`），支持大语言模型无缝集成与工作流自动化。
- **跨平台路径**：`pathe`实现Windows/macOS/Linux环境下的一致路径处理。
- **代码一致性**：Prettier格式化与Antfu的ESLint规则强制统一代码风格。
- **环境管理**：`dotenv`安全配置API密钥及环境特定设置。

## 🚀 快速开始

按照以下步骤在本地运行项目。

### 前置要求

- 确保已安装以下工具：
  - Node.js（如：>= 18.x）
  - 包管理器（npm、yarn或pnpm）
  ```bash
  node -v
  npm -v # 或 yarn -v / pnpm -v
  ```

### 安装

1. 克隆仓库：
   ```bash
   git clone https://github.com/Trapar-waves/llm-template.git
   cd @trapar-waves/llm-template
   ```
2. 安装依赖：
   ```bash
   # 使用偏好的包管理器
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

## 🛠️ 使用说明

安装后，以下是项目运行和使用方法。

### 可用脚本

通过`npm run <script>`、`yarn <script>`或`pnpm <script>`运行常用脚本：

- `build`：使用`rslib build`构建项目。
- `build:watch`：监听文件变化并通过`rslib build --watch`自动重建。

示例：

```bash
# 构建项目
npm run build

# 监听并自动重建
npm run build:watch
```

## 💻 技术栈

支撑模板的核心技术：

### 开发工具

- **语言**：TypeScript（严格类型检查）
- **开发服务器**：Vite（快速HMR与模块打包）
- **构建工具**：Rslib（`@rslib/core`）优化生产构建

### AI集成

- `@ai-sdk/openai`：用于大语言模型交互的OpenAI API客户端
- `ai`：构建AI驱动工作流的工具集

### 验证与质量

- `zod`：运行时模式验证保障数据完整性
- `eslint` + `@antfu/eslint-config`：代码质量强制检查
- `prettier`：统一代码格式化

### 工具链

- `vitest`：快速单元测试框架
- `pathe`：跨平台路径操作
- `dotenv`：环境变量管理

完整依赖列表见[package.json](package.json)。

## 🤝 贡献

欢迎贡献代码！

## 📄 许可证

项目采用**MIT许可证**分发。详见`LICENSE`文件获取更多信息。

## 👤 作者

- **Rikka**（[admin@rikka.cc](mailto:admin@rikka.cc)）
- GitHub：[@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库**：[https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **主页**：[https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **问题追踪**：[https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

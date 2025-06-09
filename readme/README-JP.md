# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)

[English](../README.md) | [中文](README-CN.md) | [Русский](README-RU.md)

> 大規模言語モデル（LLM）アプリケーション開発用の本番環境対応テンプレートです。AIツール、TypeScriptの型安全性、Zod検証、最新の開発ユーティリティを統合しています。

## ✨ 主な特徴

- **型安全性:** TypeScriptによるコンパイル時型チェックで、コードの保守性を向上させます。
- **実行時検証:** Zodスキーマ検証により、APIエンドポイントやモデル間のデータ整合性を保証します。
- **高速開発:** HMR（ホットモジュール置換）付きのViteベース開発サーバーで、反復開発時に即座のフィードバックを得られます。
- **テスト駆動:** 高速ユニットテスト用のVitestを統合し、開発から本番までのコード信頼性を確保します。
- **AI対応:** LLM統合とワークフロー自動化をスムーズに行うため、AI SDK（`@ai-sdk/openai`、`ai`）を事前設定しています。
- **クロスプラットフォームパス処理:** Windows/macOS/Linux環境で一貫したパス操作を実現する`pathe`を採用。
- **コード統一性:** PrettierフォーマットとAntfuのESLintルールで、標準化されたコードスタイルを強制します。
- **環境管理:** APIキーや環境固有設定の安全な管理に`dotenv`を使用します。

## 🚀 始め方

プロジェクトをローカルで実行する手順を以下に示します。

### 前提条件

以下がインストールされていることを確認してください：

- Node.js（例：>= 18.x）
- パッケージマネージャ（npm、yarn、またはpnpm）
  ```bash
  node -v
  npm -v # または yarn -v / pnpm -v
  ```

### インストール

1. リポジトリをクローン：
   ```bash
   git clone https://github.com/Trapar-waves/llm-template.git
   cd @trapar-waves/llm-template
   ```
2. 依存関をインストール：
   ```bash
   # 好みのパッケージマネージャを使用
   npm install
   # または
   yarn install
   # または
   pnpm install
   ```

## 🛠️ 使用方法

インストール後のプロジェクトの実行方法を説明します。

### 利用可能なスクリプト

`npm run <script>`、`yarn <script>`、または`pnpm <script>`で利用可能な共通スクリプト：

- `build`: `rslib build`を使用してプロジェクトをビルドします。
- `build:watch`: ファイル変更を監視し、`rslib build --watch`で自動再ビルドします。

例：

```bash
# プロジェクトをビルド
npm run build

# 変更を監視して再ビルド
npm run build:watch
```

## 💻 技術スタック

テンプレートを支えるコアテクノロジー：

### 開発

- **言語:** TypeScript（厳格な型チェック）
- **開発サーバー:** Vite（高速HMRとモジュールバンドリング）
- **ビルドツール:** 最適化された本番ビルド用のRslib（`@rslib/core`）

### AI統合

- `@ai-sdk/openai`: LLMとの対話用OpenAI APIクライアント
- `ai`: AI駆動ワークフロー構築用ユーティリティ

### 検証・品質

- `zod`: データ整合性のための実行時スキーマ検証
- `eslint` + `@antfu/eslint-config`: コード品質管理
- `prettier`: 一貫したコードフォーマット

### ツール

- `vitest`: 高速ユニットテストフレームワーク
- `pathe`: クロスプラットフォームパス操作
- `dotenv`: 環境変数管理

完全な依存リストは[package.json](package.json)を参照してください。

## 🤝 貢献

貢献を歓迎します！

## 📄 ライセンス

**MIT**ライセンスの下で配布されています。詳細は`LICENSE`ファイルを参照してください。

## 👤 作者

- **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
- GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **ホームページ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **イシュー:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

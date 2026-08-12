# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/github/license/Trapar-waves/llm-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/llm-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> 本番環境対応の LLM（大規模言語モデル）アプリケーション開発テンプレート。AI ツール、TypeScript の型安全性、Zod バリデーション、モダンな開発ユーティリティを統合。

![llm-template hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **型安全性：** TypeScript を活用してコード品質を向上させ、実行時エラーを削減。
- **高速開発ワークフロー：** Vite を活用したサーバーの高速起動とホットモジュール置換。
- **最適化ビルド：** Rslib を使用した効率的なライブラリバンドルと最適化された本番出力。
- **AI 統合：** `@ai-sdk/openai` と `ai` を事前設定し、大規模言語モデルとのシームレスな連携を実現。
- **堅牢な検証：** Zod を活用した実行時スキーマ検証でデータの整合性を確保。
- **テスト重視：** Vitest による高速で信頼性の高いユニットテスト。
- **コード一貫性：** Prettier と Antfu の ESLint 設定でコードスタイルと品質を強制。
- **環境管理：** `dotenv` を使用した API キーと環境固有設定の安全な構成。
- **クロスプラットフォームパス：** `pathe` を使用した OS 間一貫したファイルパス処理。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **言語：** TypeScript
- **LLM フレームワーク：** AI SDK (`@ai-sdk/openai`, `ai`)
- **検証：** Zod
- **テストフレームワーク：** Vitest
- **ビルドツール：** Rslib
- **開発サーバー：** Vite
- **コード品質：** ESLint（Antfu 設定）、Prettier
- **ユーティリティ：** Dotenv、Pathe

依存関係の完全なリストは [package.json](../package.json) を参照してください。

![Getting Started](../assets/readme/headers/getting-started.svg)

### 前提条件

- Node.js（>= 18.x 推奨）
- パッケージマネージャー（npm、yarn、または pnpm）

### インストール

1. テンプレートを使用して新しいプロジェクトを作成：

   ```bash
   pnpm create trapar-waves
   ```

2. プロジェクトディレクトリに移動し、依存関係をインストール：

   ```bash
   pnpm install
   ```

3. 開発サーバーを起動：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── src/                # ソースコード
│   ├── model/          # LLM モデル設定とインタラクション
│   ├── prompt/         # プロンプトテンプレートとテストデータ
│   └── index.ts        # エントリーポイント
├── tests/              # ユニットテスト
├── rslib.config.ts     # Rslib 設定
├── vitest.config.ts    # Vitest 設定
├── tsconfig.json       # TypeScript 設定
├── eslint.config.js    # ESLint 設定
└── package.json        # プロジェクトの依存関係とスクリプト
```

![Contributing](../assets/readme/headers/contributing.svg)

コントリビュートを歓迎します！以下の手順に従ってください：

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. Pull Request を作成

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub プロフィール：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ：** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Issues：** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

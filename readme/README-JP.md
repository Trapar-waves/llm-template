# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/github/license/Trapar-waves/llm-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/llm-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [Русский язык](/readme/README-RU.md)

> 本番環境に対応したLLM（大規模言語モデル）アプリケーション開発用テンプレートで、AIツール、TypeScriptの型安全性、Zodバリデーション、および現代的な開発ユーティリティを統合しています。

## ✨ 特徴

- **型安全性:** TypeScriptを活用してコードの品質を向上させ、実行時エラーを削減します。
- **高速開発ワークフロー:** Viteを活用して、サーバーの高速起動とホットモジュール置換を実現します。
- **最適化ビルド:** Rslibを使用して、効率的なライブラリバンドルと最適化された本番出力を実現します。
- **AI統合:** `@ai-sdk/openai` および `ai` を事前設定し、大規模言語モデルとのシームレスな相互作用を可能にします。
- **堅牢な検証:** Zodを活用して、実行時のスキーマ検証を行い、データの整合性を確保します。
- **テスト重視:** Vitestを含めて、高速で信頼性の高いユニットテストを実現します。
- **コード一貫性:** PrettierとAntfuのESLint設定を使用して、コードスタイルと品質を強制的に統一します。
- **環境管理:** `dotenv` を使用して、APIキーと環境固有の設定を安全に構成します。
- **クロスプラットフォームパス:** `pathe` を使用して、さまざまなオペレーティングシステム間で一貫したファイルパス処理を実現します。

## 💻 技術スタック

このプロジェクトで使用されている主要な技術は以下の通りです。

- **言語:** TypeScript
- **LLMフレームワーク:** AI SDK (`@ai-sdk/openai`, `ai`)
- **検証:** Zod
- **テストフレームワーク:** Vitest
- **ビルドツール:** Rslib
- **開発サーバー:** Vite
- **コード品質:** ESLint (Antfuの設定), Prettier
- **ユーティリティ:** Dotenv, Pathe

依存関係の完全なリストについては、[package.json](package.json) を参照してください。

## 🚀 始め方

以下の手順に従って、プロジェクトをローカルで実行してください。

### 前提条件

以下がインストールされていることを確認してください。

- Node.js (推奨バージョン >= 18.x)
- パッケージマネージャー (npm, yarn または pnpm)

```bash
node -v
npm -v
```

### インストール

スクリプトの実行

```bash
pnpm create trapar-waves
```

依存関係のインストール

```bash
npm install
yarn install
pnpm install
```

### 利用可能なスクリプト

`npm run <script>`、`yarn <script>`、または `pnpm <script>` で利用可能な一般的なスクリプト:

- `build`: Rslib を使用して、本番環境に対応したビルドを作成します。
- `build:watch`: Rslib を使用して、ウォッチモードで本番環境に対応したビルドを作成します。
- `lint`: ESLint を使用して、コードのスタイルとエラーをチェックします。

例:

```bash
# 本番ビルドの作成
npm run build
```

## 🛠️ 使用方法

このテンプレートは、LLMアプリケーションの構築のための基本的な構造を提供します。これには以下が含まれます。

- `src/` ディレクトリを持つ基本的なプロジェクト構造。
- `@ai-sdk/openai` を介したOpenAI APIとの統合。
- `ai` および `zod` を使用した構造化された出力の生成例。
- Rslib および Vitest を使用したビルドおよびテストの設定。

開発者は、`src/` ディレクトリ内に独自のプロンプト、モデル、およびアプリケーションロジックを追加して、このテンプレートを拡張できます。

## 🤝 コントリビューション

貢献は歓迎され、非常に高く評価されています！貢献するには以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/amazing-feature`）
3. 変更をコミットする（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュする（`git push origin feature/amazing-feature`）
5. Pull Requestを開く

## 📄 ライセンス

MITライセンスの下で配布されています。詳細については `LICENSE` ファイルを参照してください。

## 👤 作者

- **Rikka:** (admin@rikka.cc)
- **GitHub プロフィール:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **ホームページ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **課題:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

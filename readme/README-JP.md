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

- **型安全性:** TypeScriptによるコンパイル時型チェックを実現し、コードの保守性を向上させます。
- **ランタイムバリデーション:** Zodスキーマバリデーションにより、APIエンドポイントとモデル間のデータ整合性を確保します。
- **迅速な開発:** Viteベースの開発サーバーにHMR（ホットモジュール置換）を搭載し、反復開発中の即時フィードバックを実現します。
- **テスト駆動:** Vitestを統合した高速ユニットテストにより、開発から本番環境までのコード信頼性を確保します。
- **AI対応:** AI SDK（`@ai-sdk/openai`、`ai`）を事前設定し、LLMとのシームレスな統合とワークフロー自動化を実現します。
- **クロスプラットフォームパス:** `pathe`によりWindows/macOS/Linux環境で一貫したパス処理を実現します。
- **コード一貫性:** PrettierフォーマットとAntfuのESLintルールにより標準化されたコードスタイルを強制します。
- **環境管理:** `dotenv`によりAPIキーと環境固有の設定を安全に構成します。

## 💻 技術スタック

- **開発:** TypeScript言語サポート、Vite開発サーバー、Rslibビルドツールを提供し、厳密な型チェック、高速なホットモジュール置換、最適化された本番ビルドを実現します。
- **AI統合:** OpenAI APIクライアントとAIワークフローユーティリティを統合し、大規模言語モデルの対話とAI駆動型機能開発をサポートします。
- **バリデーションと品質:** Zodランタイムスキーマバリデーション、ESLintコード品質強制、Prettierフォーマットツールを含み、コードの完全性と一貫性を確保します。
- **開発ユーティリティ:** Vitestテストフレームワーク、Patheパス操作、Dotenv環境変数管理などの開発ユーティリティを含み、包括的なプロジェクト要件をサポートします。

依存関係の完全なリストについては[package.json](package.json)を参照してください。

## 🚀 始め方

以下の手順に従ってプロジェクトをローカルで実行してください。

### 前提条件

以下がインストールされていることを確認してください：

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

## 🤝 コントリビューション

貢献は歓迎され、非常に高く評価されています！貢献するには以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/amazing-feature`）
3. 変更をコミットする（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュする（`git push origin feature/amazing-feature`）
5. Pull Requestを開く

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **リポジトリ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **ホームページ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **イシュー:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

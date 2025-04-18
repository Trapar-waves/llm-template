# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)

> 大規模な言語モデル（LLM）を活用したアプリケーション開発用のプロジェクトテンプレート。

## ✨ 主な特徴

- **型安全性:** TypeScriptを使用して、コード品質を向上させ、実行時エラーを最小限に抑えます。
- **Zodによる検証:** 実行時のデータ検証とスキーマ定義のためにZodを採用しています。
- **高速な開発フロー:** Viteを活用して、開発中の迅速なサーバー起動とホットモジュール交換を実現しています。
- **テスト対応:** Vitestを採用し、単体テストを通じてコードの信頼性を確保しています。
- **AI統合:** 大規模な言語モデルやAI駆動のワークフローとの統合をサポートするため、`@ai-sdk/openai`や`ai`などのライブラリを採用しています。
- **効率的なパス処理:** クロスプラットフォームでのパス操作のために`pathe`を使用し、環境間の一貫性のあるファイル処理を実現しています。
- **コードフォーマット:** Prettierを使用して、コードの可読性と保守性を向上させるための一貫したフォーマットを行っています。
- **環境構成:** 環境変数の管理には`dotenv`を採用し、開発・本番環境での設定を簡単に切り替えられるようにしています。
- **リンティングとコード品質:** ESLintとAntfuのESLint設定を使用して、コーディング標準とベストプラクティスを強制しています。

## 🚀 始め方

プロジェクトをローカルで動かすための手順を以下に示します。

### 必要条件

以下のソフトウェアがインストールされていることを確認してください：

- Node.js（例：>= 18.x）
- パッケージマネージャ（npm、yarn、またはpnpm）

```bash
node -v
npm -v # または yarn -v または pnpm -v
```

### インストール

1. リポジトリをクローンします：
   ```bash
   git clone https://github.com/Trapar-waves/llm-template.git
   cd @trapar-waves/llm-template
   ```
2. 依存関係をインストールします：
   ```bash
   # お好みのパッケージマネージャを使用してください
   npm install
   # または
   yarn install
   # または
   pnpm install
   ```

## 🛠️ 使用方法

インストール後、以下の手順でプロジェクトを実行できます。

### 利用可能なスクリプト

`npm run <script>`、`yarn <script>`、または`pnpm <script>`で使用可能な一般的なスクリプト：

- `build`: `rslib build`を使用してプロジェクトをビルドします。
- `build:watch`: ファイルの変更を監視し、`rslib build --watch`を使用して自動的にプロジェクトを再ビルドします。

例：

```bash
# プロジェクトをビルドします
npm run build

# 変更を監視して再ビルドします
npm run build:watch
```

## 💻 技術スタック

このプロジェクトで使用されている主な技術は以下の通りです。

- **フレームワーク/ライブラリ:** モジュール形式のJavaScript/TypeScriptセットアップ（`type: "module"`に対応）。
- **AI統合:** 大規模な言語モデルとの連携を実現するための`@ai-sdk/openai`や`ai`などのライブラリ。
- **検証:** 実行時型検証のためにZodを採用しています。
- **ビルドツール:** プロジェクトのビルドとパッケージングにはRslib（`@rslib/core`）を使用しています。このツールは効率的なビルドパイプラインを提供します。
- **テスト:** 単体テストにはVitestを使用しています。
- **スタイルとフォーマット:** 一貫したコードフォーマットのためにPrettierを採用しています。
- **言語:** 型安全性を確保するため、TypeScriptを使用しています。
- **環境管理:** 環境変数の管理にはDotenvを使用しています。

依存関係の完全なリストは[package.json](package.json)を参照してください。

## 🤝 貢献

貢献をお待ちしております。詳細は、リポジトリの[CONTRIBUTING.md](CONTRIBUTING.md)をご覧ください。

## 📄 ライセンス

このプロジェクトは**MIT**ライセンスの下で配布されています。詳細は`LICENSE`ファイルを参照してください。

## 👤 作者

- **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
- GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **ホームページ:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **問題:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

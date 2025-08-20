# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/github/license/Trapar-waves/llm-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/llm-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md)

> Шаблон для разработки приложений на основе LLM (больших языковых моделей) готовый к производству, интегрирующий AI-инструменты, безопасность типов TypeScript, валидацию Zod и современные утилиты для разработки.

## ✨ Особенности

- **Безопасность типов:** Использование TypeScript для повышения качества кода и снижения ошибок во время выполнения.
- **Быстрый рабочий процесс разработки:** Использование Vite для быстрого запуска сервера и горячей замены модулей.
- **Оптимизированные сборки:** Использование Rslib для эффективной сборки библиотек и оптимизированного вывода в производство.
- **Интеграция AI:** Предварительная настройка `@ai-sdk/openai` и `ai` для бесперебойного взаимодействия с большими языковыми моделями.
- **Надежная проверка:** Использование Zod для проверки схем во время выполнения, обеспечивая целостность данных.
- **Ориентация на тестирование:** Включение Vitest для быстрого и надежного модульного тестирования.
- **Единообразие кода:** Использование Prettier и конфигурации ESLint от Antfu для принудительного соблюдения стиля и качества кода.
- **Управление средой:** Использование `dotenv` для безопасной настройки ключей API и параметров, зависящих от среды.
- **Кроссплатформенные пути:** Использование `pathe` для согласованной обработки файловых путей в различных операционных системах.

## 💻 Технологический стек

Ключевые технологии, используемые в этом проекте:

- **Язык:** TypeScript
- **Фреймворк LLM:** AI SDK (`@ai-sdk/openai`, `ai`)
- **Проверка:** Zod
- **Фреймворк тестирования:** Vitest
- **Инструмент сборки:** Rslib
- **Сервер разработки:** Vite
- **Качество кода:** ESLint (конфигурация Antfu), Prettier
- **Утилиты:** Dotenv, Pathe

Полный список зависимостей см. в [package.json](package.json).

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально.

### Предварительные требования

Убедитесь, что у вас установлены следующие компоненты:

- Node.js (рекомендуется версия >= 18.x)
- Пакетный менеджер (npm, yarn или pnpm)

```bash
node -v
npm -v
```

### Установка

Запустить скрипт

```bash
pnpm create trapar-waves
```

Установить зависимости

```bash
npm install
yarn install
pnpm install
```

### Доступные скрипты

Общие скрипты, доступные через `npm run <script>`, `yarn <script>` или `pnpm <script>`:

- `build`: Создает готовую к производству сборку с использованием Rslib.
- `build:watch`: Создает готовую к производству сборку с использованием Rslib в режиме наблюдения.
- `lint`: Проверяет код на наличие стилевых ошибок и ошибок с использованием ESLint.

Пример:

```bash
# Создать производственную сборку
npm run build
```

## 🛠️ Использование

Этот шаблон предоставляет основную структуру для создания приложений LLM. Он включает:

- Базовую структуру проекта с каталогом `src/`.
- Интеграцию с OpenAI API через `@ai-sdk/openai`.
- Пример использования `ai` и `zod` для генерации структурированного вывода.
- Конфигурацию для сборки и тестирования с помощью Rslib и Vitest.

Разработчики могут расширить этот шаблон, добавив собственные подсказки, модели и логику приложения в каталог `src/`.

## 🤝 Участие в разработке

Вклад в проект приветствуется и очень ценится! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Распространяется по лицензии MIT. Дополнительную информацию см. в файле `LICENSE`.

## 👤 Автор

- **Rikka:** (admin@rikka.cc)
- **Профиль на GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Домашняя страница:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Проблемы:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

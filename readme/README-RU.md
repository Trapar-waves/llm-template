# @trapar-waves/llm-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/llm-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/llm-template)
![License](https://img.shields.io/github/license/Trapar-waves/llm-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/llm-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/llm-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Готовый к продакшну шаблон для разработки LLM (больших языковых моделей) приложений, интегрирующий AI-инструменты, типобезопасность TypeScript, валидацию Zod и современные утилиты для разработки.

![llm-template hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **Типобезопасность:** Использование TypeScript для повышения качества кода и снижения ошибок во время выполнения.
- **Быстрый рабочий процесс разработки:** Использование Vite для быстрого запуска сервера и горячей замены модулей.
- **Оптимизированные сборки:** Использование Rslib для эффективной сборки библиотек и оптимизированного вывода в продакшн.
- **Интеграция AI:** Предварительная настройка `@ai-sdk/openai` и `ai` для бесперебойного взаимодействия с большими языковыми моделями.
- **Надёжная валидация:** Использование Zod для проверки схем во время выполнения, обеспечивая целостность данных.
- **Ориентация на тестирование:** Включение Vitest для быстрого и надёжного модульного тестирования.
- **Единообразие кода:** Использование Prettier и конфигурации ESLint от Antfu для соблюдения стиля и качества кода.
- **Управление окружением:** Использование `dotenv` для безопасной настройки API-ключей и параметров окружения.
- **Кроссплатформенные пути:** Использование `pathe` для согласованной обработки файловых путей в различных операционных системах.

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **Язык:** TypeScript
- **LLM фреймворк:** AI SDK (`@ai-sdk/openai`, `ai`)
- **Валидация:** Zod
- **Фреймворк тестирования:** Vitest
- **Инструмент сборки:** Rslib
- **Сервер разработки:** Vite
- **Качество кода:** ESLint (конфигурация Antfu), Prettier
- **Утилиты:** Dotenv, Pathe

Полный список зависимостей смотрите в [package.json](../package.json).

![Getting Started](../assets/readme/headers/getting-started.svg)

## Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn или pnpm)

## Установка

1. Создайте новый проект с помощью шаблона:

   ```bash
   pnpm create trapar-waves
   ```

2. Перейдите в директорию проекта и установите зависимости:

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── src/                # Исходный код
│   ├── model/          # Конфигурация и взаимодействие с LLM моделью
│   ├── prompt/         # Шаблоны промптов и тестовые данные
│   └── index.ts        # Точка входа
├── tests/              # Юнит-тесты
├── rslib.config.ts     # Конфигурация Rslib
├── vitest.config.ts    # Конфигурация Vitest
├── tsconfig.json       # Конфигурация TypeScript
├── eslint.config.js    # Конфигурация ESLint
└── package.json        # Зависимости и скрипты проекта
```

![Contributing](../assets/readme/headers/contributing.svg)

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Issues:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

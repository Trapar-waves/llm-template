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

- **Безопасность типов:** Использует TypeScript для проверки типов на этапе компиляции и повышения поддерживаемости кода.
- **Валидация во время выполнения:** Валидация схемы Zod гарантирует целостность данных между конечными точками API и взаимодействием с моделями.
- **Быстрая разработка:** Сервер разработки на основе Vite с HMR (горячая замена модулей) для мгновенного отзыва во время итераций.
- **Тест-ориентированный подход:** Интегрированный Vitest для быстрого модульного тестирования, обеспечивающий надежность кода от разработки до производства.
- **Готовность к AI:** Предварительно настроен с AI SDK (`@ai-sdk/openai`, `ai`) для бесперебойной интеграции LLM и автоматизации рабочего процесса.
- **Кроссплатформенные пути:** `pathe` для согласованной обработки путей в средах Windows/macOS/Linux.
- **Консистентность кода:** Форматирование Prettier и правила ESLint от Antfu обеспечивают стандартизированный стиль кода.
- **Управление окружением:** `dotenv` для безопасной конфигурации ключей API и настроек, специфичных для окружения.

## 💻 Технологический стек

- **Разработка:** Предоставляет поддержку языка TypeScript, сервер разработки Vite и инструменты сборки Rslib для строгой проверки типов, быстрой горячей замены модулей и оптимизированных производственных сборок.
- **Интеграция AI:** Интегрирует клиент API OpenAI и утилиты для рабочих процессов AI для поддержки взаимодействия с большими языковыми моделями и разработки функций на базе AI.
- **Валидация и качество:** Включает рантаймовую валидацию схем Zod, обеспечение качества кода ESLint и инструменты форматирования Prettier для обеспечения целостности и согласованности кода.
- **Утилиты разработки:** Содержит тестовый фреймворк Vitest, манипуляцию путями Pathe, управление переменными окружения Dotenv и другие утилиты разработки для поддержки комплексных требований проекта.

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

## 🤝 Участие в разработке

Вклад в проект приветствуется и очень ценится! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Репозиторий:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Домашняя страница:** [https://github.com/Trapar-waves/llm-template](https://github.com/Trapar-waves/llm-template)
- **Проблемы:** [https://github.com/Trapar-waves/llm-template/issues](https://github.com/Trapar-waves/llm-template/issues)

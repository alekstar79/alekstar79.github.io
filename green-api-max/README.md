# MAX Text Chat via GREEN-API

Минимальный React-интерфейс для отправки и получения текстовых сообщений в MAX через GREEN-API.

## Технологии

- React 19, TypeScript 6, Vite 8
- GREEN-API HTTP API
- Vitest и React Testing Library

## Архитектура

Проект построен по методологии Feature-Sliced Design:

- `app/` — корневая композиция и провайдеры
- `entities/` — бизнес-сущности (чат, сообщение, credentials)
- `features/` — пользовательские сценарии (подключение, создание чата, отправка, получение, тема)
- `widgets/` — композитные блоки UI (chat-workspace)
- `shared/` — переиспользуемое (API-клиент, утилиты, базовые компоненты)

Стилизация — CSS Modules с design-токенами в CSS-переменных.
Состояние — локальные хуки + 3 контекста (chat / composer / dialog).
Тесты — 51 тест на Vitest + React Testing Library.

## Перед запуском

- Node.js 24 или совместимая актуальная версия
- npm 11
- Доступ к GREEN-API instance и зарегистрированному аккаунту MAX

## Локальный запуск

```sh
npm install
npm run dev
```

Vite покажет локальный адрес приложения. Введите `idInstance` и `apiTokenInstance` в форме подключения. Приложение хранит их только в памяти вкладки.

## Настройка API host

В `.env.local` задается `VITE_API_URL`. Для этого checkout используется host инстанса из кабинета. Если переменная не задана, приложение использует `https://api.green-api.com/v3`. Пустое шаблонное значение тоже переключает приложение на fallback.

`ID_INSTANCE` и `API_TOKEN_INSTANCE` из `.env.local` не читаются приложением. Они предназначены только для локальных smoke checks из терминала. Реальные значения нельзя коммитить. Файл `.env.local` игнорируется Git.

`.env.example` содержит только пустые шаблонные значения. Не заменяйте существующий `.env.local` копией шаблона.

## Настройка получения сообщений

Для HTTP API GREEN-API у инстанса должен быть пустой `webhookUrl` и включен `incomingWebhook`.

## Команды

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

## Сборка и деплой

Два режима сборки:

Локальная (base `/`):

```sh
npm run build
npm run preview
```

Preview: http://localhost:4173/

Для GitHub Pages (base `/green-api-max/`):

```sh
npm run build:pages
npm run preview:pages
```

Preview: http://localhost:4173/green-api-max/

Деплой: содержимое `dist/` копируется в подпапку `green-api-max/` репозитория `alekstar79.github.io`, затем выполняется `git push`.
Живой сервис: https://alekstar79.github.io/green-api-max/

## Ограничения

- История хранится в памяти вкладки и не загружается из журнала GREEN-API.
- В одном окне открыт один диалог.
- Отображаются только входящие текстовые уведомления; прочие типы подтверждаются и не показываются.
- Ответ `SendMessage` трактуется как принятие API, а не гарантия доставки.

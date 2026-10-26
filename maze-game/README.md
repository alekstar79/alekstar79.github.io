# Maze Game

[![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![HTML5 Canvas](https://img.shields.io/badge/HTML5-Canvas-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/API/Canvas_API)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
![i18n](https://img.shields.io/badge/i18n-en%20%7C%20ru-0078D4)
[![License: Private](https://img.shields.io/badge/License-Private-lightgrey)](#лицензия)

![MAZE](maze.jpeg)

[**Live Demo**](https://alekstar79.github.io/maze-game)

**Maze Game** — браузерная игра-лабиринт на TypeScript (ESM). Клиентское приложение без backend: генерация лабиринта, управление игроком с клавиатуры, таймер в двух режимах, автопоиск пути в Demo, локальная статистика, переключаемые тема и язык, доступность через `aria-live` / `role` / управление фокусом.

## Содержание

<!-- TOC -->
* [Maze Game](#maze-game)
  * [Содержание](#содержание)
  * [Демо и интерактивные диаграммы](#демо-и-интерактивные-диаграммы)
  * [Возможности](#возможности)
  * [Технологический стек](#технологический-стек)
  * [Архитектура](#архитектура)
    * [Слои](#слои)
    * [Границы ответственности](#границы-ответственности)
    * [Поток данных при старте](#поток-данных-при-старте)
    * [Смена темы и языка](#смена-темы-и-языка)
    * [Фазовая модель](#фазовая-модель)
  * [Модель игры](#модель-игры)
    * [Лабиринт](#лабиринт)
    * [Режимы таймера](#режимы-таймера)
    * [Сложность](#сложность)
    * [Лимит времени](#лимит-времени)
    * [Порог «мало времени»](#порог-мало-времени)
  * [Как играть](#как-играть)
  * [Модули](#модули)
  * [Структура проекта](#структура-проекта)
  * [Быстрый старт](#быстрый-старт)
    * [Требования](#требования)
    * [Установка и запуск](#установка-и-запуск)
    * [Production-сборка](#production-сборка)
  * [Скрипты](#скрипты)
  * [Хранение данных](#хранение-данных)
  * [Доступность и темы](#доступность-и-темы)
  * [Документация в коде](#документация-в-коде)
  * [Лицензия](#лицензия)
<!-- TOC -->

## Демо и интерактивные диаграммы

Проект содержит три самодостаточные HTML-диаграммы. Каждая открывается напрямую в браузере без сборки и без дополнительных зависимостей, а её исходные данные лежат в одноимённом `candidate.json`.

| Диаграмма                                                                                       | Что показывает                                                                                                  | Данные                                                   |
|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| **[Архитектура](https://alekstar79.github.io/maze-game/diagrams/architecture/index.html)**      | Компонентная архитектура: слои, границы модулей, потоки данных, хранилища                                       | [`candidate.json`](diagrams/architecture/candidate.json) |
| **[Жизненный цикл игры](https://alekstar79.github.io/maze-game/diagrams/lifecycle/index.html)** | Переходы фазовой модели `idle → playing → finished`, связь с таймером и статистикой                             | [`candidate.json`](diagrams/lifecycle/candidate.json)    |
| **[Цикл обработки хода](https://alekstar79.github.io/maze-game/diagrams/sequence/index.html)**  | Последовательность `handleKeyDown` → `resolveMove` → `isPassable` → точечная перерисовка → `isAtExit` → `onWin` | [`candidate.json`](diagrams/sequence/candidate.json)     |

Все диаграммы составлены по актуальному коду и отражают фактические зависимости между модулями.

## Возможности

- **Два режима таймера:** `Demo` (свободная игра, отсчёт вверх) и `Timed` (обратный отсчёт до эмпирического лимита).
- **Три сложности:** `Easy` / `Medium` / `Hard` — влияют на лимит времени в режиме `Timed`.
- **Автопоиск пути** (BFS) в режиме `Demo` — по кнопке `Solve` или клавише `S`.
- **Статистика в `localStorage`:** количество завершённых игр, суммарное время, лучшее время для каждой пары (сложность × режим).
- **Аккаунт-«сессия»:** имя игрока хранится в `sessionStorage`, переживает F5, но не закрытие вкладки; у гостя — отдельный слот статистики.
- **Тема:** `system` / `light` / `dark` с учётом `prefers-color-scheme` и с явным `data-theme`.
- **Локализация:** `en` / `ru` (fallback — `en`), форматирование чисел и длительностей через `Intl`.
- **Доступность:** skip-link, `aria-live`, `role="status"`, `role="timer"`, нативный `<dialog>`, управление фокусом при открытии модалки и смене селектов.
- **Адаптивная вёрстка:** CSS cascade layers, дизайн-токены, container queries, `:has()`, `color-mix`, `prefers-reduced-motion`, прогрессивные View Transitions.
- **Публичный контракт модулей** зафиксирован в [`API.md`](API.md).

## Технологический стек

| Категория           | Технология / инструмент                  | Версия  | Где используется                                                                  |
|---------------------|------------------------------------------|---------|-----------------------------------------------------------------------------------|
| Язык                | TypeScript                               | `7.0.2` | Весь `src/` (`strict: true`, `target: ES2022`, `moduleResolution: Bundler`)       |
| Сборка / dev-server | Vite                                     | `8.3.0` | `npm run dev`, `npm run build`, `npm run preview`                                 |
| Рендеринг           | HTML5 Canvas 2D                          | —       | `src/app/renderer.ts`, `src/app/game.ts`                                          |
| Хранилища           | Web Storage API                          | —       | `localStorage` / `sessionStorage` (см. [Хранение данных](#хранение-данных))       |
| Интернационализация | `Intl.NumberFormat`, собственный каталог | —       | `src/app/i18n.ts`, `src/locales/*.ts`                                             |
| Стили               | Современный CSS                          | —       | `src/styles/index.css` (cascade layers, токены, `@supports`, `:has`, `color-mix`) |
| Среда исполнения    | Node.js                                  | 20+     | Только для Vite и TypeScript-компилятора                                          |

## Архитектура

Приложение разделено на три слоя. Только `app/*` и `main.ts` знают про DOM и Canvas; `lib/*` — чистые модули и работа с Web Storage API. Визуализация слоёв и потоков данных — в [архитектурной диаграмме](diagrams/architecture/index.html).

### Слои

- **Точка входа** (`src/main.ts`) — связывает DOM с игрой, таймером, статистикой и аккаунтом. Единственное место, где игровая фабрика встречается с таймером, статистикой и auth.
- **Presentation / wiring** (`src/app/*.ts`) — `game.ts` (игровая фабрика), `renderer.ts` (Canvas 2D), `theme.ts` (тема), `i18n.ts` (локализация).
- **Чистые модули** (`src/lib/*.ts`) — `constants.ts`, `grid.ts`, `search.ts`, `player.ts`, `timer.ts`, `stats.ts`, `auth.ts`, `difficulty.ts`. Без DOM/canvas/renderer; допускаются `performance.now()`, `setInterval`, `setTimeout`, `localStorage`, `sessionStorage`.
- **Каталоги локалей** (`src/locales/*.ts`) — `en.ts`, `ru.ts`.

### Границы ответственности

- `game.ts` владеет **состоянием** (сетка, позиция, фаза, `pathCells`, `allowSearch`) и **правилами** (перемещение, выход, автопоиск). Он **не** знает про таймер, статистику и auth — эти связи живут в `main.ts`.
- `renderer.ts` — только рисование. Единственный источник цветов — CSS-токены `--color-canvas-*`; рендерер получает их через колбэк `getColors()` при каждой отрисовке (см. `src/app/theme.ts`).
- `lib/*` не зависят от DOM/Canvas.

### Поток данных при старте

Обработчик `window.load` в `main.ts`:

1. `initI18n()` → `applyTranslations()` — статические `data-i18n*` в HTML получают переводы.
2. `initTheme()` — preference применяется к `<html data-theme>`.
3. `themeSelect.value = getThemePreference()` и `localeSelect.value = getLocale()` — селекты синхронизируются с фактическим состоянием.
4. `useMazeGame(canvas, { getColors: getCanvasColors, onStart, onWin })` — создаётся игровая фабрика.
5. `createTimer({ onTick, onExpire })` — таймер.
6. `applyUserGridSize()` — размеры лабиринта из `localStorage` (или дефолт 10×8), затем `game.reset()`.
7. `syncInputs()`, `updateAuthUI()`, `renderStats()`, `updateControls()`, `renderInitialStatus()`.

### Смена темы и языка

**Смена темы** (`themeSelect` → `change`):

1. `setThemePreference(value)` — пишет `localStorage['maze.theme']` и применяет `data-theme`.
2. `game.redraw()` — идемпотентная перерисовка без мутации `state`; читает актуальные `--color-canvas-*` через `getColors()`.
3. `themeSelect.blur()` — снимает фокус, чтобы стрелки дальше не меняли селект.

**Смена языка** (`localeSelect` → `change`):

1. `setLocale(value)` — пишет `localStorage['maze.locale']` и обновляет `lang` на `<html>`.
2. `applyTranslations()` — обновляет статические строки.
3. `renderStatus()`, `updateAuthUI()`, `renderStats()` — перерисовывает динамические строки (включая display-name гостя).

Полная последовательность обработки одного хода — в [sequence-диаграмме](diagrams/sequence/index.html).

### Фазовая модель

`MazeGameState.phase` (`src/app/game.ts`):

- `'idle'` — лабиринт сгенерирован и нарисован, управление отключено, ожидается `startGame()`.
- `'playing'` — игра активна: перемещения и (в Demo) автопоиск разрешены.
- `'finished'` — игра завершена (победа, таймаут или внешний `endGame()`); управление отключено до следующего `startGame()` / `reset()`.

Диаграмма переходов — **[lifecycle](diagrams/lifecycle/index.html)**. Связь фазы с таймером и статистикой:

| Переход              | Триггер                           | Побочные эффекты                                                                                  |
|----------------------|-----------------------------------|---------------------------------------------------------------------------------------------------|
| `idle → playing`     | `startGame()`                     | `onStart({ nx, ny, solutionLength })` → `main.ts` запускает таймер (`computeTimeLimit` в `timed`) |
| `playing → finished` | `isAtExit()` → `onWin()`          | `timer.stop()` + `recordWin(user, { difficulty, mode, elapsedMs })`                               |
| `playing → finished` | внешний `endGame()` (timeout)     | `setStatus('status.timeout', …, 'error')`                                                         |
| `finished → idle`    | `reset()` / `applyUserGridSize()` | `renderInitialStatus()`, `timerValue.textContent = formatDuration(0)`                             |

## Модель игры

### Лабиринт

- Генератор `generateMaze(nx, ny)` (`src/lib/grid.ts`) — итеративный рост из случайной клетки. После `nx * ny - 1` открытий сетка образует связное дерево, поэтому путь между любыми двумя клетками единственный.
- Сетка хранится как `number[][]`, где каждая клетка — битовая маска `WALL.TOP | WALL.LEFT | WALL.BOTTOM | WALL.RIGHT` (`1 | 2 | 4 | 8`).
- Размеры ограничены `LIMITS`: `3 ≤ nx ≤ 111`, `3 ≤ ny ≤ 80`.
- Выход — в правом столбце (`nx - 1`) на строке `exitY = floor(ny / 2)`.

### Режимы таймера

| Режим   | Поведение                               | Автопоиск (`Solve` / `S`) |
|---------|-----------------------------------------|---------------------------|
| `demo`  | Отсчёт вверх без ограничения            | Разрешён                  |
| `timed` | Обратный отсчёт до лимита, `onExpire()` | Запрещён                  |

Интервал тика таймера — `200 ms` (`TICK_INTERVAL_MS` в `src/lib/timer.ts`). В `timed` при `elapsed >= limitMs` вызывается `onTick({ remainingMs: 0 })`, затем `onExpire()`, и интервал снимается.

### Сложность

Сложность влияет только на лимит времени в режиме `timed` — через `TIMING.difficultyFactor`:

| Сложность | Множитель |
|-----------|-----------|
| `easy`    | `0.9`     |
| `medium`  | `0.6`     |
| `hard`    | `0.4`     |

### Лимит времени

`computeTimeLimit` (`src/lib/difficulty.ts`):

```
pathMs       = max(1, solutionLength) * TIMING.stepTimeMs
deadEndCells = max(0, nx * ny - solutionLength - 1)
exploreMs    = deadEndCells * TIMING.stepTimeMs * TIMING.exploreFraction
baseMs       = pathMs + exploreMs
limitMs      = max(TIMING.minTimeLimitMs, round(baseMs * difficultyFactor))
```

`TIMING` (`src/lib/constants.ts`):

```ts
stepTimeMs:      1000,
exploreFraction: 0.08,
minTimeLimitMs:  5000,
difficultyFactor: { easy: 0.9, medium: 0.6, hard: 0.4 }
```

Формула эмпирическая: она опирается на среднюю скорость принятия решений игроком, а не на «идеального» проходчика.

### Порог «мало времени»

`URGENT_RATIO = 0.2` в `src/main.ts`: класс `is-urgent` на `#timer-bar` включается, когда остаток в `timed` не превышает 20 % от исходного лимита.

## Как играть

| Действие          | Как                                                               |
|-------------------|-------------------------------------------------------------------|
| Начать игру       | Кнопка `Start` (перегенерирует лабиринт и запускает таймер)       |
| Движение          | Стрелки `←` `↑` `→` `↓`                                           |
| Автопоиск (Demo)  | Кнопка `Solve` или клавиша `S`                                    |
| Применить размеры | Кнопка `Apply size` (`#nx`, `#ny`) — сохранит их в `localStorage` |
| Сменить тему      | Селект `Theme`: `System` / `Light` / `Dark`                       |
| Сменить язык      | Селект `Language`: `English` / `Русский`                          |
| Войти / выйти     | Кнопки `Log in` / `Log out`; имя — в `sessionStorage`             |

Гость не аутентифицируется: его статистика пишется под storage-ключом `GUEST_NAME = 'гость'`, а отображается как локализованное «Guest» / «Гость» через `t('player.guest')`.

Если после клика по `<select>` в HUD фокус остаётся на нём, стрелки будут менять значение селекта, а не двигать игрока. Поэтому `main.ts` снимает фокус с `select`/`input` через `blurFormControl()` при старте игры и при смене темы/локали, а клик по canvas снимает фокус за счёт `tabindex="-1"` на `<canvas>`.

## Модули

Полный справочник — в [`API.md`](API.md). Ниже — краткая карта экспортов.

| Модуль                  | Назначение                            | Публичный API                                                                                                     |
|-------------------------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `src/lib/constants.ts`  | Константы проекта                     | `WALL`, `FULL_WALL`, `LIMITS`, `MODE`, `DIFFICULTY`, `TIMING`, `STORAGE_KEYS`, `GUEST_NAME`, `Mode`, `Difficulty` |
| `src/lib/player.ts`     | Правила хода, проверка стены и выхода | `resolveMove`, `isPassable`, `isAtExit`, `Move`, `ExitCheckState`                                                 |
| `src/lib/grid.ts`       | Генерация и обмер лабиринта           | `createFullGrid`, `generateMaze`, `measureSolutionLength`                                                         |
| `src/lib/search.ts`     | BFS-поиск кратчайшего пути            | `solveMaze`, `SolveResult`, `SolveMazeInput`                                                                      |
| `src/lib/timer.ts`      | Двухрежимный таймер                   | `createTimer`, `MazeTimer`, `TimerTick`, `TimerStartOptions`, `TimerHooks`                                        |
| `src/lib/stats.ts`      | Статистика игроков                    | `getPlayer`, `recordWin`, `PlayerStats`, `RecordWinInput`                                                         |
| `src/lib/auth.ts`       | Сессия «залогинен»                    | `getCurrentUser`, `login`, `logout`                                                                               |
| `src/lib/difficulty.ts` | Расчёт лимита времени                 | `computeTimeLimit`, `ComputeTimeLimitInput`                                                                       |
| `src/app/game.ts`       | Игровая фабрика                       | `useMazeGame`, `MazeGame`, `MazeGameState`, `MazePhase`, `StartInfo`                                              |
| `src/app/renderer.ts`   | Canvas-рендерер                       | `computeLayout`, `createRenderer`, `MazeLayout`, `CanvasColors`, `MazeRenderer`                                   |
| `src/app/theme.ts`      | Тема (`data-theme`, CSS-токены)       | `getThemePreference`, `applyTheme`, `setThemePreference`, `initTheme`, `getCanvasColors`, `ThemePreference`       |
| `src/app/i18n.ts`       | Локализация и `Intl`                  | `initI18n`, `getLocale`, `setLocale`, `t`, `formatNumber`, `formatDuration`, `applyTranslations`                  |
| `src/main.ts`           | Точка входа, связывание слоёв         | — (побочные эффекты на `window.load`)                                                                             |

`useMazeGame(canvas, options)` требует обязательный `options.getColors: () => CanvasColors`. Если `canvas.getContext('2d')` вернул `null`, фабрика бросает `Error` — это сохранение исходного поведения падения (см. `API.md`).

## Структура проекта

```
maze/
├── diagrams/
│   ├── architecture/
│   │   ├── candidate.json
│   │   └── index.html
│   ├── lifecycle/
│   │   ├── candidate.json
│   │   └── index.html
│   └── sequence/
│       ├── candidate.json
│       └── index.html
├── src/
│   ├── app/
│   │   ├── game.ts
│   │   ├── i18n.ts
│   │   ├── renderer.ts
│   │   └── theme.ts
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── constants.ts
│   │   ├── difficulty.ts
│   │   ├── grid.ts
│   │   ├── player.ts
│   │   ├── search.ts
│   │   ├── stats.ts
│   │   └── timer.ts
│   ├── locales/
│   │   ├── en.ts
│   │   └── ru.ts
│   ├── styles/
│   │   └── index.css
│   └── main.ts
├── API.md
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Быстрый старт

### Требования

- **Node.js** 20 или новее (рекомендуется актуальная LTS).
- **npm** (или другой менеджер, поддерживающий `package.json`).
- Современный браузер с поддержкой ESM, Canvas 2D, `Intl`, `<dialog>`, `:has()`, `color-mix()`.

### Установка и запуск

```bash
# 1. Установить зависимости
npm install

# 2. Запустить dev-server с HMR
npm run dev

# 3. Открыть адрес, который выведет Vite (по умолчанию http://localhost:5173)
```

`index.html` подключает `./src/main.ts` как `<script type="module">` — Vite исполняет TypeScript «из коробки», отдельная сборка для dev-режима не требуется.

### Production-сборка

```bash
npm run build      # tsc --noEmit && vite build  → dist/
npm run preview    # локальный предпросмотр собранного dist/
```

Артефакты сборки — статические файлы в `dist/` (HTML, JS, CSS). Backend не требуется.

## Скрипты

| Команда             | Что делает                                                     |
|---------------------|----------------------------------------------------------------|
| `npm run dev`       | Vite dev-server с HMR                                          |
| `npm run build`     | `tsc --noEmit` (type-check) + `vite build` (production bundle) |
| `npm run preview`   | Локальный предпросмотр `dist/`                                 |
| `npm run typecheck` | Только `tsc --noEmit` — проверка типов без эмита               |

## Хранение данных

Все ключи — с префиксом `maze.` и версией в суффиксе, если структура может меняться (`STORAGE_KEYS` в `src/lib/constants.ts`).

| Ключ                | Хранилище        | Формат                                         | Кто пишет / читает                                  |
|---------------------|------------------|------------------------------------------------|-----------------------------------------------------|
| `maze.currentUser`  | `sessionStorage` | `string` (имя или пусто)                       | `src/lib/auth.ts`                                   |
| `maze.stats.v1`     | `localStorage`   | `{ players: Record<string, PlayerStats> }`     | `src/lib/stats.ts`                                  |
| `maze.gridSizes.v1` | `localStorage`   | `Record<userName, { nx: number, ny: number }>` | `src/main.ts` (`getSavedGridSize` / `saveGridSize`) |
| `maze.theme`        | `localStorage`   | `'system' / 'light' / 'dark'`                  | `src/app/theme.ts`                                  |
| `maze.locale`       | `localStorage`   | `'en' / 'ru'`                                  | `src/app/i18n.ts`                                   |

Чтение и запись обёрнуты в `try/catch`: если хранилище недоступно (приватный режим, политика браузера), приложение продолжает работать с дефолтами.

Структура `PlayerStats` (`src/lib/stats.ts`):

```ts
{
  games: number,
  totalTimeMs: number,
  best: {
    easy:   Record<string /* mode */, number | null>,
    medium: Record<string /* mode */, number | null>,
    hard:   Record<string /* mode */, number | null>
  }
}
```

`mode` — `'demo' | 'timed'` на практике. Пустое имя при чтении и записи нормализуется в `GUEST_NAME = 'гость'` (`normalizeName` в `src/lib/stats.ts`).

## Доступность и темы

- **Skip-link** «Skip to game» в `<body>`.
- **`aria-live="polite"`** на `#status`; **`role="status"`**; **`aria-live="off"`** на `#timer-bar` с `aria-atomic="true"`.
- **`role="timer"`**, `role="banner"`, `role="region"` для секций.
- **`<dialog>`** — нативный, фокус-трап и закрытие по Esc бесплатно.
- **`aria-describedby="game-instructions"`** на `<canvas>`; сама инструкция видна на странице.
- **Фокус-стили** — `:focus-visible` с `outline: 3px solid var(--color-focus)`.
- **Смена темы** идёт через `data-theme` на `<html>` (или его отсутствие для `system`), палитра Canvas читается из CSS-токенов `--color-canvas-*` в момент `getCanvasColors()`.
- **Смена языка** применяет `applyTranslations()` к статическим `data-i18n*`, затем перерисовывает динамические строки: `renderStatus()`, `updateAuthUI()`, `renderStats()`.
- **`prefers-reduced-motion`** отключает анимации, а `@media print` форсирует светлую тему для печати.

## Документация в коде

- Каждый модуль `src/lib/*` и `src/app/*` содержит развёрнутые JSDoc-блоки (назначение, инварианты, побочные эффекты, риски). Эти комментарии — часть контракта и сохраняются при изменениях.
- Публичный API всех модулей и контрактов (`MazeGame`, `MazeTimer`, `PlayerStats`, `CanvasColors`, `SolveResult`, `UseMazeGameOptions` и др.) описан в [`API.md`](API.md).
- Архитектура, жизненный цикл игры и последовательность хода — в интерактивных HTML-диаграммах `diagrams/` (см. [Демо и интерактивные диаграммы](#демо-и-интерактивные-диаграммы)).

## Лицензия

[MIT](LICENSE) © [Aleksey Tarasenko](https://github.com/alekstar79)

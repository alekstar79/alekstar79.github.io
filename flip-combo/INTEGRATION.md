# Integrating Calculator / Calendar / Flipper into an application

Flipper is a self-contained component written in plain TypeScript, with no framework dependencies. It can be easily embedded into vanilla applications as well as Vue, React, and Svelte through the unified `HostEnvironment` contract.

This document covers:

1. Quick start.
2. What `HostEnvironment` is.
3. Examples for Vue 2, Vue 3, React, and vanilla.
4. State management (locale, theme, opacity).
5. The `draggable` mode for standalone panels.
6. Panel customization.
7. FAQ and troubleshooting.

---

## 1. Quick start

The minimal option requires no configuration. Flipper creates the default environment automatically (`localStorage`, `navigator.language`, `#1f1f1f`, `console`).

```ts
import {
  createFlipper,
  createCalc,
  createCalendar,
} from "@alekstar79/flip-combo";
import "@alekstar79/flip-combo/style.css";

const flipper = createFlipper({
  createFront: (opts) =>
    createCalc({
      onOff: opts.onOff,
      onFlip: opts.onFlip,
    }),
  createBack: (opts) =>
    createCalendar({
      locale: opts.locale === "en" ? "en" : "ru",
      onOff: opts.onOff,
      onFlip: opts.onFlip,
    }),
});

flipper.mount(document.getElementById("app")!);
```

What happens:

- The calculator appears in the center of the window (if `localStorage` is empty).
- The position and active panel are saved to `localStorage`.
- The default opacity is `0.7`.
- The calendar locale comes from `navigator.language`.

---

## 2. HostEnvironment

`HostEnvironment` consists of four small adapters through which Flipper
communicates with the outside world. Without them, the component would work only
in a browser and would be tightly coupled to `localStorage`.

```ts
interface HostEnvironment {
  readonly storage: StorageAdapter;
  readonly locale: LocaleAdapter;
  readonly theme: ThemeAdapter;
  readonly logger: LoggerAdapter;
}
```

### 2.1. StorageAdapter

```ts
interface StorageAdapter {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
}
```

Possible uses: localStorage, sessionStorage, IndexedDB, HTTP API,
or an in-memory Map (for tests and SSR).

### 2.2. LocaleAdapter

```ts
interface LocaleAdapter {
  current(): string;
  subscribe?(listener: (locale: string) => void): Unsubscribe;
}
```

`subscribe` is optional. If the application can notify about changes,
Flipper subscribes and updates the calendar automatically.

### 2.3. ThemeAdapter

```ts
interface ThemeAdapter {
  backgroundColor(): string;
  subscribe?(listener: (color: string) => void): Unsubscribe;
}
```

Same as with `LocaleAdapter`. `subscribe` is optional.

### 2.4. LoggerAdapter

```ts
interface LoggerAdapter {
  info(message: string, ...args: readonly unknown[]): void;
  warn(message: string, ...args: readonly unknown[]): void;
  error(message: string, ...args: readonly unknown[]): void;
}
```

---

## 3. Integration examples

### 3.1. Vanilla TypeScript

```ts
import {
  createFlipper,
  createCalc,
  createCalendar,
} from "@alekstar79/flip-combo";
import "@alekstar79/flip-combo/style.css";
import type { HostEnvironment } from "@alekstar79/flip-combo/host";

let currentLocale = "ru";
let currentBackground = "#82b1ff";

const localeListeners = new Set<(l: string) => void>();
const themeListeners = new Set<(c: string) => void>();

const host: HostEnvironment = {
  storage: {
    get: <T>(key: string): T | null => {
      try {
        const raw = localStorage.getItem(key);
        return raw ? (JSON.parse(raw) as T) : null;
      } catch {
        return null;
      }
    },
    set: <T>(key: string, value: T): void => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key: string): void => {
      localStorage.removeItem(key);
    },
  },

  locale: {
    current: () => currentLocale,
    subscribe: (listener) => {
      localeListeners.add(listener);
      return () => localeListeners.delete(listener);
    },
  },

  theme: {
    backgroundColor: () => currentBackground,
    subscribe: (listener) => {
      themeListeners.add(listener);
      return () => themeListeners.delete(listener);
    },
  },

  logger: {
    info: (m, ...a) => console.info(`[app] ${m}`, ...a),
    warn: (m, ...a) => console.warn(`[app] ${m}`, ...a),
    error: (m, ...a) => console.error(`[app] ${m}`, ...a),
  },
};

const flipper = createFlipper({
  host,
  createFront: (opts) =>
    createCalc({
      onOff: opts.onOff,
      onFlip: opts.onFlip,
    }),
  createBack: (opts) =>
    createCalendar({
      locale: opts.locale === "en" ? "en" : "ru",
      onOff: opts.onOff,
      onFlip: opts.onFlip,
    }),
});

flipper.mount(document.getElementById("app")!);
```

### 3.2. Vue 2

```vue
<template>
  <div ref="container" class="flipper-host" />
</template>

<script>
import {
  createFlipper,
  createCalc,
  createCalendar,
} from "@alekstar79/flip-combo";
import "@alekstar79/flip-combo/style.css";

export default {
  name: "FlipperView",

  data: () => ({
    flipper: null,
  }),

  computed: {
    locale() {
      return this.$i18n.locale;
    },
    backgroundColor() {
      return this.$vuetify.theme.isDark ? "#1f1f1f" : "#82b1ff";
    },
  },

  mounted() {
    const host = {
      storage: {
        get: (key) => {
          try {
            return JSON.parse(localStorage.getItem(key) ?? "null");
          } catch {
            return null;
          }
        },
        set: (key, value) => {
          localStorage.setItem(key, JSON.stringify(value));
        },
        remove: (key) => {
          localStorage.removeItem(key);
        },
      },
      locale: {
        current: () => this.$i18n.locale,
        subscribe: (listener) => this.$watch("locale", listener),
      },
      theme: {
        backgroundColor: () => this.backgroundColor,
        subscribe: (listener) => this.$watch("backgroundColor", listener),
      },
      logger: {
        info: (m, ...a) => console.info(`[app] ${m}`, ...a),
        warn: (m, ...a) => console.warn(`[app] ${m}`, ...a),
        error: (m, ...a) => console.error(`[app] ${m}`, ...a),
      },
    };

    this.flipper = createFlipper({
      host,
      createFront: (opts) =>
        createCalc({
          onOff: opts.onOff,
          onFlip: opts.onFlip,
        }),
      createBack: (opts) =>
        createCalendar({
          locale: opts.locale === "en" ? "en" : "ru",
          onOff: opts.onOff,
          onFlip: opts.onFlip,
        }),
    });

    this.flipper.mount(this.$refs.container);
  },

  beforeDestroy() {
    this.flipper?.unmount();
    this.flipper = null;
  },
};
</script>
```

### 3.3. Vue 3

```vue
<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import {
  createFlipper,
  createCalc,
  createCalendar,
} from "@alekstar79/flip-combo";
import "@alekstar79/flip-combo/style.css";
import type { FlipperInstance } from "@alekstar79/flip-combo/flipper";

const container = ref<HTMLDivElement | null>(null);
const { locale } = useI18n();

let flipper: FlipperInstance | null = null;

onMounted(() => {
  const host = {
    storage: {
      get: <T,>(key: string): T | null => {
        try {
          return JSON.parse(localStorage.getItem(key) ?? "null");
        } catch {
          return null;
        }
      },
      set: <T,>(key: string, value: T): void => {
        localStorage.setItem(key, JSON.stringify(value));
      },
      remove: (key: string): void => {
        localStorage.removeItem(key);
      },
    },
    locale: {
      current: () => locale.value,
      subscribe: (listener: (l: string) => void) => watch(locale, listener),
    },
    theme: {
      backgroundColor: () => "#82b1ff",
    },
    logger: {
      info: (...a: unknown[]) => console.info("[app]", ...a),
      warn: (...a: unknown[]) => console.warn("[app]", ...a),
      error: (...a: unknown[]) => console.error("[app]", ...a),
    },
  };

  flipper = createFlipper({
    host,
    createFront: (opts) =>
      createCalc({
        onOff: opts.onOff,
        onFlip: opts.onFlip,
      }),
    createBack: (opts) =>
      createCalendar({
        locale: opts.locale === "en" ? "en" : "ru",
        onOff: opts.onOff,
        onFlip: opts.onFlip,
      }),
  });

  if (container.value) {
    flipper.mount(container.value);
  }
});

onBeforeUnmount(() => {
  flipper?.unmount();
  flipper = null;
});
</script>

<template>
  <div ref="container" class="flipper-host" />
</template>
```

### 3.4. React

```tsx
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  createFlipper,
  createCalc,
  createCalendar,
} from "@alekstar79/flip-combo";
import "@alekstar79/flip-combo/style.css";
import type { FlipperInstance } from "@alekstar79/flip-combo/flipper";
import type { HostEnvironment } from "@alekstar79/flip-combo/host";

interface FlipperViewProps {
  backgroundColor?: string;
  initialOpacity?: number;
}

export function FlipperView({
  backgroundColor = "#82b1ff",
  initialOpacity = 0.7,
}: FlipperViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flipperRef = useRef<FlipperInstance | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const host: HostEnvironment = {
      storage: {
        get: <T,>(key: string): T | null => {
          try {
            return JSON.parse(localStorage.getItem(key) ?? "null");
          } catch {
            return null;
          }
        },
        set: <T,>(key: string, value: T): void => {
          localStorage.setItem(key, JSON.stringify(value));
        },
        remove: (key: string): void => {
          localStorage.removeItem(key);
        },
      },
      locale: {
        current: () => i18n.language.slice(0, 2),
        subscribe: (listener) => {
          i18n.on("languageChanged", listener);
          return () => i18n.off("languageChanged", listener);
        },
      },
      theme: {
        backgroundColor: () => backgroundColor,
      },
      logger: {
        info: (...a: unknown[]) => console.info("[app]", ...a),
        warn: (...a: unknown[]) => console.warn("[app]", ...a),
        error: (...a: unknown[]) => console.error("[app]", ...a),
      },
    };

    const flipper = createFlipper({
      host,
      initialOpacity,
      createFront: (opts) =>
        createCalc({
          onOff: opts.onOff,
          onFlip: opts.onFlip,
        }),
      createBack: (opts) =>
        createCalendar({
          locale: opts.locale === "en" ? "en" : "ru",
          onOff: opts.onOff,
          onFlip: opts.onFlip,
        }),
    });

    if (containerRef.current) {
      flipper.mount(containerRef.current);
    }

    flipperRef.current = flipper;

    return () => {
      flipper.unmount();
      flipperRef.current = null;
    };
  }, [i18n, backgroundColor, initialOpacity]);

  return <div ref={containerRef} style={{ minHeight: "100vh" }} />;
}
```

### 3.5. SSR / Next.js / Nuxt

In SSR, `localStorage` and `navigator` are unavailable. Use a memory adapter.

```ts
import {
  createFlipper,
  createCalc,
  createCalendar,
} from "@alekstar79/flip-combo";
import type { HostEnvironment } from "@alekstar79/flip-combo/host";

function createSsrHost(
  locale: string,
  backgroundColor: string,
): HostEnvironment {
  const memory = new Map<string, unknown>();

  return {
    storage: {
      get: <T>(key: string): T | null => (memory.get(key) as T) ?? null,
      set: <T>(key: string, value: T): void => {
        memory.set(key, value);
      },
      remove: (key: string): void => {
        memory.delete(key);
      },
    },
    locale: {
      current: () => locale,
    },
    theme: {
      backgroundColor: () => backgroundColor,
    },
    logger: {
      info: () => {},
      warn: () => {},
      error: (m, ...a) => console.error(`[flipper] ${m}`, ...a),
    },
  };
}
```

The component is mounted only on the client (`useEffect` in React,
`onMounted` in Vue).

---

## 4. State management

### 4.1. Locale

```ts
flipper.setLocale("en");
```

It is normalized inside the calendar to `'ru' | 'en'`. To add a new
locale, extend `LOCALES` in `src/calendar/locales.ts`.

### 4.2. Background color

```ts
flipper.setBackgroundColor("#ffffff");
```

It is passed to the `--calc-bg` and `--calendar-bg` CSS variables on the wrapper.
Panels read them through `var(...)`, so updates are immediate.

### 4.3. Opacity

```ts
flipper.setOpacity(0.85);
```

It is clamped to `[0.5, 1]`. The value is saved to storage (300 ms debounce).

**Important:** opacity is applied to the **background**, not the entire element.
The background becomes translucent while the content (digits, buttons, text)
remains fully opaque.

### 4.4. Reading state

```ts
const state = flipper.getState();
// { rotated, left, top, opacity, entity }
```

### 4.5. Programmatic flip

```ts
flipper.flip();
```

---

## 5. `draggable` mode for standalone panels

Calc and Calendar can be used **without Flipper**, with dragging and position
persistence. The `draggable: true` option enables this mode.

```ts
import { createCalc } from "@alekstar79/flip-combo/calc";
import "@alekstar79/flip-combo/style.css";

const calc = createCalc({
  draggable: true,
  storageKey: "my-app:calc",
});

calc.mount(document.body);
```

**What happens:**

1. The panel is wrapped in a `position: fixed` container.
2. The default position is the center of the window.
3. It can be dragged by any free area.
4. The position is saved to `localStorage` under the specified key.
5. It is restored after a reload.
6. When the window is resized, it is clamped to the new boundaries.

**Dimensions** (hard-coded):

- Calc: `255 × 345 px`
- Calendar: `320 × 345 px`

**Without `draggable`**, the panel occupies all available container space.
This is the default behavior, as in earlier versions.

---

## 6. Panel customization

The panels (Calc and Calendar) are independent modules. Flipper receives them
through the `createFront` and `createBack` factories. Either panel can be
replaced with a custom one by implementing the `FlipPanel` interface.

```ts
import type { FlipPanel } from "@alekstar79/flip-combo/flipper";

function createCustomPanel(): FlipPanel {
  let element: HTMLElement | null = null;

  return {
    get element(): HTMLElement {
      if (!element) throw new Error("not mounted");
      return element;
    },
    mount(container) {
      element = document.createElement("div");
      element.textContent = "Custom panel";
      container.appendChild(element);
    },
    unmount() {
      element?.remove();
      element = null;
    },
    // setLocale is optional — implement it if needed.
  };
}

const flipper = createFlipper({
  createFront: () => createCustomPanel(),
  createBack: (opts) =>
    createCalendar({
      locale: opts.locale === "en" ? "en" : "ru",
      onOff: opts.onOff,
      onFlip: opts.onFlip,
    }),
});
```

---

## 7. Initialization parameters

All parameters are passed to `createFlipper`:

| Parameter         | Type                         | Default                        | Description            |
| ----------------- | ---------------------------- | ------------------------------ | ---------------------- |
| `createFront`     | `(opts) => FlipPanel`        | —                              | Front panel factory    |
| `createBack`      | `(opts) => FlipPanel`        | —                              | Back panel factory     |
| `host`            | `HostEnvironment`            | `createDefaultHost()`          | Environment adapters   |
| `backgroundColor` | `string`                     | `host.theme.backgroundColor()` | Panel background color |
| `locale`          | `string`                     | `host.locale.current()`        | Initial locale         |
| `initialOpacity`  | `number`                     | `0.7`                          | Initial opacity        |
| `presentation`    | `boolean`                    | `false`                        | No drag or persistence |
| `initialEntity`   | `'calculator' \| 'calendar'` | `'calculator'`                 | Visible panel          |
| `onOff`           | `() => void`                 | —                              | Callback on `⏻` press  |

**Important:** when `locale` is set in props, `host.locale.subscribe` is ignored;
the application must call `flipper.setLocale(...)` itself. The same applies to
`backgroundColor` and `host.theme.subscribe`.

---

## 8. FAQ

### Calculator without the calendar?

```ts
import { createCalc } from "@alekstar79/flip-combo/calc";

const calc = createCalc();
calc.mount(document.getElementById("app")!);
```

### Calendar only?

```ts
import { createCalendar } from "@alekstar79/flip-combo/calendar";

const calendar = createCalendar({ locale: "ru" });
calendar.mount(document.getElementById("app")!);
```

### How do I disable Flipper position persistence?

```ts
const flipper = createFlipper({ presentation: true /* ... */ });
```

### How do I clear the saved position?

```ts
localStorage.removeItem("flip-combo:position"); // for Flipper
localStorage.removeItem("flip-combo:calc"); // for draggable calc
localStorage.removeItem("flip-combo:calendar"); // for draggable calendar
```

### Does it work in SSR?

Yes, with a memory adapter. See section 3.5.

### How do I override styles?

Import your SCSS after the package styles:

```scss
@use "@alekstar79/flip-combo/style.css";
@use "./my-overrides.scss";
```

---

## 9. Package file tree

```
@alekstar79/flip-combo/
├── dist/
│   ├── index.js / index.d.ts
│   ├── style.css
│   ├── calc/
│   │   └── index.js / index.d.ts + internal modules
│   ├── calendar/
│   ├── flipper/
│   ├── host/
│   └── utils/
│       ├── index.js / index.d.ts
│       ├── clipboard.js
│       ├── color.js
│       ├── device.js
│       ├── math.js
│       ├── drag.js         ← drag module
│       ├── position.js     ← localStorage handling
│       └── draggable.js    ← makeDraggable
├── package.json
├── README.md
├── INTEGRATION.md
└── LICENSE
```

---

## 10. Conclusion

Flipper is designed to:

- **work without configuration** — the default `host` covers 80% of cases;
- **integrate easily with any framework** — through 4 adapters;
- **stay out of the application's way** — it does not touch global state;
- **be easy to test** — all dependencies are injected.

The key idea is `HostEnvironment`. Once the application implements `storage`, `locale`, `theme`, and `logger`, Flipper becomes a "native" component of that application.

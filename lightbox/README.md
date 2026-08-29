# Lightbox TS

[![npm version](https://img.shields.io/npm/v/@alekstar79/lightbox.svg)](https://www.npmjs.com/package/@alekstar79/lightbox)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)
[![GitHub](https://img.shields.io/badge/github-repo-green.svg?style=flat)](https://github.com/alekstar79/lightbox)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square)](https://www.typescriptlang.org)
[![Coverage](https://img.shields.io/badge/coverage-91.83%25-brightgreen.svg)](https://github.com/alekstar79/lightbox)

A modern, lightweight, and dependency‑free image gallery and lightbox library for the web. Built with TypeScript, it provides zoom, pan, full‑screen, keyboard navigation, and a flexible plugin system.

![image](review.gif)

[LIVE DEMO](https://alekstar79.github.io/lightbox)

---

## Features

- 🖼️ **Gallery** – responsive grid with lazy loading (using IntersectionObserver or native lazy loading).
- 🔍 **Zoom & Pan** – smooth zoom with mouse wheel and drag‑to‑pan.
- ⌨️ **Keyboard navigation** – arrow keys to switch images, `Esc` to close.
- 🖥️ **Full‑screen mode** – toggle full‑screen with one click.
- 🎛️ **Plugin system** – extend the library with custom behavior via a simple API.
- 📦 **Modular architecture** – use the high‑level factory or compose your own from standalone classes.
- ⚡ **No dependencies** – pure TypeScript.
- 🧪 **Fully tested** – unit tests with Vitest and high coverage (91%+).

---

## Installation

```bash
npm install @alekstar79/lightbox
# or
yarn add @alekstar79/lightbox
```

---

## Quick Start

The easiest way to get started is using the `create` factory.

### HTML structure

Place the following elements in your page (the library expects these classes by default, but you can override them using `classMap` if needed).

```html
<!-- Include the library CSS (adjust the path) -->
<link rel="stylesheet" href="/node_modules/@alekstar79/lightbox/lib/styles.css" />

<!-- Gallery container -->
<div class="wrapper"></div>

<!-- Lightbox elements (must be present) -->
<div class="shadow"></div>
<div class="preview-box">
  <div class="details">
    <span class="title"><p class="current-img"></p> / <p class="total-img"></p></span>
    <div class="actions">
      <span class="icon fas fa-expand"></span>
      <span class="icon fas fa-times"></span>
    </div>
  </div>
  <div class="image-box">
    <img src="" alt="" />
    <div class="pan-overlay"></div>
    <div class="slide prev"><i class="fas fa-angle-left"></i></div>
    <div class="slide next"><i class="fas fa-angle-right"></i></div>
  </div>
</div>
```

### JavaScript / TypeScript

```ts
import { create, ready } from '@alekstar79/lightbox';
import '@alekstar79/lightbox/lib/styles.css';

const source = Array.from({ length: 28 }, (_, i) => ({
  src: `images/img-${String(i + 1).padStart(2, '0')}.jpg`,
}));

await ready();

const app = create({
  source,
  gallerySelector: '.wrapper',
  // optional: plugins: [new DirectionalHoverPlugin()],
});
```

---

## API Reference

### `create(options: LightboxOptions): LightboxApp`

Creates a fully configured gallery and lightbox instance.

| Option             | Type                         | Default      | Description                               |
|--------------------|------------------------------|--------------|-------------------------------------------|
| `source`           | `ImageSource[]`              | required     | Array of `{ src: string }` objects.       |
| `gallerySelector`  | `string`                     | `'.wrapper'` | CSS selector for the gallery container.   |
| `scaleSensitivity` | `number`                     | `50`         | Zoom sensitivity (higher = slower).       |
| `minScale`         | `number`                     | `0.1`        | Minimum zoom scale.                       |
| `maxScale`         | `number`                     | `30`         | Maximum zoom scale.                       |
| `setupFn`          | `(gallery: Gallery) => void` | –            | Callback for custom gallery setup.        |
| `plugins`          | `Plugin[]`                   | `[]`         | Plugins to apply to the gallery/lightbox. |

### `LightboxApp`

The object returned by `create`:

```ts
interface LightboxApp {
  destroy(): void;
  gallery: Gallery;
  setPlugins(plugins: Plugin[]): void;
  reapplyPlugins(): void;
}
```

- `destroy()` – cleans up all event listeners and removes DOM.
- `gallery` – direct access to the `Gallery` instance (e.g. to call `render()`).
- `setPlugins()` – dynamically replace active plugins (useful for toggling features).
- `reapplyPlugins()` – re‑apply current plugins after a gallery re‑render.

### `ready(): Promise<void>`

Resolves when the DOM is fully loaded.

---

## Plugin System

Plugins allow you to extend any part of the library without modifying the core.

### Interfaces

```ts
export interface PluginContext {
  gallery: Gallery;
  lightbox: Lightbox;
  renderer: Renderer;
  emitter: Emitter;
  root: HTMLElement;
}

export interface Plugin {
  name: string;
  apply(context: PluginContext): void;
  destroy?(): void;
}
```

### Writing a Custom Plugin

```ts
import { Plugin, PluginContext } from '@alekstar79/lightbox';

export class MyPlugin implements Plugin {
  name = 'my-plugin';

  apply(context: PluginContext): void {
    const galleryEl = context.gallery.galleryElement;
    // attach event listeners, add DOM, etc.
  }

  destroy() {
    // cleanup
  }
}
```

### Built‑in Plugins

- **`DirectionalHoverPlugin`** – adds a 3D hover effect to gallery items.  
  **Import:** `import { DirectionalHoverPlugin } from '@alekstar79/lightbox';`

---

## Gallery & Lightbox Low‑Level Classes

If you need more control, you can use the individual classes directly.

- `Gallery` – manages the grid and image loading.
- `Lightbox` – manages the overlay and navigation.
- `Renderer` – handles zoom/pan transformations.
- `Bindings` – global keyboard shortcuts.
- `Fullscreen` – vendor‑prefixed full‑screen API.
- `emitter` – global event bus.

---

## Styling

The library ships its CSS separately. To include it:

```ts
import '@alekstar79/lightbox/lib/styles.css';
```

You can also override default styles by providing custom classes via the `classMap` option (if supported by your version).

---

## Development

```bash
git clone https://github.com/alekstar79/lightbox.git
cd lightbox
yarn install
```

### Scripts

- `yarn dev` – start dev server with hot reload.
- `yarn build` – build both the library and the demo.
- `yarn test` – run unit tests.
- `yarn coverage` – run tests with coverage report.

---

## License

[MIT](LICENSE) © alekstar79

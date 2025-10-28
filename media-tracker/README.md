# Media Tracker TS

[![NPM](https://img.shields.io/npm/v/@alekstar79/media-tracker.svg)](https://www.npmjs.com/package/@alekstar79/media-tracker)
[![GitHub repo](https://img.shields.io/badge/github-repo-green.svg?style=flat)](https://github.com/alekstar79/media-tracker)
[![Typescript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)]()
[![License](https://img.shields.io/badge/License-ISC-green)]()
[![Version](https://img.shields.io/badge/Version-2.0.0-orange)]()

A lightweight, high-performance TypeScript library for tracking media queries and responsive breakpoints in modern web applications.

![Media Tracker TS](review.gif)

## 🎮 Demo

Check out the live demo: [Media Tracker Demo](https://alekstar79.github.io/media-tracker)

The demo shows real-time breakpoint tracking with toast notifications and demonstrates all library features in action.

## 🚀 Features

- 🪶 Lightweight - Zero dependencies, minimal footprint
- 📱 Responsive - Track any breakpoint configuration
- ⚡ High Performance - Uses native MediaQueryList API with debouncing
- 🔷 TypeScript - Fully typed with comprehensive documentation
- 🎯 Precise - Binary search algorithm for optimal breakpoint matching
- 🛠️ Flexible - Customizable breakpoints and debounce timing
- 📦 Dual Build - Support for ES modules, CommonJS, and UMD

## 📁 Project Structure

```text
media-tracker/
├── src/
│   ├── lib/                 # Library core
│   │   ├── constants.ts     # Breakpoint constants
│   │   ├── media-tracker.ts # Main MediaTracker class
│   │   └── index.ts         # Library entry point
│   ├── demo/                # Demo application
│   │   ├── emitter.ts       # Event emitter (demo only)
│   │   ├── notifications.ts # Toast notifications
│   │   ├── media-handler.ts # Demo media handler
│   │   └── index.ts         # Demo entry point
│   ├── styles/
│   │   └── style.css        # Demo styles
│   └── index.html           # Demo HTML
├── dist/                    # Demo build output
├── dist-lib/                # Library build output
└── docs/                    # Generated documentation
```

## 📦 Installation

**Library Installation:**

```shell
yarn install @alekstar79/media-traker
```
**Development Setup:**

```shell
git clone git@github.com:alekstar79/media-tracker.git
cd media-tracker
yarn install
```

## 💻 Usage

### 📄 ES Modules (Recommended)

```ts
import { MediaTracker, W768, W1024, W1200 } from 'media-tracker';

const tracker = MediaTracker.create(
  [W768, W1024, W1200],
  (state) => {
    console.log('Current media state:', state);
    
    if (state.width === W768) {
      // Mobile layout
    } else if (state.width === W1024) {
      // Tablet layout  
    } else if (state.width === W1200) {
      // Desktop layout
    }
  },
  150 // Optional debounce time (ms)
)
```

### 📦 CommonJS

```js
const { MediaTracker, W768, W1024 } = require('media-tracker')

const tracker = MediaTracker.create([W768, W1024], (state) => {
  console.log('Media state changed:', state)
})
```

### 🌐 In Browser (UMD)

```html
<script src="https://unpkg.com/media-tracker/dist-lib/media-tracker.umd.js"></script>
<script>
  const tracker = MediaTracker.create(
    [MediaTracker.W768, MediaTracker.W1024],
    function(state) {
      console.log('Breakpoint:', state)
    }
  )
</script>
```

## 📊 Available Breakpoints

```ts
import {
  W0,      // 0px    - 📱 Base mobile
  W240,    // 240px  - 📱 Very small mobile
  W320,    // 320px  - 📱 Small mobile
  W480,    // 480px  - 📱 Mobile landscape
  W640,    // 640px  - 📟 Small tablets
  W768,    // 768px  - 📟 Tablets
  W991,    // 991px  - 🖥️ Small desktops
  W1024,   // 1024px - 🖥️ Desktop screens
  W1200,   // 1200px - 🖥️ Large desktop
  W1280,   // 1280px - 🖥️ HD desktop
  W1728,   // 1728px - 🖥️ Large HD
  W1920,   // 1920px - 🖥️ Full HD
  W1980,   // 1980px - 🖥️ Large Full HD
  W3840,   // 3840px - 📺 4K Ultra HD
  W4096    // 4096px - 📺 Maximum
} from 'media-tracker'
```

## 🔨 Development

🚀 **Start development server:**
```shell
yarn dev
```

Starts Vite development server at http://localhost:3000

📦 **Build for production:**
```shell
yarn build        # 🏗️ Build demo application
yarn build:lib    # 📦 Build library for distribution
```

👀 **Preview production build:**
```shell
yarn preview
```

📚 **Generate documentation:**
```shell
yarn docs
```

## ⚙️ Configuration

**MediaTracker Options**

| Option         | Type                          | Default  | Description                                     |
|----------------|-------------------------------|----------|-------------------------------------------------|
| `widths`       | `number[]`                    | Required | Array of breakpoint widths to track             |
| `handler`      | `(state: MediaState) => void` | Required | Callback function for media changes             |
| `debounceTime` | `number`                      | `100`    | Debounce time in milliseconds for resize events |

**MediaState Object**

```ts
interface MediaState {
  width?: number;     // Current viewport width (when exact match)
  maxWidth?: number;  // Next larger breakpoint  
  minWidth?: number;  // Next smaller breakpoint
}
```

## 📖 API Reference

### MediaTracker Class

  ⚡ Static Methods

MediaTracker.create(widths, handler, debounceTime?)

1. Creates and initializes a new MediaTracker instance
2. Parameters:

    - widths: number[] - Breakpoint widths to track
    - handler: (state: MediaState) => void - Change callback
    - debounceTime?: number - Debounce time (ms), default: 100

3. Returns: MediaTracker instance

  🔧 Instance Methods

setWidths(widths)

- Updates the breakpoint configuration
- Parameters: widths: number[] - New breakpoint array
- Returns: MediaTracker instance (chainable)

setHandler(handler)

- Updates the change handler function
- Parameters: handler: (state: MediaState) => void - New callback
- Returns: MediaTracker instance (chainable)

onTrack()

- Starts tracking media queries and resize events
- Returns: MediaTracker instance (chainable)

nearestWidths()

- Calculates current media state
- Returns: MediaState object

## 🔄 Lifecycle

1. 🚀 **Initialization** - Create instance with breakpoints and handler
2. 📡 **Tracking Start** - Media queries and resize listeners are set up
3. 🔄 **State Changes** - Handler is called on breakpoint changes
4. 🧹 **Automatic Cleanup** - Listeners are managed internally

## 🏎️ Performance Tips

1. 🎯 Minimize Breakpoints - Only track breakpoints you actually use
2. ⏰ Optimize Debounce - Increase debounce time for complex handlers
3. 🎯 Use Exact Matches - Handler receives exact matches when available
4. 📦 Batch Updates - Use requestAnimationFrame in complex UIs

```ts
// ✅ Good: Minimal breakpoints
MediaTracker.create([W768, W1024, W1200], handler)

// ✅ Better: Increased debounce for heavy operations  
MediaTracker.create(breakpoints, heavyHandler, 250)
```

## ❗ Troubleshooting

**Check imports:**

```ts
// ✅ Correct
import { MediaTracker, W768 } from 'media-tracker'

// ❌ Incorrect  
import MediaTracker from 'media-tracker'
```

**Verify breakpoints:**

```ts
// ✅ Breakpoints must be sorted and unique
MediaTracker.create([768, 1024, 1200], handler) // ✓ Works
MediaTracker.create([1200, 768], handler)       // ✓ Auto-sorted
MediaTracker.create([], handler)                // ❌ Throws error
```

**Check handler:**

```ts
// ✅ Handler must be a function
MediaTracker.create(breakpoints, console.log)               // ✓ Works
MediaTracker.create(breakpoints, (state) => {/*...*/})      // ✓ Works  
MediaTracker.create(breakpoints, 'not a function')          // ❌ Throws error
```

## 🐛 Common Issues

**Handler not called on initial load:**

- MediaTracker automatically calls handler with initial state
- Check browser console for errors

**Resize events too frequent:**

- Increase debounceTime parameter
- Default is 100ms, try 150-250ms for better performance

**Breakpoints not matching:**

- Ensure breakpoints are in pixels
- Verify viewport meta tag in HTML:
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`


## 🌐 Browser Support

| Browser            | Version | Support |
|--------------------|---------|---------|
| 🟢 Chrome          | 41+     | ✅ Full  |
| 🟢 Firefox         | 47+     | ✅ Full  |
| 🟢 Safari          | 10.1+   | ✅ Full  |
| 🟢 Edge            | 16+     | ✅ Full  |
| 🟢 iOS Safari      | 10.3+   | ✅ Full  |
| 🟢 Android Browser | 56+     | ✅ Full  |

**Required APIs:**

- window.matchMedia (CSSOM View Module)
- ResizeObserver (for demo features)
- ES2015+ features (arrow functions, const/let, classes)


## 🧩 Polyfills (if needed)

For older browsers, include these polyfills:

```html
<!-- matchMedia polyfill -->
<script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=MatchMedia"></script>
```
<div align="center">
  Built with ❤️ and TypeScript
</div>


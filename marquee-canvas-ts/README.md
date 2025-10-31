# Marquee Canvas TS

[![NPM](https://img.shields.io/npm/v/@alekstar79/marquee-canvas-ts.svg)](https://www.npmjs.com/package/@alekstar79/marquee-canvas-ts)
[![GitHub repo](https://img.shields.io/badge/github-repo-green.svg?style=flat)](https://github.com/alekstar79/marquee-canvas-ts)
[![Typescript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)]()
[![License](https://img.shields.io/badge/License-ISC-green)]()
[![Version](https://img.shields.io/badge/Version-1.0.0-orange)]()

A high-performance, responsive marquee animation system built with TypeScript, Canvas API, and Vite.

## 🎮 Demo

Check out the live demo: [Media Tracker Demo](https://alekstar79.github.io/marquee-canvas-ts)

## 🚀 Features

- **Comprehensive Documentation:** Every class, method, and function is documented
- **High Performance**: Uses Canvas API for smooth 60fps animations
- **Responsive Design**: Automatically adapts to container size changes
- **Flexible Styling**: Customizable colors, fonts, speeds, and directions
- **Accessible**: ARIA labels and reduced motion support
- **TypeScript**: Fully type safety with detailed interfaces
- **Modular Architecture**: Clean separation of concerns
- **Modern Tooling:** Uses Vite for fast development and building
- **Dual API**: Support for both Custom Elements and data attributes

## 📁 Project Structure

````text
marquee-canvas-ts/
├── public/
│   └── favicon.png                 # Only favicon in the public folder
├── src/
│   ├── assets/                     # Processed assets
│   │   └── images/
│   │       └── background.jpeg
│   ├── components/                 # Reusable components
│   │   ├── MarqueeController.ts    # Core animation logic
│   │   └── MarqueeCanvas.ts        # Custom Element implementation
│   ├── utils/                      # Utility functions
│   │   └── index.ts                # Helper functions and utilities 
│   ├── css/                        # CSS stylesheets
│   │   └── styles.css
│   └── index.ts                    # Application entry point
├── index.html                      # Main HTML file
├── package.json                    # Project dependencies and scripts
├── vite.config.ts                  # Vite build configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # Project documentation
````
## 🛠️ Installation

1. **Clone or download the project**

2. **Install dependencies**:
````bash
yarn install
````

## 🎯 Usage

**Method 1: Custom Elements (Recommended)**

Use the custom HTML element for declarative marquee creation:

````html
<marquee-canvas
  phrase="Your text here"
  font="bold 5em Roboto"
  color="#ff0000"
  speed="3"
  reverse
  padding-y="36"
></marquee-canvas>
````

**Method 2: Data Attributes**

Use data attributes for traditional canvas-based marquees:

````html
<div class="marquee-canvas">
  <canvas
    data-canvas
    data-phrase="Your text here"
    data-font="bold 5em Roboto"
    data-color="#ff0000"
    data-speed="3"
    data-reverse
    data-padding-y="36"
  ></canvas>
</div>
````

## 📚 Library Usage

**ES модули:**

````js
import { MarqueeController, MarqueeCanvas } from '@alekstar79/marquee-canvas-ts'
import '@alekstar79/marquee-canvas-ts/style'
````

**CommonJS:**

````js
const { MarqueeController, MarqueeCanvas } = require('@alekstar79/marquee-canvas-ts')
require('@alekstar79/marquee-canvas-ts/style')
````

**В браузере (UMD):**

````html
<script src="https://unpkg.com/@alekstar79/marquee-canvas-ts"></script>
<link rel="stylesheet" href="https://unpkg.com/@alekstar79/marquee-canvas-ts/style">
````

## 🎮 Development

**Start development server:**

````shell
yarn dev
````

**Build for production:**

````shell
yarn build
````

**Preview production build:**

````shell
yarn preview
````

## ⚙️ Configuration

**MarqueeCanvas Custom Element Attributes**

| Attribute   | Type    | Default                | Description                    |
|-------------|---------|------------------------|--------------------------------|
| `phrase`    | string  | -                      | Text content to display        |
| `font`      | string  | `bold 5rem sans-serif` | CSS font property              |
| `color`     | string  | `#337baa`              | Text color                     |
| `speed`     | number  | `2`                    | Animation speed (pixels/frame) |
| `reverse`   | boolean | `false`                | Reverse animation direction    |
| `padding-x` | number  | `0`                    | Horizontal padding             |
| `padding-y` | nimber  | `36`                   | Vertical padding               |


**MarqueeController Options**

````typescript
interface MarqueeOptions {
  text: string;             // Text content
  font: string;             // CSS font property
  textColor: string;        // Text color
  reverse: boolean;         // Animation direction
  paddingX: number;         // Horizontal spacing
  paddingY: number;         // Vertical padding
  speed: number;            // Animation speed
  backgroundColor?: string; // Canvas background
}
````

## 🔧 API Reference

### MarqueeController Class

**Static Methods:**

- init(canvas, options) - Creates and initializes a marquee

**Instance Methods:**

- update(options) - Updates marquee configuration
- handleResize() - Handles container resize
- destroy() - Cleans up resources

**MarqueeCanvas Custom Element**

Lifecycle:

- connectedCallback() - Called when added to DOM
- disconnectedCallback() - Called when removed from DOM
- attributeChangedCallback() - Called when attributes change

## 🎨 Customization

### CSS Custom Properties

Override these variables in your CSS:

````css
:root {
  --color-dark: #1e2327;
  --color-accent-1: #f3bb0b;
  --color-accent-2: #337baa;
  --color-text-light: #ffff;
  --font-family-primary: 'Roboto', sans-serif;
  --font-weight-medium: 500;
  --spacing-xs: 4px;
  /* ...and more */
}
````
or override the basic styles with custom ones

````css
.my-marquee-container {
  background: linear-gradient(45deg, #333, #666);
  border-radius: 8px;
  padding: 20px;
}
````

### JavaScript Configuration

````typescript
const marquee = MarqueeController.init(canvas, {
  text: 'Custom Text',
  font: 'italic 3rem Arial',
  textColor: '#00ff00',
  speed: 5,
  reverse: true
})
````

## 📱 Responsive Behavior

**The marquee automatically:**

- Adjusts to container size changes
- Handles device pixel ratio changes
- Optimizes for mobile devices
- Supports high-DPI displays

## ♿ Accessibility

- Respects prefers-reduced-motion media query
- Includes ARIA labels for screen readers
- Proper focus management

## 🚀 Performance Tips

1. Use appropriate text lengths - Very long texts impact performance
2. Limit simultaneous instances - Too many marquees strain the GPU
3. Use efficient fonts - System fonts perform better than web fonts
4. Monitor frame rate - Use browser dev tools for performance checking

## 🐛 Troubleshooting

**Marquee not appearing?**

- Check browser console for errors
- Ensure fonts are properly loaded
- Verify canvas element exists in DOM

**Animation is choppy?**

- Reduce the number of simultaneous marquees
- Lower the animation speed
- Check for other performance-intensive operations on the page

**Text looks blurry?**

- The component automatically handles high-DPI displays
- Ensure you're not manually setting canvas dimensions

## 🌐 Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

<div align="center">
  Built with ❤️ and TypeScript
</div>

# 📅 Vue 3 Calendar Component

[![Vue](https://img.shields.io/badge/Vue-3.3+-green.svg)]()
[![NPM](https://img.shields.io/npm/v/@alekstar79/vue3-calendar.svg)](https://www.npmjs.com/package/@alekstar79/vue3-calendar-component)
[![GitHub repo](https://img.shields.io/badge/github-repo-green.svg?style=flat)](https://github.com/alekstar79/vue3-calendar)
[![Typescript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()
[![Version](https://img.shields.io/badge/Version-3.0.0-orange)]()
[![Coverage](https://img.shields.io/badge/Coverage-79.6%25-green)]()

A modern, responsive, and customizable calendar component built with Vue 3 Composition API and TypeScript.

![Vue3 Calendar Component](review.gif)

<!-- TOC -->
* [📅 Vue 3 Calendar Component](#-vue-3-calendar-component)
  * [🎮 Demo](#-demo)
  * [🚀 Features](#-features)
  * [📁 Project Structure](#-project-structure)
  * [📦 Installation](#-installation)
    * [Library Installation:](#library-installation)
    * [Development Setup:](#development-setup)
  * [💻 Usage](#-usage)
    * [📄 Basic Usage](#-basic-usage)
  * [⚙️ Configuration](#-configuration)
    * [📊 Supported Locales](#-supported-locales)
  * [🔧 Component Props](#-component-props)
  * [📡 Component Events](#-component-events)
  * [🎨 Custom Styling with SCSS](#-custom-styling-with-scss)
  * [🎯 Available SCSS Variables](#-available-scss-variables)
  * [📖 API Reference](#-api-reference)
    * [🔧 Composables](#-composables)
  * [📅 Date Utilities](#-date-utilities)
  * [🌍 Internationalization](#-internationalization)
  * [🧪 Testing](#-testing)
    * [🚀 Running Tests](#-running-tests)
    * [📊 Test Coverage](#-test-coverage)
    * [🏗️ Test Structure](#-test-structure)
  * [🔨 Development](#-development)
    * [🛠️ Development Commands](#-development-commands)
    * [📦 Building for Production](#-building-for-production)
  * [📋 Browser Support](#-browser-support)
  * [❗ Troubleshooting](#-troubleshooting)
    * [Common Import Issues:](#common-import-issues)
    * [Locale Configuration:](#locale-configuration)
    * [Date Formatting:](#date-formatting)
  * [🐛 Common Issues](#-common-issues)
  * [🤝 Contributing](#-contributing)
  * [👨‍💻 Author](#-author)
<!-- TOC -->

## 🎮 Demo

- Check out the live demo: [Vue3 Calendar](https://alekstar79.github.io/vue3-calendar)
- Run the demo locally to explore all features:

  ```shell
  git clone https://github.com/alekstar79/vue3-calendar.git
  ```
  ```shell
  cd vue3-calendar
  ```
  ```shell
  npm install
  ```
  ```shell
  npm run dev
  ```

The demo showcases real-time calendar interactions with locale switching, date selection, and event logging.

## 🚀 Features

- **Vue 3 Composition API** - Modern Vue 3 with TypeScript support
- **Responsive Design** - Works on all device sizes
- **Internationalization** - Multiple locale support with proper week start days
- **Customizable** - Flexible styling with SCSS variables
- **Accessible** - Full keyboard navigation and ARIA labels
- **Type Safe** - Written in TypeScript with full type definitions
- **Well Tested** - Comprehensive test suite with 79.6% code coverage
- **Zero Dependencies** - Only Vue 3 as peer dependency


## 📁 Project Structure

```text
vue3-calendar/
├── src/
│   ├── components/            # Vue components
│   │   ├── Calendar.vue       # Main calendar component
│   │   ├── CalendarDay.vue    # Individual day component
│   │   ├── CalendarGrid.vue   # Calendar grid layout
│   │   └── CalendarHeader.vue # Calendar header with navigation
│   ├── composables/           # Composition API functions
│   │   ├── use-calendar.ts    # Main calendar logic
│   │   ├── date-utils.ts      # Date manipulation utilities
│   │   └── locales.ts         # Localization configuration
│   ├── styles/                # SCSS stylesheets
│   │   ├── main.scss          # Main styles
│   │   ├── variables.scss     # SCSS variables
│   │   └── mixins.scss        # SCSS mixins
│   └── __tests__/             # Unit tests
├── demo/                      # Demo application
└── dist/                      # Built files
```

## 📦 Installation

### Library Installation:

```shell
yarn install @alekstar79/vue3-calendar
```

### Development Setup:

```shell
git clone https://github.com/alekstar79/vue3-calendar.git

cd vue3-calendar
yarn install
```

## 💻 Usage

### 📄 Basic Usage

```vue
<template>
  <Calendar
    :initial-date="initialDate"
    :locale="locale"
    @date-selected="handleDateSelect"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@alekstar79/vue3-calendar'
import type { SupportedLocale } from '@alekstar79/vue3-calendar'

const initialDate = ref('2024-01-15')
const locale = ref<SupportedLocale>('en-US')

const handleDateSelect = (date: Date) => {
  console.log('Selected date:', date)
}
</script>
```

## ⚙️ Configuration

### 📊 Supported Locales

Locale	Language	Week Starts On

- en-US	English (US)	Sunday
- ru-RU	Russian	Monday
- de-DE	German	Monday
- fr-FR	French	Monday
- es-ES	Spanish	Monday

## 🔧 Component Props

| Prop          | Type               | Default     | Description                        |
|---------------|--------------------|-------------|------------------------------------|
| `initialDate` | `string` \| `Date` | `undefined` | Initial date to display and select |
| `locale`      | `SupportedLocale`  | `en-US`     | Locale for internationalization    |


## 📡 Component Events

| Event           | Payload | Description                     |
|-----------------|---------|---------------------------------|
| `date-selected` | `Date`  | Emitted when a date is selected |


## 🎨 Custom Styling with SCSS

```scss
// Import and override SCSS variables
@import '@alekstar79/vue3-calendar/src/styles/variables';

// Customize colors
$color-primary: #8b5cf6;
$color-primary-light: #ede9fe;
$color-primary-dark: #5b21b6;

// Customize spacing
$spacing-md: 0.75rem;
$spacing-lg: 1.25rem;

// Customize breakpoints
$breakpoint-sm: 480px;
$breakpoint-md: 768px;
```

## 🎯 Available SCSS Variables

```scss
// Colors
$color-primary: #3b82f6;
$color-primary-light: #dbeafe;
$color-primary-dark: #1e40af;

// Text colors
$text-primary: #111827;
$text-secondary: #4b5563;
$text-muted: #6b7280;

// Spacing
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;

// Breakpoints
$breakpoint-sm: 640px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
```

## 📖 API Reference

### 🔧 Composables

useCalendar

```typescript
import { useCalendar } from '@alekstar79/vue3-calendar'

const {
  selectedDate,      // Currently selected date
  displayMonth,      // Current displayed month
  monthView,         // 2D array of calendar days
  selectDate,        // Function to select a date
  nextMonth,         // Navigate to next month
  previousMonth,     // Navigate to previous month
  goToToday,         // Navigate to current month and select today
  clearSelectedDate  // Clear current selection
} = useCalendar(initialDate?, locale?)
```

## 📅 Date Utilities

```typescript
import {
  formatDate,        // Format date to YYYY-MM-DD
  parseDate,         // Parse YYYY-MM-DD string to Date
  isToday,           // Check if date is today
  isSameDay,         // Check if two dates are the same day
  addDays,           // Add days to a date
  addMonths,         // Add months to a date
  getMonthDays,      // Get month days as 2D array
  getMonthName,      // Get localized month name
  getShortDayNames   // Get localized short day names
} from '@alekstar79/vue3-calendar'

// Example usage
const today = new Date()
const formatted = formatDate(today) // "2025-09-15"
const isToday = isToday(today) // true
```

## 🌍 Internationalization

The calendar automatically adapts to locale-specific settings:

- Month names in local language
- Day names in local language and order
- Week start day according to regional standards
- Date formatting based on locale conventions

```typescript
// Type definition for supported locales
type SupportedLocale = 'en-US' | 'ru-RU' | 'de-DE' | 'fr-FR' | 'es-ES'
```

## 🧪 Testing

The project includes comprehensive tests with Vitest and Vue Test Utils.

### 🚀 Running Tests

```shell
yarn test          # Run tests in watch mode
yarn test:run      # Run tests once
yarn test:ui       # Run tests with UI
yarn coverage      # Run tests with coverage report
```

### 📊 Test Coverage

| Category   | Percentage |
|------------|------------|
| Statements | 79.6%      |
| Branches   | 89.55%     |
| Functions  | 65.85%     |
| Lines      | 79.6%      |


### 🏗️ Test Structure

```text
src/__tests__/
├── Calendar.spec.ts      # Component integration tests
├── date-utils.spec.ts    # Date utility function tests
└── use-calendar.spec.ts  # Composable logic tests
```

## 🔨 Development

### 🛠️ Development Commands

```shell
yarn dev          # Start development server with demo
yarn build        # Build demo application
yarn build:lib    # Build library for distribution
yarn type-check   # TypeScript type checking
yarn lint         # Code linting and formatting
```

### 📦 Building for Production

```shell
# Build library for distribution
yarn run build:lib

# The build generates:
# - dist/calendar.es.js (ES module)
# - dist/calendar.umd.cjs (UMD module)
# - dist/index.d.ts (TypeScript definitions)
# - dist/style.css (Compiled styles)
```


## 📋 Browser Support

| Browser    | Version | Support |
|------------|---------|---------|
| 🟢 Chrome  | 64+     | ✅ Full  |
| 🟢 Firefox | 67+     | ✅ Full  |
| 🟢 Safari  | 12+     | ✅ Full  |
| 🟢 Edge    | 79+     | ✅ Full  |


## ❗ Troubleshooting

### Common Import Issues:

```typescript
// ✅ Correct
import { Calendar } from '@alekstar79/vue3-calendar'
import type { SupportedLocale } from '@alekstar79/vue3-calendar'

// ❌ Incorrect
import Calendar from '@alekstar79/vue3-calendar'
````

### Locale Configuration:

```typescript
// noinspection JSAnnotator

// ✅ Supported locales
const locale = ref<'en-US' | 'ru-RU' | 'de-DE' | 'fr-FR' | 'es-ES'>('en-US')

// ❌ Unsupported locale
const locale = ref('ja-JP') // TypeScript will error
```

### Date Formatting:

```typescript
// noinspection JSAnnotator

// ✅ Correct date format
const initialDate = ref('2024-01-15') // YYYY-MM-DD

// ❌ Incorrect format
const initialDate = ref('15-01-2024') // May cause parsing issues
```

## 🐛 Common Issues

**Styles not loading:**

- Ensure you import the CSS: @import '@alekstar79/vue3-calendar/dist/style.css'

**Locale not changing week start:**

- Verify you're using a supported locale value
- Check that weekStartsOn is properly configured in locales.ts

**TypeScript errors:**

- Ensure you have TypeScript 5.3+ and Vue 3.4+
- Import types correctly using import type


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: git checkout -b feature/amazing-feature
3. Commit your changes: git commit -m 'Add amazing feature'
4. Push to the branch: git push origin feature/amazing-feature
5. Open a pull request


## 👨‍💻 Author

Aleksey Tarasenko

- Email: [alekstar79@yandex.ru](mailto:alekstar79@yandex.ru)
- GitHub: [@alekstar79](https://github.com/alekstar79)

<div align="center"> Built with ❤️ using Vue 3 and TypeScript </div>

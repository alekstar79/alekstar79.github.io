# 📅 Vue 3 Calendar Component

A modern, responsive, and customizable calendar component built with Vue 3 Composition API. Features a sleek design with smooth animations, internationalization support, and comprehensive date manipulation utilities.

[![Vue 3 Calendar](https://img.shields.io/badge/Vue-3.3+-green.svg)]()
[![NPM](https://img.shields.io/npm/v/@alekstar79/vue3-calendar.svg)](https://www.npmjs.com/package/@alekstar79/vue3-calendar)
[![GitHub repo](https://img.shields.io/badge/github-repo-green.svg?style=flat)](https://github.com/alekstar79/vue3-calendar)
[![Build](https://img.shields.io/badge/Build-Vite-orange.svg)]()
[![Version](https://img.shields.io/badge/Version-1.0.0-orange)]()
[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()

**![Marquee Canvas](review.gif)**

## 🎮 Demo

Check out the live demo: [Vue3 Calendar](https://alekstar79.github.io/vue3-calendar)


## ✨ Features

- **Vue 3 Composition API** - Built with modern Vue 3 and Composition API
- **Internationalization** - Support for multiple locales (RU, EN, DE, FR, ES, ZH, JP)
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, minimalist design with smooth animations and hover effects
- **Performance Optimized** - Efficient rendering with minimal bundle size
- **Customizable** - Flexible props and events for easy integration
- **Date Utilities** - Comprehensive date manipulation and formatting utilities
- **Demo Application** - Complete demo showcasing all features

## 🚀 Quick Start

### Installation

```shell
yarn install @alekstar79/vue3-calendar-component
```

### Basic Usage

```vue
<template>
  <Calendar
    :initial-date="selectedDate"
    :locale="currentLocale"
    @date-selected="handleDateSelection"
  />
</template>

<script setup>
import { Calendar } from '@alekstar79/vue3-calendar-component'
import { ref } from 'vue'

const selectedDate = ref('2024-03-15')
const currentLocale = ref('en-US')

const handleDateSelection = (date) => {
  console.log('Selected date:', date)
  selectedDate.value = date
}
</script>
```

## 📁 Project Structure

```text
vue3-calendar/
├── index.html
├── jsconfig.json
├── package.json
├── README.md
├── vite.config.js
├── vite.lib.config.js
├── yarn.lock
├── public/
│   └── favicon.png
└── src/
    ├── index.js
    ├── components/
    │   ├── Calendar.vue          # Main calendar component
    │   ├── CalendarControls.vue  # Control panel component
    │   └── CalendarResults.vue   # Results display component
    ├── composable/
    │   └── useCalendar.js        # Calendar composition API
    ├── demo/
    │   ├── App.vue               # Demo application
    │   └── main.js               # Demo entry point
    └── utils/
        └── dateUtils.js          # Date manipulation utilities
```

## 🔧 API Reference

### Calendar Component Props

| Prop           | Type     | Default | Description                       |
|----------------|----------|---------|-----------------------------------|
| `initial-date` | `String` | `null`  | Initial date in YYYY-MM-DD format |
| `locale`       | `String` | `ru-RU` | Locale for internationalization   |


### Calendar Component Events

| Event           | Payload               | Description                     |
|-----------------|-----------------------|---------------------------------|
| `date-selected` | `String` (YYYY-MM-DD) | Emitted when a date is selected |


## Supported Locales

- ru-RU - Russian (Русский)
- en-US - English (US)
- de-DE - German (Deutsch)
- fr-FR - French (Français)

## 🛠 Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup and Development

1. Clone the repository
  
    ```shell
    git clone https://github.com/alekstar79/vue3-calendar-component.git
    cd vue3-calendar-component
    ```
2. Install dependencies

    ```shell
    yarn install
    ```
3. Run development server

    ```shell
    yarn dev
    ```
    Opens demo application at http://localhost:3000

### Build Commands

```shell
# Build library for distribution
yarn build:lib

# Build demo application
yarn build

# Preview built demo
yarn preview
```

## 🌟 Demo Application

The package includes a full-featured demo application that showcases:

- Calendar component with navigation
- Locale/language switching
- Date selection and display
- Event logging
- Responsive design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 👨‍💻 Author

Aleksey Tarasenko

- Email: [alekstar79@yandex.ru](mailto:alekstar79@yandex.ru)
- GitHub: [@alekstar79](https://github.com/alekstar79)

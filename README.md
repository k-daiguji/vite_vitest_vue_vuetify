# vite_vitest_vue_vuetify

[![npm version](https://img.shields.io/badge/vite-5.4.7-green)](https://www.npmjs.com/)
[![npm version](https://img.shields.io/badge/vitest-2.1.1-green)](https://nodejs.jp/)

[![npm version](https://img.shields.io/badge/typescript-5.6.2-green)](https://www.npmjs.com/package/typescript)
[![npm version](https://img.shields.io/badge/vue-3.5.8-green)](https://www.npmjs.com/package/vue)
[![npm version](https://img.shields.io/badge/vuetify-3.7.2-green)](https://www.npmjs.com/package/vuetify)

## VScode Extensions

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
- [Vue](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

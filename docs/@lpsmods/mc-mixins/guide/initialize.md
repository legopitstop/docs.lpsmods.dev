---
title: Initialize | @lpsmods/mc-mixins Documentation
description: To apply the mixins you'll need to initialize the package by importing it.
prev:
  text: Getting Started
  link: ./getting-started
next:
  text: FAQ
  link: ./faq
---

# Initialization

To apply the mixins you'll need to initialize the package by importing it.

::: warning
Make sure you import the package in your main file before any local imports.
:::

```ts
import "@lpsmods/mc-mixins";
// Additional imports
```

Now you can use the injected methods.

```ts
"hello world".toTitleCase(); // "Hello World"
```

---
title: Initialize Dev | @lpsmods/mc-dev
description: Debug utilities for Minecraft Bedrock Edition Add-On development.
prev:
  text: Getting Started
  link: ./getting-started
next:
  text: FAQ
  link: ./faq
---

# Initialize Dev

To use the `/dev` command you'll need to initialize the package by calling `initializeDev`.

```ts[test.ts]
import { initializeDev } from "@lpsmods/mc-dev";
const ENVIRONMENT = "development";

initializeDev(ENVIRONMENT);
```

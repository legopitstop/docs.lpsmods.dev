---
title: Progress Bar | @lpsmods/mc-common Documentation
description: Show a progress bar above the hotbar.
prev:
  text: Paged Action Form
  link: ./paged-action-form
next:
  text: FAQ
  link: ./faq
---

# Progress Bar

A progress bar displays a visual indicator of progress above the player's hotbar. It can show percentage completion and custom text, making it useful for displaying loading states, task progress, or other timed activities in add-ons.

## Creating a progress bar

```ts
import { ProgressBar } from '@lpsmods/mc-common';

const bar = new ProgressBar("wiki:example", {text: "Example"});
bar.style.showPercent = true;
bar.visible = false;
```

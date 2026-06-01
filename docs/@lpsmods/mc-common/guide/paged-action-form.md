---
title: Paged Action Form | @lpsmods/mc-common Documentation
description: Show a paged action form.
prev:
  text: Modal Form
  link: ./modal-form
next:
  text: Progress Bar
  link: ./progress-bar
---

# Paged Action Form

A paged action form allows you to create interactive forms with multiple pages that players can navigate through. Each page can have its own title, body text, and buttons for navigation or actions. This is useful for organizing complex user interfaces or step-by-step processes in add-ons.

## Creating a paged action form

```ts
import { world } from "@minecraft/server";
import { PagedActionFormHandler, Pages } from "@lpsmods/mc-common";

function showBasicPagedForm() {
  const players = world.getPlayers();
  const pages: Pages = {
    home: {
      title: "Home",
      body: "This is the main page.",
      buttons: ["page_1", "page_2", "page_3", "page_4", "page_5"],
    },
    page_1: {
      title: "Page 1",
      body: "This is the first page.",
    },
    page_2: {
      title: "Page 1",
      body: "This is the first page.",
    },
    page_3: {
      title: "Page 1",
      body: "This is the first page.",
    },
    page_4: {
      title: "Page 1",
      body: "This is the first page.",
    },
    page_5: {
      title: "Page 1",
      body: "This is the first page.",
    },
  };

  new PagedActionFormHandler(pages).show(players[0]);
}
```

---
title: "mcutils:guide_book Component | @lpsmods/mc-utils Documentation"
description: Guide book item behavior.
---

# mcutils:guide_book

Guide book item behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { GuideBookComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(GuideBookComponent.typeId, new GuideBookComponent());

  // Gives all players the book when they first enter the world.
  GuideBookComponent.setup("wiki:guide_book");
});
```

## Component

### [Options](./info_book.md#options)

## Examples

### Guide Book

<<< @/public/examples/mc-utils/items/guide_book.json{8-19}

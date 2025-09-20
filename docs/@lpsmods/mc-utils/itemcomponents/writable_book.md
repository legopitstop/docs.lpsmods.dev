---
title: "mcutils:writeable_book Component | @lpsmods/mc-utils Documentation"
description: Writeable book item behavior.
---

# mcutils:writeable_book

Writeable book item behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { WriteableBookComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(WriteableBookComponent.typeId, new WriteableBookComponent());
});
```

## Component

### Options

| Name        | Type   | Default | Description |
| ----------- | ------ | ------- | ----------- |
| `max_pages` | number | `50`    |             |

## Examples

### Writeable Book

<<< @/public/examples/mc-utils/items/custom_writable_book.json{8-10}

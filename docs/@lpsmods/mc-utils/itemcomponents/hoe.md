---
title: "mcutils:hoe Component | @lpsmods/mc-utils Documentation"
description: Makes this item till dirt like a hoe.
---

# mcutils:hoe

Makes this item till dirt like a hoe.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { HoeComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(HoeComponent.typeId, new HoeComponent());
});
```

## Component

### Options

| Name    | Type   | Default    | Description |
| ------- | ------ | ---------- | ----------- |
| `size`  | number | `1`        |             |
| `block` | string | `farmland` |             |

## Examples

### Hoe

<<< @/public/examples/mc-utils/items/custom_hoe.json{8-11}

---
title: "mcutils:potted_flower Component | @lpsmods/mc-utils Documentation"
description: Vanilla flower pot behavior.
---

# mcutils:potted_flower

Vanilla flower pot behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { PottedFlowerComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(PottedFlowerComponent.typeId, new PottedFlowerComponent());
});
```

## Component

### Options

| Name    | Type   | Default      | Description |
| ------- | ------ | ------------ | ----------- |
| `item`  | string |              |             |
| `block` | string | `flower_pot` |             |

## Examples

### Flower

<<< @/public/examples/mc-utils/blocks/custom_potted_flower.json{8-11}

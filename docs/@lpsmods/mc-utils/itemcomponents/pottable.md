---
title: "mcutils:pottable Component | @lpsmods/mc-utils Documentation"
description: Makes this item pottable.
---

# mcutils:pottable

Makes this item pottable.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { PottableComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(PottableComponent.typeId, new PottableComponent());
});
```

## Component

### Options

| Name         | Type   | Default      | Description |
| ------------ | ------ | ------------ | ----------- |
| `block`      | string |              |             |
| `flower_pot` | string | `flower_pot` |             |

## Examples

### Flower

<<< @/public/examples/mc-utils/items/custom_flower.json{8-11}

### Sapling

<<< @/public/examples/mc-utils/items/custom_sapling.json{8-11}

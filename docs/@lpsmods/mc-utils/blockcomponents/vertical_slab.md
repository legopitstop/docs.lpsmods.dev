---
title: "mcutils:vertical_slab Component | @lpsmods/mc-utils Documentation"
description: Vertical slab block behavior.
---

# mcutils:vertical_slab

Vertical slab block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { VerticalSlabComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(VerticalSlabComponent.typeId, new VerticalSlabComponent());
});
```

## Component

### Options

| Name              | Type   | Default                        | Description |
| ----------------- | ------ | ------------------------------ | ----------- |
| `direction_state` | string | `minecraft:cardinal_direction` |             |
| `double_state`    | string | `mcutils:double`               |             |

## Examples

### Vertical Slab

<<< @/public/examples/mc-utils/blocks/custom_vertical_slab.json{14-17}

---
title: "mcutils:fertilizable Component | @lpsmods/mc-utils Documentation"
description: Vanilla fertilizable block behavior.
---

# mcutils:fertilizable

Vanilla fertilizable block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { FertilizableComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(FertilizableComponent.typeId, new FertilizableComponent());
});
```

## Component

### Options

| Name           | Type     | Default         | Description |
| -------------- | -------- | --------------- | ----------- |
| `growth_state` | string   |                 |             |
| `max_stage`    | number   | `7`             |             |
| `items`        | string[] | `["bone_meal"]` |             |

## Examples

### Crop

<<< @/public/examples/mc-utils/blocks/custom_crop.json{15-18}

### Bush

<<< @/public/examples/mc-utils/blocks/custom_bush.json{22-25}

### Sapling

<<< @/public/examples/mc-utils/blocks/custom_sapling.json{14-17}

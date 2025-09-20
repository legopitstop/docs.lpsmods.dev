---
title: "mcutils:crop Component | @lpsmods/mc-utils Documentation"
description: Vanilla crop block behavior.
---

# mcutils:crop

Vanilla crop block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CropComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CropComponent.typeId, new CropComponent());
});
```

## Component

### Options

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `growth_state` | string |         |             |
| `max_stage`    | number | `7`     |             |

## Examples

### Crop

<<< @/public/examples/mc-utils/blocks/custom_crop.json{11-14}

---
title: "mcutils:flower_bed Component | @lpsmods/mc-utils Documentation"
description: Vanilla flower bed block behavior.
---

# mcutils:flower_bed

Vanilla flower bed block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { FlowerBedComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(FlowerBedComponent.typeId, new FlowerBedComponent());
});
```

## Component

### Options

| Name            | Type   | Default           | Description |
| --------------- | ------ | ----------------- | ----------- |
| `flowers_state` | string | `mcutils:flowers` |             |
| `max_flowers`   | number | `4`               |             |

## Examples

### Flower Bed

<<< @/public/examples/mc-utils/blocks/custom_flower_bed.json{11-14}

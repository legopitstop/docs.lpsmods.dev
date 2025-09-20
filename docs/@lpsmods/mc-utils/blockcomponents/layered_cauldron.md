---
title: "mcutils:layered_cauldron Component | @lpsmods/mc-utils Documentation"
description: Vanilla "water" cauldron block behavior.
---

# mcutils:layered_cauldron

Vanilla "water" cauldron block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { LayeredCauldronComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(LayeredCauldronComponent.typeId, new LayeredCauldronComponent());
});
```

## Component

### Options

| Name           | Type     | Default         | Description |
| -------------- | -------- | --------------- | ----------- |
| `block`        | string   | `cauldron`      |             |
| `level_state`  | string   | `mcutils:level` |             |
| `max_level`    | number   | `3`             |             |
| `interactions` | string[] | `[]`            |             |

## Examples

### Water Cauldron

<<< @/public/examples/mc-utils/blocks/custom_water_cauldron.json{11-16}

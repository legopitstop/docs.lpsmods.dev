---
title: "mcutils:lava_cauldron Component | @lpsmods/mc-utils Documentation"
description: Vanilla "lava" cauldron block behavior.
---

# mcutils:lava_cauldron

Vanilla "lava" cauldron block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { LavaCauldronComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(LavaCauldronComponent.typeId, new LavaCauldronComponent());
});
```

## Component

### Options

| Name           | Type     | Default    | Description |
| -------------- | -------- | ---------- | ----------- |
| `block`        | string   | `cauldron` |             |
| `interactions` | string[] | `[]`       |             |

## Examples

### Lava Cauldron

<<< @/public/examples/mc-utils/blocks/custom_lava_cauldron.json{8-11}

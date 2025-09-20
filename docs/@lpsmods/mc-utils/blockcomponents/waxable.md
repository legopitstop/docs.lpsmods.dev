---
title: "mcutils:waxable Component | @lpsmods/mc-utils Documentation"
description: Vanilla waxable block behavior.
---

# mcutils:waxable

Vanilla waxable block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { WaxableComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(WaxableComponent.typeId, new WaxableComponent());
});
```

## Component

### Options

| Name              | Type   | Default                  | Description |
| ----------------- | ------ | ------------------------ | ----------- |
| `block`           | string |                          |             |
| `items`           | string | `minecraft:wax_particle` |             |
| `particle_effect` | string | `copper.wax.on`          |             |
| `sound_effect`    | string | `[]`                     |             |

## Examples

### Copper Bulb

<<< @/public/examples/mc-utils/blocks/copper/custom_copper_bulb.json{16-19}

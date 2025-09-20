---
title: "mcutils:scrape_wax Component | @lpsmods/mc-utils Documentation"
description: Vanilla scrape wax block behavior.
---

# mcutils:scrape_wax

Vanilla scrape wax block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { ScrapeWaxComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(ScrapeWaxComponent.typeId, new ScrapeWaxComponent());
});
```

## Component

### Options

| Name              | Type   | Default                  | Description |
| ----------------- | ------ | ------------------------ | ----------- |
| `block`           | string |                          |             |
| `particle_effect` | string | `minecraft:wax_particle` |             |
| `sound_effect`    | string | `copper.wax.off`         |             |

## Examples

### Waxed Copper Bulb

<<< @/public/examples/mc-utils/blocks/copper/custom_waxed_copper_bulb.json{16-18}

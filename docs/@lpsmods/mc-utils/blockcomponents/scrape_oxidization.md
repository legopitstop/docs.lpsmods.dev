---
title: "mcutils:scrape_oxidization Component | @lpsmods/mc-utils Documentation"
description: Vanilla scrape oxidization block behavior.
---

# mcutils:scrape_oxidization

Vanilla scrape oxidization block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { ScrapeOxidizationComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(
    ScrapeOxidizationComponent.typeId,
    new ScrapeOxidizationComponent(),
  );
});
```

## Component

### Options

| Name              | Type   | Default                  | Description |
| ----------------- | ------ | ------------------------ | ----------- |
| `block`           | string |                          |             |
| `particle_effect` | string | `minecraft:max_particle` |             |
| `sound_effect`    | string | `scrape`                 |             |

## Examples

### Oxidized Copper Bulb

<<< @/public/examples/mc-utils/blocks/copper/custom_oxidized_copper_bulb.json{20-22}

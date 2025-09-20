---
title: "mcutils:sponge Component | @lpsmods/mc-utils Documentation"
description: Vanilla sponge block behavior.
---

# mcutils:sponge

Vanilla sponge block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { SpongeComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(SpongeComponent.typeId, new SpongeComponent());
});
```

## Component

### Options

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `block`        | string |         |             |
| `liquid_block` | string | `water` |             |
| `air_block`    | string | `air`   |             |
| `size`         | number | `7`     |             |

## Examples

### Sponge

<<< @/public/examples/mc-utils/blocks/custom_sponge.json{8-13}

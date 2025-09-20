---
title: "mcutils:farmland Component | @lpsmods/mc-utils Documentation"
description: Vanilla farmland block behavior.
---

# mcutils:farmland

Vanilla farmland block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { FarmlandComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(FarmlandComponent.typeId, new FarmlandComponent());
});
```

## Component

### Options

| Name             | Type   | Default            | Description |
| ---------------- | ------ | ------------------ | ----------- |
| `moisture_state` | string | `mcutils:moisture` |             |
| `block`          | string | `dirt`             |             |
| `max_moisture`   | number | `7`                |             |
| `moist_block`    | string | `water`            |             |

## Examples

### Farmland

<<< @/public/examples/mc-utils/blocks/custom_farmland.json{11-13}

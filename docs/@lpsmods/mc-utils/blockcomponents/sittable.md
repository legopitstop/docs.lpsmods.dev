---
title: "mcutils:sittable Component | @lpsmods/mc-utils Documentation"
description: Sittable block behavior.
---

# mcutils:sittable

Sittable block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { SittableComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(SittableComponent.typeId, new SittableComponent());
});
```

## Component

### Options

| Name              | Type     | Default   | Description |
| ----------------- | -------- | --------- | ----------- |
| `seat_position`   | number[] | `[0,8,0]` |             |
| `seat_animations` | string[] | `[]`      |             |

## Examples

### Seat

<<< @/public/examples/mc-utils/blocks/seat.json{14-17}

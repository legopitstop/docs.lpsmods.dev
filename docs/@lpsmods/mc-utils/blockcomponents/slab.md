---
title: "mcutils:slab Component | @lpsmods/mc-utils Documentation"
description: Vanilla slab block behavior.
---

# mcutils:slab

Vanilla slab block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { SlabComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(SlabComponent.typeId, new SlabComponent());
});
```

## Component

### Options

| Name           | Type   | Default          | Description |
| -------------- | ------ | ---------------- | ----------- |
| `double_state` | string | `mcutils:double` |             |

## Examples

### Slab

<<< @/public/examples/mc-utils/blocks/custom_slab.json{16-18}

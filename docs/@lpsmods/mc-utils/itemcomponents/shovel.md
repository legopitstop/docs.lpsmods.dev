---
title: "mcutils:shovel Component | @lpsmods/mc-utils Documentation"
description: Makes this item flatten dirt like a shovel.
---

# mcutils:shovel

Makes this item flatten dirt like a shovel.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { ShovelComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(ShovelComponent.typeId, new ShovelComponent());
});
```

## Component

### Options

| Name    | Type   | Default      | Description |
| ------- | ------ | ------------ | ----------- |
| `size`  | number | `1`          |             |
| `block` | string | `grass_path` |             |

## Examples

### Shovel

<<< @/public/examples/mc-utils/items/custom_shovel.json{8-11}

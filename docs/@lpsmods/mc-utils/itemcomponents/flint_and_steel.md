---
title: "mcutils:flint_and_steel Component | @lpsmods/mc-utils Documentation"
description: Makes this item place fire like a flint and steel.
---

# mcutils:flint_and_steel

Makes this item place fire like a flint and steel.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { FlintAndSteelComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(FlintAndSteelComponent.typeId, new FlintAndSteelComponent());
});
```

## Component

### Options

| Name    | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| `block` | string | `fire`  |             |
| `size`  | number | `1`     |             |

## Examples

### Flint and Steel

<<< @/public/examples/mc-utils/items/custom_flint_and_steel.json{8-11}

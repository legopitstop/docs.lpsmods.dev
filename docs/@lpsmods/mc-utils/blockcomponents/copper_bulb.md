---
title: "mcutils:copper_bulb Component | @lpsmods/mc-utils Documentation"
description: Vanilla copper bulb block behavior.
---

# mcutils:copper_bulb

Vanilla copper bulb block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CopperBulbComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CopperBulbComponent.typeId, new CopperBulbComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name            | Type   | Default           | Description |
| --------------- | ------ | ----------------- | ----------- |
| `lit_state`     | string | `mcutils:lit`     |             |
| `powered_state` | string | `mcutils:powered` |             |

## Examples

### Copper Bulb

<<< @/public/examples/mc-utils/blocks/copper/custom_copper_bulb.json{23-26}

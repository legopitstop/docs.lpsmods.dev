---
title: "mcutils:bush Component | @lpsmods/mc-utils Documentation"
description: Vanilla bush block behavior.
---

# mcutils:bush

Vanilla bush block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { BushComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(BushComponent.typeId, new BushComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name           | Type     | Default          | Description |
| -------------- | -------- | ---------------- | ----------- |
| `growth_state` | string   | `mcutils:growth` |             |
| `loot_tables`  | string[] |                  |             |

## Examples

### Bush

<<< @/public/examples/mc-utils/blocks/custom_bush.json{14-17}

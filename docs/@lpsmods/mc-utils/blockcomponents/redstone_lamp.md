---
title: "mcutils:redstone_lamp Component | @lpsmods/mc-utils Documentation"
description: Vanilla redstone lamp block behavior.
---

# mcutils:redstone_lamp

Vanilla redstone lamp block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { RedstoneLampComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(RedstoneLampComponent.typeId, new RedstoneLampComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name        | Type   | Default       | Description |
| ----------- | ------ | ------------- | ----------- |
| `lit_state` | string | `mcutils:lit` |             |
| `delay`     | number | `0`           |             |

## Examples

### Redstone Lamp

<<< @/public/examples/mc-utils/blocks/custom_redstone_lamp.json{15-18}

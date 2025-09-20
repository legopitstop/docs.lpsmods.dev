---
title: "mcutils:candle_cake Component | @lpsmods/mc-utils Documentation"
description: Vanilla candle cake block behavior.
---

# mcutils:candle_cake

Vanilla candle cake block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CandleCakeComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CandleCakeComponent.typeId, new CandleCakeComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name             | Type     | Default                           | Description |
| ---------------- | -------- | --------------------------------- | ----------- |
| `candle`         | string   |                                   |             |
| `lit_state`      | string   | `mcutils:lit`                     |             |
| `slice_state`    | string   | `mcutils:slices`                  |             |
| `block`          | string   |                                   |             |
| `flame_position` | number[] | `[0,16,0]`                        |             |
| `flame_particle` | string   | `minecraft:candle_flame_particle` |             |

## Examples

### Candle Cake

<<< @/public/examples/mc-utils/blocks/custom_candle_cake.json{14-21}

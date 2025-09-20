---
title: "mcutils:candle Component | @lpsmods/mc-utils Documentation"
description: Vanilla candle block behavior.
---

# mcutils:candle

Vanilla candle block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CandleComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CandleComponent.typeId, new CandleComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name             | Type     | Default                           | Description |
| ---------------- | -------- | --------------------------------- | ----------- |
| `candles_state`  | string   |                                   |             |
| `lit_state`      | number   |                                   |             |
| `max_candles`    | string   |                                   |             |
| `item`           | string   |                                   |             |
| `flame_particle` | string   | `minecraft:candle_flame_particle` |             |
| `fame_positions` | string[] | `[]`                              |             |

## Examples

### Candle

<<< @/public/examples/mc-utils/blocks/custom_candle.json{15-33}

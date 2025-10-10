---
title: "mcutils:candle Component | @lpsmods/mc-utils Documentation"
description: Vanilla candle block behavior.
---

# mcutils:candle

Vanilla candle block behavior.

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name             | Type     | Default                           | Description |
| ---------------- | -------- | --------------------------------- | ----------- |
| `candles_state`  | string   | `mcutils:candles`                 |             |
| `lit_state`      | number   | `mcutils:lit`                     |             |
| `max_candles`    | string   | `4`                               |             |
| `item`           | string   |                                   |             |
| `flame_particle` | string   | `minecraft:candle_flame_particle` |             |
| `fame_positions` | string[] | `[]`                              |             |

## Examples

### Candle

<<< @/public/examples/mc-utils/blocks/custom_candle.json{15-33}

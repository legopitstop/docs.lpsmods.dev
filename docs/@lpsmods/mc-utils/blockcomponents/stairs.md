---
title: "mcutils:stairs Component | @lpsmods/mc-utils Documentation"
description: Vanilla stairs block behavior.
---

# mcutils:stairs

Vanilla stairs block behavior.

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name              | Type   | Default                        | Description |
| ----------------- | ------ | ------------------------------ | ----------- |
| `direction_state` | string | `minecraft:cardinal_direction` |             |
| `half_state`      | string | `minecraft:vertical_half`      |             |
| `shape_state`     | string | `mcutils:shape`                |             |

## Examples

### Stairs

<<< @/public/examples/mc-utils/blocks/custom_stairs.json{24-28}

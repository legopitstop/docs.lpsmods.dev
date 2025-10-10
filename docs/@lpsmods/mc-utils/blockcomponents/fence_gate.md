---
title: "mcutils:fence_gate Component | @lpsmods/mc-utils Documentation"
description: Fence gate block behavior.
---

# mcutils:fence_gate

Fence gate block behavior.

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name              | Type   | Default                        | Description |
| ----------------- | ------ | ------------------------------ | ----------- |
| `in_wall_state`   | string | `mcutils:in_wall`              |             |
| `direction_state` | string | `minecraft:cardinal_direction` |             |

## Examples

### Fence Gate

<<< @/public/examples/mc-utils/blocks/custom_fence_gate.json{21-27}

---
title: "mcutils:wall Component | @lpsmods/mc-utils Documentation"
description: Vanilla wall block behavior.
---

# mcutils:wall

Vanilla wall block behavior.

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name          | Type   | Default         | Description |
| ------------- | ------ | --------------- | ----------- |
| `north_state` | string | `mcutils:north` |             |
| `east_state`  | string | `mcutils:east`  |             |
| `south_state` | string | `mcutils:south` |             |
| `west_state`  | string | `mcutils:west`  |             |
| `up_state`    | string | `mcutils:up`    |             |

## Examples

### Wall

<<< @/public/examples/mc-utils/blocks/custom_wall.json{19-25}

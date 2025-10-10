---
title: "mcutils:pressure_plate Component | @lpsmods/mc-utils Documentation"
description: Vanilla pressure plate block behavior.
---

# mcutils:pressure_plate

Vanilla pressure plate block behavior.

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name                    | Type   | Default                          | Description |
| ----------------------- | ------ | -------------------------------- | ----------- |
| `filter`                | object | `{"type": "player"}`             |             |
| `powered_state`         | string | `mcutils:powered`                |             |
| `delay`                 | number | `20`                             |             |
| `click_on_sound_event`  | string | `click_on.stone_pressure_plate`  |             |
| `click_off_sound_event` | string | `click_off.stone_pressure_plate` |             |

## Examples

### Pressure Plate

<<< @/public/examples/mc-utils/blocks/custom_pressure_plate.json{15-18}

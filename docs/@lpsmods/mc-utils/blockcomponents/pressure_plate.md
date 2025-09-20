---
title: "mcutils:pressure_plate Component | @lpsmods/mc-utils Documentation"
description: Vanilla pressure plate block behavior.
---

# mcutils:pressure_plate

Vanilla pressure plate block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { PressurePlateComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(PressurePlateComponent.typeId, new PressurePlateComponent());
});
```

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

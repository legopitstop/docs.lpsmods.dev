---
title: "mcutils:powder_snow Component | @lpsmods/mc-utils Documentation"
description: Vanilla powder snow block behavior.
---

# mcutils:powder_snow

Vanilla powder snow block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { PowderSnowComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(PowderSnowComponent.typeId, new PowderSnowComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name             | Type   | Default         | Description |
| ---------------- | ------ | --------------- | ----------- |
| `solid_state`    | string | `mcutils:solid` |             |
| `fog_identifier` | string |                 |             |

## Examples

### Powder Snow

<<< @/public/examples/mc-utils/blocks/custom_powder_snow.json{14-17}

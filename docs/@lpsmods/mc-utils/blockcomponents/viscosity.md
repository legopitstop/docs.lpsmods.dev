---
title: "mcutils:viscosity Component | @lpsmods/mc-utils Documentation"
description: Block viscosity behavior.
---

# mcutils:viscosity

Block viscosity behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { ViscosityComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(ViscosityComponent.typeId, new ViscosityComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name    | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| `value` | number |         |             |

## Examples

### Bush

<<< @/public/examples/mc-utils/blocks/custom_bush.json{26-28}

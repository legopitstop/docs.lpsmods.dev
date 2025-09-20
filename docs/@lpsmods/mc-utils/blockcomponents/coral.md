---
title: "mcutils:coral Component | @lpsmods/mc-utils Documentation"
description: Vanilla coral block behavior.
---

# mcutils:coral

Vanilla coral block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CoralComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CoralComponent.typeId, new CoralComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name    | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| `delay` | number | `60`    |             |
| `block` | string |         |             |

## Examples

### Coral Block

<<< @/public/examples/mc-utils/blocks/custom_coral_block.json{12-15}

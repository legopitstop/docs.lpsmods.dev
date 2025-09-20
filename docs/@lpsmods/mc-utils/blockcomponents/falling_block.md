---
title: "mcutils:falling_block Component | @lpsmods/mc-utils Documentation"
description: Vanilla falling block behavior.
---

# mcutils:falling_block

Vanilla falling block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { FallingBlockComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(FallingBlockComponent.typeId, new FallingBlockComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name     | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| `entity` | string |         |             |

## Examples

### Concrete Powder

<<< @/public/examples/mc-utils/blocks/custom_concrete_powder.json{13-15}

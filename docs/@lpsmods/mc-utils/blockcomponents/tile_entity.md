---
title: "mcutils:tile_entity Component | @lpsmods/mc-utils Documentation"
description: Vanilla tile entity block behavior. (Like; chests, barrels)
---

# mcutils:tile_entity

Vanilla tile entity block behavior. (Like; chests, barrels)

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { TileEntityComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(TileEntityComponent.typeId, new TileEntityComponent());
});
```

## Component

### Options

| Name     | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| `entity` | string |         |             |

## Examples

### Chest

<<< @/public/examples/mc-utils/blocks/custom_chest.json{8-10}

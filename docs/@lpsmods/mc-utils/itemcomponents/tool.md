---
title: "mcutils:tool Component | @lpsmods/mc-utils Documentation"
description: Deals damage to the item when you break a block or hit an entity.
---

# mcutils:tool

Deals damage to the item when you break a block or hit an entity.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { ToolComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(ToolComponent.typeId, new ToolComponent());
});
```

## Component

### Options

| Name                | Type    | Default | Description |
| ------------------- | ------- | ------- | ----------- |
| `damage_when_mined` | boolean | `false` |             |
| `damage_when_hit`   | boolean | `false` |             |

## Examples

### Pickaxe

<<< @/public/examples/mc-utils/items/custom_pickaxe.json{8-10}

### Sword

<<< @/public/examples/mc-utils/items/custom_sword.json{8-10}

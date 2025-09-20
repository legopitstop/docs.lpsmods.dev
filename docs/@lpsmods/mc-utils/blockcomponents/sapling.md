---
title: "mcutils:sapling Component | @lpsmods/mc-utils Documentation"
description: Vanilla sapling block behavior.
---

# mcutils:sapling

Vanilla sapling block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { SaplingComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(SaplingComponent.typeId, new SaplingComponent());
});
```

## Component

### Options

| Name           | Type   | Default                      | Description |
| -------------- | ------ | ---------------------------- | ----------- |
| `growth_state` | string |                              |             |
| `max_stage`    | string | `2`                          |             |
| `feature`      | string | `minecraft:oak_tree_feature` |             |

## Examples

### Sapling

<<< @/public/examples/mc-utils/blocks/custom_sapling.json{11-13}

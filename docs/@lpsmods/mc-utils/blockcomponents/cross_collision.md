---
title: "mcutils:cross_collision Component | @lpsmods/mc-utils Documentation"
description: Fence, Iron bars, and glass pane like behavior.
---

# mcutils:cross_collision

Fence, Iron bars, and glass pane like behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CrossCollisionComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CrossCollisionComponent.typeId, new CrossCollisionComponent());
});
```

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

## Examples

### Fence

<<< @/public/examples/mc-utils/blocks/custom_fence.json{18-23}

### Glass Pane

<<< @/public/examples/mc-utils/blocks/custom_glass_pane.json{18-23}

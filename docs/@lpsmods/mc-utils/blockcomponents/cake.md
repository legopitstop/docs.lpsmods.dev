---
title: "mcutils:cake Component | @lpsmods/mc-utils Documentation"
description: Vanilla cake block behavior.
---

# mcutils:cake

Vanilla cake block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CakeComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CakeComponent.typeId, new CakeComponent());
});
```

## Component

### Options

| Name           | Type     | Default          | Description |
| -------------- | -------- | ---------------- | ----------- |
| `slice_state`  | string   | `mcutils:slices` |             |
| `max_slices`   | number   | `6`              |             |
| `nutrition`    | number   | `2`              |             |
| `interactions` | string[] | `[]`             |             |

## Examples

### Cake

<<< @/public/examples/mc-utils/blocks/custom_cake.json{11-15}

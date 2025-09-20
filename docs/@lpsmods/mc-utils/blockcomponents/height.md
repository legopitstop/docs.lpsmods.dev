---
title: "mcutils:height Component | @lpsmods/mc-utils Documentation"
description: Vanilla snow layer block behavior.
---

# mcutils:height

Vanilla snow layer block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { HeightComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(HeightComponent.typeId, new HeightComponent());
});
```

## Component

### Options

| Name           | Type   | Default          | Description |
| -------------- | ------ | ---------------- | ----------- |
| `layers_state` | string | `mcutils:layers` |             |
| `max_layers`   | number | `8`              |             |

## Examples

### Height

<<< @/public/examples/mc-utils/blocks/custom_height.json{16-19}

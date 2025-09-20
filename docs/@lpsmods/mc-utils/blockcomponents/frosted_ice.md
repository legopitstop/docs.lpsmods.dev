---
title: "mcutils:frosted_ice Component | @lpsmods/mc-utils Documentation"
description: Vanilla frosted ice block behavior.
---

# mcutils:frosted_ice

Vanilla frosted ice block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { FrostedIceComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(FrostedIceComponent.typeId, new FrostedIceComponent());
});
```

## Component

### Options

| Name          | Type   | Default | Description |
| ------------- | ------ | ------- | ----------- |
| `age_state`   | string |         |             |
| `max_age`     | number | `7`     |             |
| `converts_to` | string | `water` |             |

## Examples

### Frosted Ice

<<< @/public/examples/mc-utils/blocks/custom_frosted_ice.json{11-15}

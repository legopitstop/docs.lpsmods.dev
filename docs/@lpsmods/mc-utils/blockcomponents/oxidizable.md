---
title: "mcutils:oxidizable Component | @lpsmods/mc-utils Documentation"
description: Vanilla oxidizable block behavior.
---

# mcutils:oxidizable

Vanilla oxidizable block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { OxidizableComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(OxidizableComponent.typeId, new OxidizableComponent());
});
```

## Component

### Options

| Name    | Type   | Default | Description |
| ------- | ------ | ------- | ----------- |
| `block` | string |         |             |

## Examples

### Copper Bulb

<<< @/public/examples/mc-utils/blocks/copper/custom_copper_bulb.json{20-22}

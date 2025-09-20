---
title: "mcutils:cauldron Component | @lpsmods/mc-utils Documentation"
description: Vanilla cauldron block behavior.
---

# mcutils:cauldron

Vanilla cauldron block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { CauldronComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(CauldronComponent.typeId, new CauldronComponent());
});
```

## Component

### Options

| Name           | Type     | Default | Description |
| -------------- | -------- | ------- | ----------- |
| `interactions` | string[] |         |             |

## Examples

### Cauldron

<<< @/public/examples/mc-utils/blocks/custom_cauldron.json{8-14}

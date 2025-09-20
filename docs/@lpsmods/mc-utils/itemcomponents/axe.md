---
title: "mcutils:axe Component | @lpsmods/mc-utils Documentation"
description: Makes this item strip logs like an axe.
---

# mcutils:axe

Makes this item strip logs like an axe.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { AxeComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(AxeComponent.typeId, new AxeComponent());
});
```

## Component

### Options

| Name           | Type                          | Default      | Description |
| -------------- | ----------------------------- | ------------ | ----------- |
| `size`         | number                        | `1`          |             |
| `sound_event`  | string                        | `use.gravel` |             |
| `interactions` | [Interaction](#interaction)[] | `[]`         |             |

#### Interaction

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| `block`           | string |             |
| `converted_block` | string |             |

## Examples

### Axe

<<< @/public/examples/mc-utils/items/custom_axe.json{8-12}

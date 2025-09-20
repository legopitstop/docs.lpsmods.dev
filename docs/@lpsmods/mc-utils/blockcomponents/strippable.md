---
title: "mcutils:strippable Component | @lpsmods/mc-utils Documentation"
description: Vanilla strippable block behavior.
---

# mcutils:strippable

Vanilla strippable block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { StrippableComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(StrippableComponent.typeId, new StrippableComponent());
});
```

## Component

### Options

| Name          | Type   | Default    | Description |
| ------------- | ------ | ---------- | ----------- |
| `block`       | string |            |             |
| `sound_event` | string | `dig.wood` |             |

## Examples

### Log

<<< @/public/examples/mc-utils/blocks/custom_log.json{13-16}

---
title: "mcutils:toggleable Component | @lpsmods/mc-utils Documentation"
description: Toggleable block state behavior. (like; doors, trapdoors)
---

# mcutils:toggleable

Toggleable block state behavior. (like; doors, trapdoors)

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { ToggleableComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(ToggleableComponent.typeId, new ToggleableComponent());
});
```

## Component

### Options

| Name                | Type   | Default        | Description |
| ------------------- | ------ | -------------- | ----------- |
| `toggle_state`      | string | `mcutils:open` |             |
| `true_sound_event`  | string | `use.stone`    |             |
| `false_sound_event` | string | `use.stone`    |             |

## Examples

### Trapdoor

<<< @/public/examples/mc-utils/blocks/custom_trapdoor.json{22-26}

### Lever

<<< @/public/examples/mc-utils/blocks/custom_lever.json{19-24}

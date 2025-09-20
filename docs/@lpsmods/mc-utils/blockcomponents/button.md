---
title: "mcutils:button Component | @lpsmods/mc-utils Documentation"
description: Vanilla button block behavior.
---

# mcutils:button

Vanilla button block behavior.

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { ButtonComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(ButtonComponent.typeId, new ButtonComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name                    | Type   | Default           | Description |
| ----------------------- | ------ | ----------------- | ----------- |
| `powered_state`         | string | `mcutils:powered` |             |
| `delay`                 | number |                   |             |
| `click_on_sound_event`  | string |                   |             |
| `click_off_sound_event` | string |                   |             |

## Examples

### Button

<<< @/public/examples/mc-utils/blocks/custom_button.json{20-23}

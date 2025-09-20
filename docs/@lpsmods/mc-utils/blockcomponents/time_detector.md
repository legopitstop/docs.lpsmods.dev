---
title: "mcutils:time_detector Component | @lpsmods/mc-utils Documentation"
description: Vanilla time detector block behavior. (like; daylight detector)
---

# mcutils:time_detector

Vanilla time detector block behavior. (like; daylight detector)

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { TimeDetectorComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(TimeDetectorComponent.typeId, new TimeDetectorComponent());
});
```

## Requirements

- [minecraft:tick](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/minecraftblock_tick)

## Component

### Options

| Name             | Type     | Default            | Description |
| ---------------- | -------- | ------------------ | ----------- |
| `inverted_state` | string   | `mcutils:inverted` |             |
| `powered_state`  | string   | `mcutils:powered`  |             |
| `time_interval`  | number[] | `[0,0]`            |             |

## Examples

### Daylight Detector

<<< @/public/examples/mc-utils/blocks/custom_daylight_detector.json{16-20}

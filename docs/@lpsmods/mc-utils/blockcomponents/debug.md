---
title: "mcutils:debug Component | @lpsmods/mc-utils Documentation"
description: desc
---

# mcutils:debug

desc

## Registering

Before you can use this component you need to register it.

```js
import { system } from "@minecraft/server";
import { DebugComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(DebugComponent.typeId, new DebugComponent());
});
```

## Component

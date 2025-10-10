---
title: Custom Components | @lpsmods/mc-utils Documentation
description: How to register and use custom components from @lpsmods/mc-utils.
prev:
  text: Getting Started
  link: ./getting-started
next: false
---

# Custom Components

## Registering Components

Before you can use `@lpsmods/mc-utils` components in your block or item JSON, they must first be **registered** with Minecraft’s component registries. This is done during the startup event.

```ts
import { system } from "@minecraft/server";
import { BushComponent, AxeComponent } from "@lpsmods/mc-utils";

system.beforeEvents.startup.subscribe((event) => {
  event.blockComponentRegistry.registerCustomComponent(BushComponent.componentId, new BushComponent());

  event.itemComponentRegistry.registerCustomComponent(AxeComponent.componentId, new AxeComponent());
});
```

---
title: Integration | @lpsmods/mcaddon-bridge Documentation
description: Using an API bridge in your Add-On.
---

# Integration

Using an API bridge in a different Add-On.

## Code

:::tabs key:mcaddon-bridge-version

== v0.0.2

```ts
import { world } from "@minecraft/server";
import { connect } from "@lpsmods/mcaddon-bridge";

function worldLoad(): void {
  // Connect to the api
  const myPack = connect("creator_example");

  console.warn(myPack.get("name"));
  myPack.set("name", "Bob");
  console.warn(myPack.get("name"));

  console.warn(myPack.get("fullName"));
  myPack.set("fullName", "Steve Black");
  console.warn(myPack.get("fullName"));

  myPack.call("greet", "Alex");
}

world.afterEvents.worldLoad.subscribe(worldLoad);
```

== v0.0.1

```ts
import { world } from "@minecraft/server";
import { connect } from "@lpsmods/mcaddon-bridge";

function worldLoad(): void {
  // Connect to the api
  const myPack = connect("creator_example");

  console.warn(myPack.get(world, "name"));
  myPack.set(world, "name", "Bob");
  console.warn(myPack.get(world, "name"));

  console.warn(myPack.get(world, "fullName"));
  myPack.set(world, "fullName", "Steve Black");
  console.warn(myPack.get(world, "fullName"));

  myPack.call(world, "greet", "Alex");
}

world.afterEvents.worldLoad.subscribe(worldLoad);
```

:::

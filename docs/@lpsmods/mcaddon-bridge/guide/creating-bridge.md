---
title: Creating Bridge | @lpsmods/mcaddon-bridge Documentation
description: desc
prev: false
next: false
---

# Creating Bridge

Create the api.

## Code

:::tabs key:mcaddon-bridge-version

== v0.0.2

```ts
import { world } from "@minecraft/server";
import { Bridge } from "@lpsmods/mcaddon-bridge";

// Create a new bridge (aka API)
const api = new Bridge("creator_example");

// Basic property
api.defineProperty("name", {
  value: "Steve",
  writeable: true,
  enumerable: true,
  configurable: true,
});

// Getter and Setter
api.defineProperty("fullName", {
  get() {
    const firstName = world.getDynamicProperty("first_name");
    const lastName = world.getDynamicProperty("last_name");
    return `${firstName} ${lastName}`;
  },

  set(value) {
    const parts = value.split(" ");
    world.setDynamicProperty("first_name", parts[0]);
    world.setDynamicProperty("last_name", parts[1]);
  },
  enumerable: true,
  configurable: true,
});

// Simple function property
api.defineProperty("greet", {
  value: function (name: string) {
    console.warn(`Hello, ${name}!`);
  },
  writeable: true,
  enumerable: true,
  configurable: true,
});
```

== v0.0.1

```ts
import { world } from "@minecraft/server";
import { Bridge } from "@lpsmods/mcaddon-bridge";

// Create a new bridge (aka API)
const api = new Bridge("creator_example");

// Basic property
api.defineProperty(world, "name", {
  value: "Steve",
  writeable: true,
  enumerable: true,
  configurable: true,
});

// Getter and Setter
api.defineProperty(world, "fullName", {
  get() {
    const firstName = world.getDynamicProperty("first_name");
    const lastName = world.getDynamicProperty("last_name");
    return `${firstName} ${lastName}`;
  },

  set(value) {
    const parts = value.split(" ");
    world.setDynamicProperty("first_name", parts[0]);
    world.setDynamicProperty("last_name", parts[1]);
  },
  enumerable: true,
  configurable: true,
});

// Simple function property
api.defineProperty(world, "greet", {
  value: function (name: string) {
    console.warn(`Hello, ${name}!`);
  },
  writeable: true,
  enumerable: true,
  configurable: true,
});
```

:::

---
title: Getting Started | @lpsmods/mcaddon-bridge Documentation
description: desc
prev: false
next: false
---

# Getting Started

## Installation

<NodeInstallation package="@lpsmods/mcaddon-bridge" />

## Using it in your project

To use `@lpsmods/mcaddon-bridge` in your project you'll need to bundle and merge it with your packs code. You can do this with [esbuild](https://esbuild.github.io/getting-started/#your-first-bundle)

## Example

Create the api.

```ts
import { world } from "@minecraft/server";
import { Bridge } from "@lpsmods/mcaddon-bridge";

// Create a new bridge (aka API)
const api = new Bridge("com.example.myPack");

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

Use the API from a different pack.

```ts
import { world } from "@minecraft/server";
import { connect } from "@lpsmods/mcaddon-bridge";

function worldLoad() {
  // Connect to the api
  const myPack = connect("com.example.myPack");

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

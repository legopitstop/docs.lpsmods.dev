---
title: Creating a Schema | @lpsmods/mc-superstruct Documentation
description: desc
prev:
  text: Getting Started
  link: ./getting-started
next:
  text: FAQ
  link: ./faq
---

# Creating a Schema

Schemas define the structure and validation rules for your data using `superstruct` and `@lpsmods/mc-superstruct`.

## Basic Example

```ts
import { Struct, object, boolean, defaulted } from "superstruct";
import { isBlock } from "@lpsmods/mc-superstruct";

const BlockPlacer: Struct<any, any> = object({
  block: isBlock,
  waterlogged: defaulted(boolean(), false),
});
```

This schema ensures:

- `block` is a valid block id.
- `waterlogged` is a boolean.

## Custom Component Usage

Superstruct can be useful for custom components where you may want defaulted options, or strict validation.

```ts
import { system } from "@minecraft/server";

system.beforeEvents.startup.subscribe((initEvent) => {
  initEvent.blockComponentRegistry.registerCustomComponent("wiki:block_placer", {
    onStepOn: (event, args) => {
      // Input: {block: "minecraft:air"}
      const options = BlockPlacer.create(args.params);
      // Output: {block: "minecraft:air", waterlogged: true}
    },
  });
});
```

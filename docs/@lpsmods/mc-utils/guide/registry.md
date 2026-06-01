---
title: Registry | @lpsmods/mc-utils Documentation
description: desc
prev:
  text: Custom Tags
  link: ./custom-tags
next:
  text: FAQ
  link: ./faq
---

# Registry

## Flattenable

When a block is flattened with a shovel.

```ts
import { flattenableBlocks } from "@lpsmods/mc-utils";

flattenableBlocks.register("grass_block", {block: "grass_path"});
```

## Oxidizable

When a block oxidized and unoxidized with an axe.

```ts
import { oxidizableBlocks } from "@lpsmods/mc-utils";

oxidizableBlocks.register("copper_block", {block: "exposed_copper_block"});
```

## Shearable

When a block is sheared with shears.

```ts
import { shearableBlocks } from "@lpsmods/mc-utils";

shearableBlocks.register("pumpkin", {block: "carved_pumpkin"});
```

## Strippable

When a block is stripped with an axe.

```ts
import { strippableBlocks } from "@lpsmods/mc-utils";

strippableBlocks.register("oak_log", {block: "stripped_oak_log"});
```

## Tillable

When a block is tilled with a hoe.

```ts
import {} from "@lpsmods/mc-utils";

flattenableBlocks.register("dirt", {block: "farmland"});
```

## Waxable

When a block is waxed with honeycomb.

```ts
import { waxableBlocks } from "@lpsmods/mc-utils";

waxableBlocks.register("copper_block", {block: "waxed_copper_block"});
```

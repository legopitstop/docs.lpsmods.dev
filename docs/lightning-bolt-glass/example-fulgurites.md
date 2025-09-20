---
title: Example Fulgurites | Lightning Bolt Glass Documentation
description: What is Lightning Bolt Glass? Whenever lightning hits sand it turns into glass.
---

# Example Fulgurites

## Root System

When lightning hits any log type it will create a root system of coal blocks replacing any log type.

```json
{
  "type": "minecraft:root_system",
  "placement_attempts": 20,
  "radius": 3,
  "column_max_height": 50,
  "predicate": { "tag": "minecraft:logs" },
  "block": { "Name": "minecraft:coal_block" }
}
```

## Replace Single Block

When lightning hits Orange Concrete Powder it will replace it with Orange Stained Glass.

```json
{
  "type": "minecraft:replace_single_block",
  "predicate": {
    "blocks": ["minecraft:orange_concrete_powder"]
  },
  "block": {
    "Name": "minecraft:orange_stained_glass"
  }
}
```

---
title: SaplingComponent | Lot's More Food Documentation
---

# SaplingComponent Class

Makes this block behave like a [Sapling](https://minecraft.wiki/w/Sapling)

## Extends

- [Fertilizable](../Fertilizable.md)

## Parameters

| Name        | Type                                       | Default          | Description                    |
| ----------- | ------------------------------------------ | ---------------- | ------------------------------ |
| `generator` | [SaplingGenerator](../SaplingGenerator.md) |                  | The feature to generate a tree |
| `stateName` | String                                     | `morefood:stage` | The name of the growth state   |

## Methods

- [onPlayerInteract](#onplayerinteract)
- [onRandomTick](#onrandomtick)
- [generate](#generate)
- [canGrow](#cangrow)
- [grow](#grow)

### onPlayerInteract

### onRandomTick

### generate

### canGrow

### grow

## Example

```js
var generator = new SaplingGenerator(
  undefined,
  undefined,
  undefined,
  new ConfiguredFeature("morefoodtree:apple_tree"),
  undefined,
  undefined,
  undefined,
);
new SaplingComponent(generator, "stage");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_sapling_block"
    },
    "component": {
      "minecraft:custom_components": ["wiki:custom_sapling"]
    }
  }
}
```

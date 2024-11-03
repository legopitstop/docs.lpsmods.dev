---
title: CropComponent | Lot's More Food Documentation
---

# CropComponent Class

Makes this block behave like [Crops](https://minecraft.wiki/w/Crops)

## Extends

- [Fertilizable](../Fertilizable.md)

## Parameters

| Name        | Type   | Default          | Description                  |
| ----------- | ------ | ---------------- | ---------------------------- |
| `stateName` | String | `morefood:stage` | The name of the growth state |
| `maxStage`  | Number | `7`              | The max growth stage         |

## Methods

- [onPlayerInteract](#onplayerinteract)
- [onRandomTick](#onrandomtick)
- [canGrow](#cangrow)
- [getGrowthAmount](#getgrowthamount)
- [applyGrowth](#applygrowth)
- [grow](#grow)

### onPlayerInteract

### onRandomTick

### canGrow

### getGrowthAmount

### applyGrowth

### grow

## Example

```js
new CropComponent("stage", 7);
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_crop"
    },
    "component": {
      "minecraft:custom_components": ["morefood:crop"]
    }
  }
}
```

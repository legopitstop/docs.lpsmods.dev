---
title: CakeComponent | Lot's More Food Documentation
---

# CakeComponent Class

Makes this block behave like [Cake](https://minecraft.wiki/w/Cake)

## Parameters

| Name        | Type   | Default          | Description                  |
| ----------- | ------ | ---------------- | ---------------------------- |
| `stateName` | String | `morefood:slice` | The name of the slices stage |
| `maxSlices` | Number | `6`              | The max number of slices     |

## Methods

- [onPlayerInteract](#onplayerinteract)
- [placeCandle](#placecandle)
- [eat](#eat)
- [addCandleCake](#addcandlecake)

### onPlayerInteract

### placeCandle

### eat

### addCandleCake

## Example

```js
var cake = new CakeComponent("slice", 6);
cake.addCandleCake("minecraft:candle", "minecraft:candle_cake");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_cake"
    },
    "component": {
      "minecraft:custom_components": ["wiki:custom_cake"]
    }
  }
}
```

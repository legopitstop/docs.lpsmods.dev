---
title: CandleCakeComponent | Lot's More Food Documentation
---

# CandleCakeComponent Class

Makes this block behave like [Cake with Candles](https://minecraft.wiki/w/Cake#Cakes_with_candles)

## Parameters

| Name         | Type   | Default            | Description                 |
| ------------ | ------ | ------------------ | --------------------------- |
| `candleItem` | String | `minecraft:candle` | The candle item to drop     |
| `cakeBlock`  | String | `nubecraft:cake`   | The cake block to convert   |
| `stateName`  | String | `morefood:lit`     | The name of the lit state   |
| `sliceName`  | String | `morefood:slice`   | The name of the slice state |

## Methods

- [onPlayerInteract](#onplayerinteract)
- [setLit](#setlit)
- [eat](#eat)
- [hasLightable](#haslightable)

### onPlayerInteract

### setLit

### eat

### hasLightable

## Example

```js
new CandleCakeComponent("minecraft:candle", "minecraft:cake", "lit", "slice");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_candle_cake"
    },
    "component": {
      "minecraft:custom_components": ["wiki:custom_candle_cake"]
    }
  }
}
```

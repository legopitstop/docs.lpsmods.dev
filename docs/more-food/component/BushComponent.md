---
title: BushComponent | Lot's More Food Documentation
---

# BushComponent Class

Makes this block behave like [Sweet Berries](https://minecraft.wiki/w/Sweet_Berries)

## Extends

- [CropComponent](./CropComponent.md)

## Parameters

| Name        | Type   | Default          | Description                     |
| ----------- | ------ | ---------------- | ------------------------------- |
| `cropItem`  | String |                  | The item to drop when harvested |
| `stateName` | String | `morefood:stage` | The name of the growth stage    |
| `maxStage`  | Number | `7`              | The max growth stage            |

## Methods

- [onPlayerInteract](#onplayerinteract)
- [pickBush](#pickbush)

### onPlayerInteract

### pickBush

## Example

```js
new BushComponent("minecraft:sweet_berries", "growth", 7);
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_bush"
    },
    "component": {
      "minecraft:custom_components": ["morefood:bush"]
    }
  }
}
```

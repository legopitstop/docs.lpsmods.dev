---
title: HangingComponent | Lot's More Food Documentation
---

# HangingComponent Class

Makes this block behave like [Crops](https://minecraft.wiki/w/Crops) and [Cave Vines](https://minecraft.wiki/w/Glow_Berries)

## Extends

- [CropComponent](./CropComponent.md)

## Parameters

| Name        | Type   | Default          | Description                  |
| ----------- | ------ | ---------------- | ---------------------------- |
| `cropItem`  | String |                  | The drop item to drop        |
| `stateName` | String | `morefood:stage` | The name of the growth state |
| `maxStage`  | Number | `7`              | The max growth stage         |

## Methods

- [onPlayerInteract](#onplayerinteract)
- [pickItem](#pickitem)

### onPlayerInteract

### pickItem

## Example

```js
new HangingComponent("minecraft:apple", "stage", 7);
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_hanging_fruit"
    },
    "component": {
      "minecraft:custom_components": ["wiki:hanging_fruit"]
    }
  }
}
```

---
title: TallCropComponent | Lot's More Food Documentation
---

# TallCropComponent Class

The custom behavior for Sweet Corn

## Extends

- [CropComponent](./CropComponent.md)

## Parameters

| Name        | Type   | Default          | Description                      |
| ----------- | ------ | ---------------- | -------------------------------- |
| `stateName` | String | `morefood:stage` | The name of the growth state     |
| `halfName`  | String | `morefood:half`  | The name of the half block state |
| `maxStage`  | Number | `7`              | The max growth stage             |

## Methods

- [canPlace](#canplace)
- [beforeOnPlayerPlace](#beforeonplayerplace)
- [onPlace](#onplace)
- [update](#update)
- [onTick](#ontick)
- [canGrow](#cangrow)
- [onPlayerDestroy](#onplayerdestroy)
- [destroy](#destroy)

### canPlace

### beforeOnPlayerPlace

### onPlace

### update

### onTick

### canGrow

### onPlayerDestroy

### destroy

## Example

```js
new TallCropComponent("stage", "half", 7);
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_double_crop"
    },
    "component": {
      "minecraft:custom_components": ["morefood:tall_crop"]
    }
  }
}
```

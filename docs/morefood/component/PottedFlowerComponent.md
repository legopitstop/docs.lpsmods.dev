---
title: PottedFlowerComponent | Lot's More Food Documentation
---

# PottedFlowerComponent Class

Makes this block behave like a [Flower Pot](https://minecraft.wiki/w/Flower_Pot)

## Parameters

| Name        | Type   | Default                | Description                             |
| ----------- | ------ | ---------------------- | --------------------------------------- |
| `item`      | String |                        | The flower item                         |
| `flowerPot` | String | `minecraft:flower_pot` | The block to convert to a potted flower |

## Methods

- [onPlayerInteract](#onplayerinteract)

### onPlayerInteract

## Example

```js
new PottedFlowerComponent("minecraft:poppy", "minecraft:flower_pot");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:potted_custom_flower"
    },
    "component": {
      "minecraft:custom_components": ["wiki:potted_custom_flower"]
    }
  }
}
```

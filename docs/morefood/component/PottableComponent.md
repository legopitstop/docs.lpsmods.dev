---
title: PottableComponent | Lot's More Food Documentation
---

# PottableComponent Class

Makes it so you can click on a flower pot to convert it to a potted flower

## Parameters

| Name        | Type   | Default                | Description                |
| ----------- | ------ | ---------------------- | -------------------------- |
| `block`     | String |                        | The potted flower block    |
| `flowerPot` | String | `minecraft:flower_pot` | The empty flower pot block |

## Methods

- [onUseOn](#onuseon)

### onUseOn

## Example

```js
new PottableComponent("wiki:potted_custom_flower", "minecraft:flower_pot");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:item": {
    "description": {
      "identifier": "wiki:custom_flower"
    },
    "component": {
      "minecraft:custom_components": ["wiki:custom_flower"]
    }
  }
}
```

---
title: PourableComponent | Lot's More Food Documentation
---

# PourableComponent Class

## Parameters

| Name         | Type   | Description    |
| ------------ | ------ | -------------- |
| `emptyItem`  | String | The empty item |
| `filledItem` | String | The fill item  |

## Methods

- [onUse](#onuse)
- [pour](#pour)
- [canPour](#canpour)

### onUse

### pour

### canPour

## Example

```js
new PourableComponent("minecraft:bucket", "minecraft:milk_bucket");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_pourable"
    },
    "component": {
      "minecraft:custom_components": ["wiki:custom_pourable"]
    }
  }
}
```

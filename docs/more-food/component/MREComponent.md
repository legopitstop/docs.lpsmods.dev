---
title: MREComponent | Lot's More Food Documentation
---

# MREComponent Class

## Parameters

| Name    | Type   | Default | Description                |
| ------- | ------ | ------- | -------------------------- |
| `table` | String | `mre`   | The loot table to generate |

## Methods

- [onUse](#onuse)

### onUse

## Example

```js
new MREComponent("mre");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_mre"
    },
    "component": {
      "minecraft:custom_components": ["wiki:custom_mre"]
    }
  }
}
```

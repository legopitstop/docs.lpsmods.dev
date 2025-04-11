---
title: SpileComponent | Lot's More Food Documentation
---

# SpileComponent Class

The custom behavior for Wooden Spile

## Parameters

| Name        | Type   | Default                     | Description                     |
| ----------- | ------ | --------------------------- | ------------------------------- |
| `stateName` | String | `morefood:sap_level`        | The name of the sap level state |
| `maxLevel`  | Number | `5`                         | The max sap level               |
| `bucket`    | String | `morefood:maple_sap_bucket` | The filled bucket item          |

## Methods

- [onPlayerInteract](#onplayerinteract)
- [checkAxis](#checkaxis)
- [isAttachedToTree](#isattachedtotree)
- [onRandomTick](#onrandomtick)
- [update](#update)

### onPlayerInteract

### checkAxis

### isAttachedToTree

### onRandomTick

### update

## Example

```js
new SpileComponent("sap_level", 5, "minecraft:milk_bucket");
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_spile"
    },
    "component": {
      "minecraft:custom_components": ["morefood:spile"]
    }
  }
}
```

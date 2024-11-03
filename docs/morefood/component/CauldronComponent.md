---
title: CauldronComponent | Lot's More Food Documentation
---

# CauldronComponent Class

Makes this block behave like a [Cauldron](https://minecraft.wiki/w/Cauldron)

## Methods

- [onPlayerInteract](#onplayerinteract)
- [addBucket](#addbucket)
- [update](#update)

### onPlayerInteract

### addBucket

### update

## Example

```js
new CauldronComponent();
```

```json
{
  "format_version": "1.21.20",
  "minecraft:block": {
    "description": {
      "identifier": "wiki:custom_liquid_cauldron"
    },
    "component": {
      "minecraft:custom_components": ["morefood:cauldron"]
    }
  }
}
```

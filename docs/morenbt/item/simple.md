---
title: simple
---

# simple

Simple tags. These tags go directly to the item. `/give @p minecraft:paper{<Simple tags HERE>}`

## Parameters

```
The root item tag.
 ├ NoGravity: (boolean) When the item is dropped it will not fall down. However, it will still follow the direction that you threw it.
 ├ NoMotion: (boolean) When the item is dropped it will not move.
 ├ Invulnerable: (boolean) When the item will not get killed, some funkiness when throwing this item in lava and/or fire, makes it invisible.
 └ foil: (boolean) When set to true it will apply the enchanted glint to the item.
```

## Example

```json
{
  "NoGravity": true,
  "NoMotion": true,
  "Invulnerable": true,
  "foil": true
}
```

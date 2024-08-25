---
title: simple
description: Add new NBT Tags to make customization easier! 
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# simple

Simple tags. These tags go directly to the item. `/give @p minecraft:paper{<Simple tags HERE>}`

## Parameters

```txt
The root item tag.
 ├ NoGravity: (boolean) When the item is dropped it will not fall down. However, it will still follow the direction that you threw it.
 ├ NoMotion: (boolean) When the item is dropped it will not move.
 ├ Invulnerable: (boolean) When the item will not get killed, some funkiness when throwing this item in lava and/or fire, makes it invisible.
 └ foil: (boolean) When set to true it will apply the enchanted glint to the item.
```

## Example

```snbt
{
  NoGravity: true,
  NoMotion: true,
  Invulnerable: true,
  foil: true
}
```

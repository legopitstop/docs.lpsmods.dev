---
title: throwable | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier! 
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# throwable

Throwable item componet. Throwable items, such as a snowball. Right now it is a bit buggy. This is planned to change. Only on `minecraft:carrot_on_a_stick` and `minecraft:warped_fungus_on_a_stick`.

## Parameters

```txt
throwable - The root tag.
 └ ammunition: (obj)
   ├ entity: (string) The item/entity to throw.
   └ nbt: (array) opt, nbt that the entity has.
```

## Example

```snbt
{
  throwable: {
    ammunition: {
      entity: "minecraft:pig",
      nbt: "{CustomName:'{\"text\":\"Projectile\"}'}"
    }
  }
}
```

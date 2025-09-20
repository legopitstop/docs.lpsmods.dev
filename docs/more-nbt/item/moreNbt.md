---
title: MoreNBT | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
---

# MoreNBT

This tag is required for all items that use More NBT Tags Datapack. Get the latest format in-game by doing `/function more_nbt:get_current_nbt_format`.

## Parameters

```txt
moreNBT - The root tag.
 └ nbt_format: (int) The format of the More NBT Datapack Tags.
```

## Example

```snbt
{
  moreNBT: {
    nbt_format: 4
  }
}
```

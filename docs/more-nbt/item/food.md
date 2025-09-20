---
title: food | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
---

# food

Tags that are only for food items.

## Parameters

```txt
food - The root tag.
 ├ on_consume: (obj) Event Trigger
 └ using_converts_to: (obj) Will give the item when it is consumed.
   ├ id: (string) The item's ID.
   └ tag: (obj) The item's optional NBT.
```

## Example

```snbt
{
  food: {
    on_consume: {},
    using_converts_to: {
      id: "minecraft:glass_bottle",
      tag: {
        CustomModelData: 1
      }
    }
  }
}
```

---
title: food
---

# food

Tags that are only for food items.

## Parameters

```
food - The root tag.
 ├ on_consume: (obj) Event Trigger
 └ using_converts_to: (obj) Will give the item when it is consumed.
   ├ id: (string) The item's ID.
   └ tag: (obj) The item's optional NBT.
```

## Example

```json
{
  "food": {
    "on_consume": {},
    "using_converts_to": {
      "id": "minecraft:glass_bottle",
      "tag": {
        "CustomModelData": 1
      }
    }
  }
}
```

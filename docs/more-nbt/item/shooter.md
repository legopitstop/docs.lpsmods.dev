---
title: shooter | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
---

# shooter

(Not added) Similar to 'throwable' but acts more like a bow.

## Parameters

```txt
shooter - The root tag.
 ├ max_draw_duration (int) Draw Duration.
 ├ max_launch_power: (int) Launch power.
 └ ammunition: Throwable item component. Throwable items, such as an arrow.
   ├ entity: (string) The item/entity to throw.
   └ nbt: (string) opt nbt that the entity has.
```

## Example

```snbt
{
  shooter: {
    max_draw_duration: 1,
    max_launch_power: 1,
    ammunition: {
      entity: "minecraft:pig",
      nbt: "{CustomName:'{\"text\":\"I am pig\"}'}"
    }
  }
}
```

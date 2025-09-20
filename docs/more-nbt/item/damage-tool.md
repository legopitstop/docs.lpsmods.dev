---
title: damage_tool | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
---

# damage_tool

Will deal damage to the tool when used. Only on `minecraft:carrot_on_a_stick` and `minecraft:warped_fungus_on_a_stick`

## Parameters

```txt
damage_tool - The root tag.
 ├ remove: (int) How much damage to remove from the tool
 ├ break_sound: (bool) Use the break sound when the item has been consumed/broken. (may add more customizability to this.)
 └ disappears: (bool) Make the item disappear/turn into the air when broken. (may add more customizability to this.)
```

## Example

```snbt
{
  damage_tool: {
    damage: 2,
    break_sound: true,
    disappears: true
  }
}
```

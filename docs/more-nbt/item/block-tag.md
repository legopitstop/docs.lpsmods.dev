---
title: BlockTag | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
---

# BlockTag

## Parameters

```txt
BlockTag - The root tag.
 ├ id: (string) The id of the custom block.
 ├ material: (string) The vanilla Minecraft block to use. Keep note of all the vanilla behaviors.
 ├ loot:
 | ├ ignore_gamemode: (boolean) when true the loot will drop no matter what game mode the player is in. default: false.
 | ├ type: (enum) types: `loot` will use the table. `this` will drop the custom block.
 | └ table: (string) needed if type=loot. references a loot_table.
 └ on_destroy: (obj) when the block has been broken. Event Trigger
```

## Example

```snbt
{
  BlockTag: {
    id: "custom:block",
    material: "minecraft:cobblestone",
    loot: {
      ignore_gaemmode: true,
      type: "minecraft:loot",
      table: "<the loot-table to use>"
    },
    on_destroy: {}
  }
}
```

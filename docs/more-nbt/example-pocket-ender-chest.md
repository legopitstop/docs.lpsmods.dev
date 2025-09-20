---
title: Example Pocket Ender Chest | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
---

# Pocket Ender Chest

Will spawn a minecart with an ender chest inside that you can take and place items in your ender chest without having to place the block. `Inventory`

## Give Function

```mcfunction
function more_nbt:example_items/pocket_ender_chest
```

## Give Item Command

::: code-group

```mcfunction [mcfunction]
give @p ender_chest{display:{Name:'{"text":"Pocket Ender Chest","italic":false}',Lore:['{"text":"Hold to summon pocket ender chest.","italic":false}']},moreNBT:{nbt_format:"IgnoreFormatOverride"},Inventory:{inventory_name:'{"translate":"container.enderchest"}',display_block:{Name:"minecraft:ender_chest"},can_be_siphoned_from:false,inventory_type:"chest",auto_save:{storage:"enderChest"}}}
```

```snbt [snbt]
{
  display: {
    Name: "{\"text\":\"Pocket Ender Chest\",\"italic\":false}",
    Lore: [
      '{\"text\": \"Hold to summon pocket ender chest.\",\"italic\": false}'
    ]
  },
  moreNBT: {
    nbt_format: "IgnoreFormatOverride"
  },
  Inventory: {
    inventory_name: "{\"translate\": \"container.enderchest\"}",
    display_block: {
      Name: "minecraft:ender_chest"
    },
    can_be_siphoned_from: false,
    inventory_type: "chest",
    auto_save: {
      storage: "enderChest"
    }
  }
}
```

:::

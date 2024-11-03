---
title: Example Sea Treasure Loot | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# Sea Treasure Loot

will give you treasure loot, then remove the item. `on_use`

## Give Function

```mcfunction
function more_nbt:example_items/sea_treasure_loot
```

## Give Item Command

::: code-group

```mcfunction [mcfunction]
give @p carrot_on_a_stick{moreNBT:{nbt_format:"IgnoreFormatOverride"},display:{Name:'{"text":"Sea Treasure Loot","italic":false}',Lore:['{"translate":"Click \'%s\' to open crate","italic":false,"with":[{"keybind":"key.use"}]}']},on_use:{loot:{target:"give",source:"loot",table:"minecraft:chests/shipwreck_treasure"},play_sound:{target:"this",sound:"minecraft:block.chest.open"},decrement_stack:{}}
```

```snbt [snbt]
{
  moreNBT: {
    nbt_format: "IgnoreFormatOverride"
  },
  display: {
    Name: "{\"text\": \"Sea Treasure Loot\",\"italic\": false}",
    Lore: [
      '{\"translate\":\"Click '%s' to open crate\",\"italic\": false,\"with\": [{\"keybind\": \"key.use\"}]}'
    ]
  },
  on_use: {
    loot: {
      target: "give",
      source: "loot",
      table: "minecraft:chests/shipwreck_treasure"
    },
    play_sound: {
      target: "this",
      sound: "minecraft:block.chest.open"
    },
    decrement_stack: {}
  }
}
```

:::

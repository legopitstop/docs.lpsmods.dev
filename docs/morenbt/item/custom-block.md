---
title: Custom Block | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# Custom Block

Will place a custom block that when you break it will drop its custom block item, will say the message in chat, and will remove an additional item that doesn't matter the game mode. `BlockTag`

## Give Function

```txt
function more_nbt:example_items/custom_block
```

## Give Item Command

```txt
give @p armor_stand{moreNBT:{nbt_format:"IgnoreFormatOverride"},BlockTag:{id:"more_nbt:custom_block",material:"minecraft:slime_block",components:{on_break:{show_text:{tellraw:{target:"this",raw_text:'{"text":"asd"}'}},decrement_stack:{ignore_game_mode:true}}},loot:{ignore_gamemode:true,type:"minecraft:this"}}}
```

## NBT

```snbt
{
  // custom
  moreNBT: {
    nbt_format: "IgnoreFormatOverride"
  },
  // custom
  BlockTag: {
    id: "more_nbt:custom_block",
    material: "minecraft:slime_block",
    components: {
      on_break: {
        show_text: {
          tellraw: {
            target: "this",
            raw_text: "{\"text\": \"asd\"}"
          }
        },
        decrement_stack: {
          ignore_game_mode: true
        }
      }
    },
    loot: {
      ignore_gamemode: true,
      type: "minecraft:this"
    }
  }
}
```

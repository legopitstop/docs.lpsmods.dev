---
title: Custom Block
---

# Custom Block

Will place a custom block that when you break it will drop its custom block item, will say the message in chat, and will remove an additional item that doesn't matter the game mode. `BlockTag`

## Give Function

```
function more_nbt:example_items/custom_block
```

## Give Item Command

```
give @p armor_stand{moreNBT:{nbt_format:"IgnoreFormatOverride"},BlockTag:{id:"more_nbt:custom_block",material:"minecraft:slime_block",components:{on_break:{show_text:{tellraw:{target:"this",raw_text:'{"text":"asd"}'}},decrement_stack:{ignore_game_mode:true}}},loot:{ignore_gamemode:true,type:"minecraft:this"}}}
```

## NBT (in JSON format)

```json
{
  // custom
  "moreNBT": {
    "nbt_format": "IgnoreFormatOverride"
  },
  // custom
  "BlockTag": {
    "id": "more_nbt:custom_block",
    "material": "minecraft:slime_block",
    "components": {
      "on_break": {
        "show_text": {
          "tellraw": {
            "target": "this",
            "raw_text": "{\"text\": \"asd\"}"
          }
        },
        "decrement_stack": {
          "ignore_game_mode": true
        }
      }
    },
    "loot": {
      "ignore_gamemode": true,
      "type": "minecraft:this"
    }
  }
}
```

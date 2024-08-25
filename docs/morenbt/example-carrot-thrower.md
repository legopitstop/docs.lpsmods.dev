---
title: Example Carrot Thrower
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# Carrot Thrower

Will throw a carrot when you use the item. `on_use`, `damage_tool`, `durability`, `throwable`

## Give Function

```mcfunction
function more_nbt:example_items/carrot_thrower
```

## Give Item Command

::: code-group

```mcfunction [mcfunction]
give @p carrot_on_a_stick{moreNBT:{nbt_format:"IgnoreFormatOverride"},display:{Name:'{"text":"Carrot Thrower","italic":false}',Lore:['{"text":"Right click to shoot stacks of carrots.","italic":false}']},damage_tool:{amount:1,break_sound:1b,disappears:1b},durability:{max_durability:9,display:{type:"customDurability",value:'{"translate":"Shots Left"}'}},throwable:{ammunition:{physics:1b,entity:"minecraft:item",nbt:[{Item:{Count:16b,id:"minecraft:carrot"}}]}},on_use:{play_sound:{target:"this",sound:"minecraft:entity.snowball.throw"}}}
```

```snbt [snbt]
{
  moreNBT: {
    nbt_format: "IgnoreFormatOverride"
  },
  display: {
    Name: "{\"text\": \"Carrot Thrower\",\"italic\": false}",
    Lore: [
      '{\"text\": \"Right click to shoot stacks of carrots.\",\"italic\": false}'
    ]
  },
  damage_tool: {
    amount: 1,
    break_sound: true,
    disappears: true
  },
  durability: {
    max_durability: 9,
    display: {
      type: "customDurability",
      value: "{\"translate\": \"Shots Left\"}"
    }
  },
  throwable: {
    ammunition: {
      physics: true,
      entity: "minecraft:item",
      nbt: [
        {
          Item: {
            Count: 16,
            id: "minecraft:carrot"
          }
        }
      ]
    }
  },
  on_use: {
    play_sound: {
      target: "this",
      sound: "minecraft:entity.snowball.throw"
    }
  }
}
```

:::

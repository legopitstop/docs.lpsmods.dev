---
title: Example Carrot Thrower
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# Carrot Thrower

Will throw a carrot when you use the item. `on_use`, `damage_tool`, `durability`, `throwable`

## Give Function

```
function more_nbt:example_items/carrot_thrower
```

## Give Item Command

```
give @p carrot_on_a_stick{moreNBT:{nbt_format:"IgnoreFormatOverride"},display:{Name:'{"text":"Carrot Thrower","italic":false}',Lore:['{"text":"Right click to shoot stacks of carrots.","italic":false}']},damage_tool:{amount:1,break_sound:1b,disappears:1b},durability:{max_durability:9,display:{type:"customDurability",value:'{"translate":"Shots Left"}'}},throwable:{ammunition:{physics:1b,entity:"minecraft:item",nbt:[{Item:{Count:16b,id:"minecraft:carrot"}}]}},on_use:{play_sound:{target:"this",sound:"minecraft:entity.snowball.throw"}}}
```

## NBT

```snbt
{
  // custom
  moreNBT: {
    nbt_format: "IgnoreFormatOverride"
  },
  // vanilla
  display: {
    Name: "{\"text\": \"Carrot Thrower\",\"italic\": false}",
    Lore: [
      '{\"text\": \"Right click to shoot stacks of carrots.\",\"italic\": false}'
    ]
  },
  // custom
  damage_tool: {
    amount: 1,
    break_sound: true,
    disappears: true
  },
  // custom
  durability: {
    max_durability: 9,
    display: {
      type: "customDurability",
      value: "{\"translate\": \"Shots Left\"}"
    }
  },
  // custom
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
  // custom
  on_use: {
    play_sound: {
      target: "this",
      sound: "minecraft:entity.snowball.throw"
    }
  }
}
```

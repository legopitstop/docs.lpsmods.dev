---
title: Example Pocket Ender Chest
---

# Pocket Ender Chest

Will spawn a minecart with an ender chest inside that you can take and place items in your ender chest without having to place the block. `Inventory`

## Give Function

```
function more_nbt:example_items/pocket_ender_chest
```

## Give Item Command

```
give @p ender_chest{display:{Name:'{"text":"Pocket Ender Chest","italic":false}',Lore:['{"text":"Hold to summon pocket ender chest.","italic":false}']},moreNBT:{nbt_format:"IgnoreFormatOverride"},Inventory:{inventory_name:'{"translate":"container.enderchest"}',display_block:{Name:"minecraft:ender_chest"},can_be_siphoned_from:false,inventory_type:"chest",auto_save:{storage:"enderChest"}}}
```

## NBT (in JSON format)

```json
{
  // vanilla
  "display": {
    "Name": "{\"text\":\"Pocket Ender Chest\",\"italic\":false}",
    "Lore": [
      "{\"text\": \"Hold to summon pocket ender chest.\",\"italic\": false}"
    ]
  },
  // custom
  "moreNBT": {
    "nbt_format": "IgnoreFormatOverride"
  },
  // custom
  "Inventory": {
    "inventory_name": "{\"translate\": \"container.enderchest\"}",
    "display_block": {
      "Name": "minecraft:ender_chest"
    },
    "can_be_siphoned_from": false,
    "inventory_type": "chest",
    "auto_save": {
      "storage": "enderChest"
    }
  }
}
```

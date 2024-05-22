---
title: Inventory
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# Inventory

Inventory to store items and save them.

## Parameters

```
Inventory - The root tag.
 ├ can_be_siphoned_from: (bool) Can hoppers suck items out of this inventory.
 ├ inventory_size: (int) 	(Not Functional) How many slots the inventory will have. default: 26
 ├ inventory_name: (RAW JSON) The text to display inside the container/inventory. Excepts Raw JSON.
 ├ inventory_layout: (enum array) (Not Functional) How to layout the slots. Valid Strings: "inline","center=top","center=bottom","center=middle"
 ├ inventory_type: (enum) The preset inventory to use. Valid Strings: "chest","hopper"
 ├ display_block: Display a different block inside the minecart.
 | ├ Name: (string) The name and id of the block
 | └ BlockStates: (obj) If the block has optional block states you can place them here.
 ├ auto_save: Where to save the container items too.
 | ├ storage: (enum) See #Storage Types for more
 | ├ save_fillers: (bool) (Not Functional) When false it will attempt to not save the UI items.
 | └ visible: (bool) Show the items via lore when the container isn't open, like shulker boxes.
 └ filter: (Not Functional) white/blacklisted items that are allowed in the slots.
   ├ whitelist: (string array) Items that are allowed.
   └ blacklist: (string array) Items that are not allowed.
```

## Example

```json
{
  "Inventory": {
    "can_be_siphoned_from": false,
    "inventory_name": "{\"text\":\"Custom Inventory Name\"}",
    "inventory_type": "chest",
    "display_block": {
      "Name": "minecraft:barrel",
      "BlockStates": {
        "facing": "top"
      }
    },
    "auto_save": {
      "storage": "item"
    }
  }
}
```

## Storage Types

- `item` Will save the container's items onto the selected item. `/data get entity @s SelectedItem.tag.items[]`
- `enderChest` will save your items to your ender chest, There is an issue where if you have your item ender chest open and you add items to your block ender chest it will remove the item. (not multiplayer tested) `/data get entity @s EnderItems[]`
- `cloud` will save your items to the world, works similar to ender chest but only works with the custom item, Like a global `enderchest`. `data get storage morenbt:cloud Items[]`

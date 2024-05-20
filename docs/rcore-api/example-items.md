---
title: Example Items
---

# Example Items

## Item

```mcfunction
data modify storage rcore:register items append value {id: "example:my_item", type: "item", Item: {id: "minecraft:paper", tag: {CustomModelData:5,display:{Name:'{"translate":"item.example.my_item","italic": false}'}} }}
```

## Loot Table

```mcfunction
data modify storage rcore:register items append value {id: "example:my_loot", type: "loot_table", table: "minecraft:chests/simple_dungeon"}
```
---
title: Example Items | LPS Rcore API Documentation
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Example Items

## Item

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register items append value {id: "example:my_item", type: "item", Item: {id: "minecraft:paper", tag: {CustomModelData:5,display:{Name:'{"translate":"item.example.my_item","italic": false}'}} }}
```

```snbt [snbt]
{
    id: "example:my_item",
    type: "item",
    Item: {
        id: "minecraft:paper",
        tag: {
            CustomModelData: 5,
            display: {
                Name: '{"translate":"item.example.my_item","italic": false}'
            }
        }
    }
}
```

:::

## Loot Table

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register items append value {id: "example:my_loot", type: "loot_table", table: "minecraft:chests/simple_dungeon"}
```

```snbt [snbt]
{
    id: "example:my_loot",
    type: "loot_table",
    table: "minecraft:chests/simple_dungeon"
}
```

:::

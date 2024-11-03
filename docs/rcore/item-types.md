---
title: Item Types | LPS Rcore API Documentation
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Item Types

## Built-in Types

- [item](#item)
- [loot_table](#loot-table)

## Item

Represents a normal item.

Additional Properties

| Name   | Type              | Description             |
| ------ | ----------------- | ----------------------- |
| `Item` | [Item](#item-nbt) | Data for the real item. |

### Item NBT

Common NBT for all items
|Name|Type|Description|Example|
|--|--|--|--|
|`id`|String|The Minecraft ID of the item|`minecraft:paper`|
|`tag`|Object| NBT data for the item.|`{CustomModelData: 5}`|

#### Example

::: warning
This is an expanded view of the item and should be on one line.
:::

```snbt
{
  type: "item",
  id: "example:my_item",
  Item: {
    id: "minecraft:paper",
    tag: {CustomModelData: 5}
  }
}
```

## Loot Table

Represents a loot table item

Additional Properties

| Name    | Type   | Description           | Example                           |
| ------- | ------ | --------------------- | --------------------------------- |
| `table` | String | The loot table to use | `minecraft:chests/simple_dungeon` |

### Example

::: warning
This is an expanded view of the item and should be on one line.
:::

```snbt
{
  type: "loot_table",
  id: "example:my_loot_item",
  table: "minecraft:chests/simple_dungeon"
}
```

## Custom Types

1. Create a MCFUNCTION file in your datapack called `item_types.mcfunction`. This file can be located anywhere in your datapack.
1. Now using the [NBT Schema](#item-type-schema) and [examples](./example-item-types.md) from below you can add all your item types to the created item_types.mcfunction.
1. You now need to create a function tag located `data/rcore/tags/functions/register_item_types.json` and enter the path to your item types function.
1. Now in-game run `/reload` to reload your datapack. Then run `/function rcore:reload` to reload all item types

### Item Type Schema

| Name       | Type   | Required | Description                                |
| ---------- | ------ | -------- | ------------------------------------------ |
| `id`       | String | yes      | ID of the item type used in [items](items) |
| `function` | String | yes      | The function to call to drop this item     |

---
title: Items | LPS Rcore API Documentation
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Items

"items" lets you register custom items with NBT data so you can easily reference them multiple times in [recipes](recipes.md)

items are stored in `rcore:register items`.

::: info
[crafting tables](crafting-table.md) are automatically added to the items registry.
:::

## Create Item

1. Create a MCFUNCTION file in your datapack called `items.mcfunction`. This file can be located anywhere in your datapack.
1. Now using the [NBT Schema](#item-schema) and [examples](example-items.md) from below you can add all your items to the created items.mcfunction.
1. You now need to create a function tag located `<pack>/data/rcore/tags/functions/register_items.json` and enter the path to your items function.
1. Now in-game run `/reload` to reload your datapack. Then run `/function rcore:reload` to reload all items

## Item Schema

| Name   | Type                    | Description                                                                                        | Example |
| ------ | ----------------------- | -------------------------------------------------------------------------------------------------- | ------- |
| `id`   | String                  | custom ID of the item. Should be unique between items and shouldn't use the "minecraft" namespace. |         |
| `type` | [Item Type](item-types) | `item` - A normal item<br>`loot_table` - A loot table item                                         | `item`  |

### Refrance in a recipe

To use the registered item in a recipe replace the id in the recipe with the custom ID

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register recipes append value {tags: ['crafting_table', 'rcore'], id: "example:my_recipe", type: 'shapeless', ingredients: [{id: "minecraft:cobblestone"}, {id: "minecraft:stick"}], result: {id: "example:my_item"}}
```

```snbt [snbt]
{
    tags: [
        "crafting_table",
        "rcore"
    ],
    id: "example:my_recipe",
    type: "shapeless",
    ingredients: [
        {
            id: "minecraft:cobblestone"
        },
        {
            id: "minecraft:stick"
        }
    ],
    result: {
        id: "example:my_item"
    }
}
```

:::

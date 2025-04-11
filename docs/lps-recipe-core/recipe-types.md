---
title: Recipe Types | LPS Rcore API Documentation
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Recipe Types

## Built-in Types

- [shapeless](#shapeless)
- [shaped](#shaped)

## Shapeless

Represents a shapeless crafting recipe.

Additional Properties

| Name          | Type                             | Required | Description                |
| ------------- | -------------------------------- | -------- | -------------------------- |
| `ingredients` | Array[[Ingredient](#ingredient)] | yes      | Array of ingredient items. |
| `result`      | [Result](#result)                | yes      | The item(s) to return.     |

### Ingredient

| Name    | Type    | Required | Description                                    |
| ------- | ------- | -------- | ---------------------------------------------- |
| `id`    | String  | yes      | ID of the item. Example `minecraft:stone`      |
| `Count` | Integer |          | The number of items. Default is 1              |
| `tag`   | Object  |          | NBT data that is required for this ingredient. |

### Result

Result can also be an Array of items to drop multiple items.
|Name|Type|Required|Description|
|--|--|--|--|
|`id`|String|yes|ID of the item. Example `minecraft:stone`|
|`Count`|Integer||The number of items. Default is 1|
|`tag`|Object||NBT data to apply.|

### Example

::: warning
This is an expanded view of the item and should be on one line.
:::

```snbt
{
  id: "my_shapeless_recipe",
  tags: ["crafting_table"],
  type: "shapeless",
  ingredients: [
    {
       id: "minecraft:flint_and_steel",
       tag: {CustomModelData: 1}
    },
    {
       id: "minecraft:iron_ingot",
       tag: {CustomModelData: 1}
    }
  ],
  result: {
    id: "minecraft:flint_and_steel",
    tag: {CustomModelData: 5}
  }
}
```

## Shaped

Represents a shaped crafting recipe

### Additional Properties

| Name      | Type                | Required | Description                            |
| --------- | ------------------- | -------- | -------------------------------------- |
| `pattern` | [Pattern](#pattern) | yes      | The pattern of keys                    |
| `keys`    | [Keys](#key)        | yes      | A mapping of keys used in the pattern. |
| `result`  | [Result](#result)   | yes      | The item(s) to return.                 |

### Pattern

A list of single-character keys used to describe a pattern for shaped crafting. Each row in the crafting grid is one string in this list containing 3 or less keys. All strings in this list need to have the same amount of keys. A space can be used to indicate an empty spot.

### Key

Result can also be an Array of items to drop multiple items.
|Name|Type|Required|Description|
|--|--|--|--|
|`id`|String|yes|ID of the item. Example `minecraft:stone`|
|`tag`|Object||NBT data to apply.|

### Result

Result can also be an Array of items to drop multiple items.
|Name|Type|Required|Description|
|--|--|--|--|
|`id`|String|yes|ID of the item. Example `minecraft:stone`|
|`Count`|Integer||The number of items. Default is 1|
|`tag`|Object||NBT data to apply.|

### Example

::: warning
This is an expanded view of the item and should be on one line.
:::

```snbt
{
  id: "my_shaped_recipe",
  tags: ["crafting_table"],
  type: "shaped",
  pattern: [
    "P P",
    "PPP"
  ],
  key: {
    "P": {
       id: "minecraft:oak_planks",
       tag: {CustomModelData: 1}
    }
  },
  result: {
     id: "minecraft:oak_boat",
     tag: {CustomModelData: 1}
  }
}
```

## Custom Type

1. Create a MCFUNCTION file in your datapack called `recipe_types.mcfunction`. This file can be located anywhere in your datapack.
1. Now using the [NBT Schema](#recipe-type-schema) and [examples](./example-recipe-types.md) from below you can add all your recipe types to the created recipe_types.mcfunction.
1. You now need to create a function tag located `data/rcore/tags/functions/register_recipe_types.json` and enter the path to your recipe types function.
1. Now in-game run `/reload` to reload your datapack. Then run `/function rcore:reload` to reload all recipe types

### Recipe Type Schema

| Name       | Type   | Required | Description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| `id`       | String | yes      | ID of the recipe type used in [recipes](recipes) |
| `function` | String | yes      | The function to parse this recipe type           |

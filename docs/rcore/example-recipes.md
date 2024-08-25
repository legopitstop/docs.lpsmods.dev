---
title: Example Recipes | LPS Rcore API
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Example Recipes

## Shapeless

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register recipes append value {tags: ['example'], id: "my_shapeless_recipe", type: 'shapeless', ingredients: [{id: "minecraft:flint"}, {id: "minecraft:iron_ingot"}], result: {id: "minecraft:flint_and_steel"}}
```

```snbt [snbt]
{
    tags: [
        "example"
    ],
    id: "my_shapeless_recipe",
    type: "shapeless",
    ingredients: [
        {
            id: "minecraft:flint"
        },
        {
            id: "minecraft:iron_ingot"
        }
    ],
    result: {
        id: "minecraft:flint_and_steel"
    }
}
```

:::

## Shaped

::: code-group

```mcfunction [mcfunction]
data modify storage rcore:register recipes append value {tags: ['example'], id: 'my_shaped_recipe', type: 'shaped', pattern: ["d  ", " d ", "  s"], keys: {d: {id: "minecraft:diamond"}, s: {id: "minecraft:stick"}}, result: {id: "minecraft:diamond_sword"}}
```

```snbt [snbt]
{
    tags: [
        "example"
    ],
    id: "my_shaped_recipe",
    type: "shaped",
    pattern: [
        "d  ",
        " d ",
        "  s"
    ],
    keys: {
        d: {
            id: "minecraft:diamond"
        },
        s: {
            id: "minecraft:stick"
        }
    },
    result: {
        id: "minecraft:diamond_sword"
    }
}
```

:::

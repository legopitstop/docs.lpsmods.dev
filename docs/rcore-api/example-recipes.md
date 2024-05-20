---
title: Example Recipes
---

# Example Recipes

## Shapeless

```mcfunction
data modify storage rcore:register recipes append value {tags: ['example'], id: "my_shapeless_recipe", type: 'shapeless', ingredients: [{id: "minecraft:flint"}, {id: "minecraft:iron_ingot"}], result: {id: "minecraft:flint_and_steel"}}
```

## Shaped

```mcfunction
data modify storage rcore:register recipes append value {tags: ['example'], id: 'my_shaped_recipe', type: 'shaped', pattern: ["d  ", " d ", "  s"], keys: {d: {id: "minecraft:diamond"}, s: {id: "minecraft:stick"}}, result: {id: "minecraft:diamond_sword"}}
```

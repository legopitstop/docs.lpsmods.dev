---
title: Example Recipe Types
---

# Example Recipe Types

```mcfunction
data modify storage rcore:register recipe_types append value {id: "example:my_recipe_type", function: "example:my_recipe_type/parse"}
```

Using the recipe type in a recipe

```mcfunction
data modify storage rcore:register recipes append value {tags: ['crafting_table'], id: "example:my_recipe", type: 'example:my_recipe_type', ...}
```

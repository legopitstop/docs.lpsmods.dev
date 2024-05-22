---
title: Example Recipe Types
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Example Recipe Types

```mcfunction
data modify storage rcore:register recipe_types append value {id: "example:my_recipe_type", function: "example:my_recipe_type/parse"}
```

Using the recipe type in a recipe

```mcfunction
data modify storage rcore:register recipes append value {tags: ['crafting_table'], id: "example:my_recipe", type: 'example:my_recipe_type', ...}
```

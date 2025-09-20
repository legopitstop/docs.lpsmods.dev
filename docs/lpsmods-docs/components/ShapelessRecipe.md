---
title: ShapelessRecipe | docs.lpsmods.dev
---

# ShapelessRecipe

This component is used to create an interface similar to the [Crafting Table](https://minecraft.wiki/w/Crafting_Table).

- [Source Code](https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/.vitepress/components/ShapelessRecipe.vue)

## Overview

<ShapelessRecipe
    :ingredients="['blaze_powder', 'gunpowder', 'coal']"
    output="fire_charge"
    :count="3"/>

```html
<ShapelessRecipe :ingredients="['blaze_powder', 'gunpowder', 'coal']" output="fire_charge" :count="3" />
```

## Component options

| Prop          | Default | Description                              |
| ------------- | ------- | ---------------------------------------- |
| `ingredients` |         | Specifies ingredients in the recipe grid |
| `output`      |         | Sets the recipe's output.                |
| `count`       | `1`     | The number of output items               |

## See also

- [ShapedRecipe](./ShapedRecipe)

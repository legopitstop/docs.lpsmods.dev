---
title: ShapedRecipe | docs.lpsmods.dev
---

# ShapedRecipe

This component is used to create an interface similar to the [Crafting Table](https://minecraft.wiki/w/Crafting_Table).

- [Source Code](https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/.vitepress/components/ShapedRecipe.vue)

## Overview

<ShapedRecipe
    b2="coal"
    b3="stick"
    output="torch"
    :count="4"/>

<ShapedRecipe
    a1="coal" a2="coal" a3="coal"
    b1="coal" b2="coal" b3="coal"
    c1="coal" c2="coal" c3="coal"
    output="coal_block"/>

```html
<ShapedRecipe b2="coal" b3="stick" output="torch" :count="4" />

<ShapedRecipe
  a1="coal"
  b1="coal"
  c1="coal"
  a2="coal"
  b2="coal"
  c2="coal"
  a3="coal"
  b3="coal"
  c3="coal"
  output="coal_block"
/>
```

## Component options

| Prop        | Default | Description                                                                      |
| ----------- | ------- | -------------------------------------------------------------------------------- |
| `a1`        |         | Specifies ingredients in the top left slot                                       |
| `b1`        |         | Specifies ingredients in the top slot                                            |
| `c1`        |         | Specifies ingredients in the top right slot                                      |
| `a2`        |         | Specifies ingredients in the left slot                                           |
| `b2`        |         | Specifies ingredients in the middle slot                                         |
| `c2`        |         | Specifies ingredients in the right slot                                          |
| `a3`        |         | Specifies ingredients in the bottom left slot                                    |
| `b3`        |         | Specifies ingredients in the bottom slot                                         |
| `c3`        |         | Specifies ingredients in the bottom right slot                                   |
| `output`    |         | Sets the recipe's output.                                                        |
| `count`     | `1`     | The number of output items                                                       |
| `shapeless` | `false` | Forces shapeless recipe mode if "top left slot" and similar parameters are used. |

---
title: BrewingRecipe | docs.lpsmods.dev
---

# BrewingRecipe

::: warning
This component is still under development.
:::

This component is used to create an interface similar to the [Brewing Stand](https://minecraft.wiki/w/Brewing_Stand).

- [Source Code](https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/.vitepress/components/BrewingRecipe.vue)

## Overview

<BrewingRecipe
    input="ghast_tear"
    output="potion"/>

```html
<BrewingRecipe input="ghast_tear" output="potion" />
```

## Component options

| Prop     | Default | Description                    |
| -------- | ------- | ------------------------------ |
| `input`  |         | Specifies the input ingredient |
| `output` |         | Sets the recipe's output.      |

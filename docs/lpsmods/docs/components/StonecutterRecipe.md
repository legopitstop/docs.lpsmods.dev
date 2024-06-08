---
title: StonecutterRecipe
---

# StonecutterRecipe

::: warning
This component is still under development.
:::

This component is used to create an interface similar to the [Stonecutter](https://minecraft.wiki/w/Stonecutter).

[Source Code](https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/.vitepress/components/StonecutterRecipe.vue)


## Overview

<StonecutterRecipe
    input="stone"
    output="stone_brick_slab"
    :count="2"/>

```md
<StonecutterRecipe
    input="stone"
    output="stone_brick_slab"
    :count="2"/>
```

## Component options

| Prop     | Default | Description                    |
| -------- | ------- | ------------------------------ |
| `input`  |         | Specifies the input ingredient |
| `output` |         | Sets the recipe's output.      |
| `count`  | `1`     | The number of output items     |

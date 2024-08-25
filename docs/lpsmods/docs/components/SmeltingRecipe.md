---
title: SmeltingRecipe | docs.lpsmods.dev
---

# SmeltingRecipe

This component is used to create an interface similar to the [Furnace](https://minecraft.wiki/w/Furnace).

[Source Code](https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/.vitepress/components/SmeltingRecipe.vue)

## Overview

<SmeltingRecipe
    input="sand"
    :input_count="17"
    output="glass"
    :output_count="2"
    fuel="coal"
    :fuel_count="3"/>

```md
<SmeltingRecipe
    input="sand"
    :input_count="17"
    output="glass"
    :output_count="2"
    fuel="coal"
    :fuel_count="3"/>
```

## Component options

| Prop           | Default | Description                    |
| -------------- | ------- | ------------------------------ |
| `input`        |         | Specifies the input ingredient |
| `input_count`  | `1`     | The number of input items      |
| `fuel`         |         | Specifies the fuel ingredient  |
| `fuel_count`   | `1`     | The number of fuel items       |
| `output`       |         | Sets the recipe's output.      |
| `output_count` | `1`     | The number of output items     |

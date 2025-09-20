---
title: SmithingRecipe | docs.lpsmods.dev
---

# SmithingRecipe

::: warning
This component is still under development.
:::

This component is used to create an interface similar to the [Smithing Table](https://minecraft.wiki/w/Smithing_Table).

- [Source Code](https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/.vitepress/components/SmithingRecipe.vue)

## Overview

<SmithingRecipe
    template="netherite_upgrade"
    base="diamond_axe"
    addition="netherite_ingot"
    output="netherite_axe"/>

```html
<SmithingRecipe template="netherite_upgrade" base="diamond_axe" addition="netherite_ingot" output="netherite_axe" />
```

## Component options

| Prop       | Default | Description                       |
| ---------- | ------- | --------------------------------- |
| `template` |         | Specifies the template ingredient |
| `base`     |         | Specifies the base ingredient     |
| `addition` |         | Specifies the addition ingredient |
| `output`   |         | Sets the recipe's output.         |

---
title: Inventory
---

# Inventory

::: warning
This component is still under development.
:::

This component is used to create an interface similar to a [Chest](https://minecraft.wiki/w/Chest).

[Source Code](https://github.com/legopitstop/docs.lpsmods.dev/edit/main/docs/.vitepress/components/Inventory.vue)

## Overview

<Inventory
title="Chest"
:rows="3"
:items="['stone','cobblestone']"/>

```md
<Inventory
title="Chest"
:rows="3"
:items="['stone','cobblestone']"/>
```

## Component options

| Prop    | Default | Description                             |
| ------- | ------- | --------------------------------------- |
| `title` |         | The custom title to show on the GUI     |
| `rows`  |         | The number of rows to show (max is 16). |
| `items` |         | Available item slots.                   |

---
title: utils
---

# utils

A handful of utils to interact with the API.

## Drop Table

Drops the table item from [tables](tables) registry.

from ID

```mcfunction
data modify storage rcore:api find set value "TABLE_ID"
function rcore:crafting_table/drop
```

from Entity

```mcfunction
execute as @e[type=marker, tag=rcore_crafting_table, limit=1] at @s run function rcore:crafting_table/drop
```

## Create Table

Sets the table block at the target location from [tables](tables) registry.

from ID

```mcfunction
data modify storage rcore:api find set value "TABLE_ID"
function rcore:crafting_table/create
```

from Entity

```mcfunction
execute as @e[type=marker, tag=rcore_crafting_table, limit=1] at @s run function rcore:crafting_table/create
```

## Destroy Table

Removes this table and drops itself.

from Entity

```mcfunction
execute as @e[type=marker, tag=rcore_crafting_table, limit=1] at @s run function rcore:crafting_table/destroy
```

## Select Table

Select the table.

> `tag` selector cannot have `:` which is why we use the `nbt` selector instead.

```mcfunction
execute as @e[type=marker, tag=rcore_crafting_table, nbt={Tags: ["TABLE_ID"]}] at @s run ...

# Example
execute as @e[type=marker, tag=rcore_crafting_table, nbt={Tags: ["rcore:custom_crafting_table"]}] at @s run setblock ~ ~1 ~ diamond_block
```

## Get Total Tables

Returns the total number of registered [tables](tables).

```mcfunction
scoreboard players get #Tables rcore.util
```

---

## Drop Item

Drops the item from [items](items) registry.

```mcfunction
data modify storage rcore:api find set value "ITEM_ID"
function rcore:items/drop
```

## Select Item

Select the item from [items](items) registry.

> `tag` selector cannot have `:` which is why we use the `nbt` selector instead.

```mcfunction
execute as @e[type=item, tag=rcore_item, nbt={Tags: ["ITEM_ID"]}] at @s run ...

# Example
execute as @e[type=item, tag=rcore_item, nbt={Tags: ["rcore:recipe_book_table"]}] at @s run say RECIPE BOOK ITEM
```

## Get Total Items

Returns the total number of registered [items](items).

```mcfunction
scoreboard players get #Items rcore.util
```

---

## Execute Recipes

Checks if the table matches any recipes. If it does match a recipe drop the result(s)

from Entity

```mcfunction
execute as @e[type=marker, tag=rcore_crafting_table, limit=1] at @s run function rcore:recipes/execute
```

## Get Last Recipe

Returns a String which is the ID of the last crafted recipe.

from Entity

```mcfunction
execute as @e[type=marker, tag=rcore_crafting_table, limit=1] at @s run data get entity @s data.last_recipe
```

## Get Total Recipes

Returns the total number of registered recipes.

```mcfunction
scoreboard players get #Recipes rcore.util
```

## Select Result Items

Select the result item.

> `tag` selector cannot have `:` which is why we use the `nbt` selector instead.

```mcfunction
execute as @e[type=item, tag=rcore_result, nbt={Tags: ["RECIPE_ID"]}] at @s run ...

# Example
execute as @e[type=item, tag=rcore_result, nbt={Tags: ["rcore:recipe_book_table"]}] at @s run say CRAFTED RECIPE BOOK TABLE
```

---
title: Recipes | LPS Rcore API
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Recipes

Create your own NBT recipes using LPS Rcore API.

Recipes are stored in `rcore:register recipes`.

## Create Recipe

1. Create a MCFUNCTION file in your datapack called `recipes.mcfunction`. This file can be located anywhere in your datapack.
2. Now using the [NBT Schema](#recipe-schema) and [examples](./example-recipes.md) from below you can add all your recipes to the created recipes.mcfunction.
3. You now need to create a function tag located `data/rcore/tags/functions/register_recipes.json` and enter the path to your recipes function.
4. Now in-game run `/reload` to reload your datapack. Then run `/function rcore:reload` to reload all recipes

## Recipe Schema

| Name   | Type                                  | Description                                                                              |
| ------ | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`   | String                                | ID of the recipe. should be unique between recipes                                       |
| `tags` | Array[String]                         | List of table tags that this recipe should work for                                      |
| `type` | [RecipeType](./recipe-types.md) | `shaped` All items need to be in these exact slots. `shapeless` - Any item in this table |

## Minecraft Recipes

To register a Minecraft recipe (Recipe hidden behind a settings toggle.) follow all the steps above but instead of adding the recipes function in `register_recipes.json` you add it to `register_minecraft_recipes.json` in the same folder.

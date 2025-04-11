---
title: Magnet | Simple Magnets Mod Wiki
description: Magnet is an item capable of attracting experience and dropped items when activated (BE) or given a redstone signal (FE).
---

# Magnet

**Magnet** is an item capable of attracting [experience](https://minecraft.wiki/w/Experience) and [dropped items](<https://minecraft.wiki/w/Item_(entity)>) when activated (BE) or given a redstone signal (FE).

## Obtaining

### Crafting

<ShapedRecipe
a1="red_dye" b1="" c1="blue_dye"
a2="iron_ingot" b2="" c2="iron_ingot"
a3="iron_ingot" b3="iron_ingot" c3="iron_ingot"
output="magnet:iron_magnet"/>

<ShapelessRecipe
:ingredients="['magnet:iron_magnet', 'gold_ingot']"
output="magnet:gold_magnet"/>

<ShapelessRecipe
:ingredients="['magnet:gold_magnet', 'copper_ingot']"
output="magnet:copper_magnet"/>

<ShapelessRecipe
:ingredients="['magnet:copper_magnet', 'diamond']"
output="magnet:diamond_magnet"/>

<ShapelessRecipe
:ingredients="['magnet:diamond_magnet', 'netherite_ingot']"
output="magnet:netherite_magnet"/>

## Usage

Using the magnet will attract all nearby experience and items.

| Tier          | Radius (blocks) | Delay (seconds) |
| ------------- | --------------- | --------------- |
| Normal Player | 1.425           | 2               |
| Iron          | 3.425           | 5               |
| Gold          | 5.425           | 4               |
| Copper        | 7.425           | 3               |
| Diamond       | 9.425           | 2               |
| Netherite     | 10.425          | 1               |

## Data Values

### ID

Bedrock Edition:

| Name                       | Namespaced ID             | Translation Key                |
| -------------------------- | ------------------------- | ------------------------------ |
| Iron Magnet (#magnet)      | `magnet:iron_magnet`      | `item.magnet:iron_magnet`      |
| Gold Magnet (#magnet)      | `magnet:gold_magnet`      | `item.magnet:gold_magnet`      |
| Copper Magnet (#magnet)    | `magnet:copper_magnet`    | `item.magnet:copper_magnet`    |
| Diamond Magnet (#magnet)   | `magnet:diamond_magnet`   | `item.magnet:diamond_magnet`   |
| Netherite Magnet (#magnet) | `magnet:netherite_magnet` | `item.magnet:netherite_magnet` |

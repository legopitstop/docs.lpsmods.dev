---
title: Items
description: Adds simple magnet items and blocks to make gathering dropped items easier. Upgrade your magnet to make it reach further out. Use the magnet blocks to gather items from your mob farm instead of using tons of hoppers!
---

# Items

## Iron Magnet

<ShapedRecipe
a1="red_dye" b1="" c1="blue_dye"
a2="iron_ingot" b2="" c2="iron_ingot"
a3="iron_ingot" b3="iron_ingot" c3="iron_ingot"
output="magnet:iron_magnet"/>

## Gold Magnet

<ShapelessRecipe
:ingredients="['magnet:iron_magnet', 'gold_ingot']"
output="magnet:gold_magnet"/>

## Copper Magnet

<ShapelessRecipe
:ingredients="['magnet:gold_magnet', 'copper_ingot']"
output="magnet:copper_magnet"/>

## Diamond Magnet

<ShapelessRecipe
:ingredients="['magnet:copper_magnet', 'diamond']"
output="magnet:diamond_magnet"/>

## Netherite Magnet

<ShapelessRecipe
:ingredients="['magnet:diamond_magnet', 'netherite_ingot']"
output="magnet:netherite_magnet"/>

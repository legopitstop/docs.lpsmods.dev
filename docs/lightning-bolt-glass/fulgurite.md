---
title: Fulgurite
description: What is Lightning Bolt Glass? Whenever lightning hits sand it turns into glass.
head:
  - - meta
    - name: keywords
      content: legopitstop,fulgurite,minecraft,fabricmc,mod,datapack,datadriven,customizable
---

# Fulgurite

> Fulgurites are natural glass tubes or crusts that are formed when lightning strikes the ground. The word fulgurite comes from the Latin word fulgur, which means lightning. The shape of a fulgurite mimics the path of the lightning bolt as it disperses into the ground.

## Built-in Fulgurites

Lightning bolt glass comes with 2 fulgurites. One for converting Sand -> Glass and another for converting Red Sand -> Orange Stained Glass. You can find the code [here](https://github.com/legopitstop/Fabric/tree/main/Lightning_Bolt_Glass/src/main/resources/data/lightning_glass/fulgurites)

## Custom Fulgurites

Lightning Bolt Glass supports data-driven Fulgurites letting you create your own!

1. Create a folder in the `<pack>/data/<namespace>` path in your datapack called `fulgurites`. This is where you will be placing all your fulgurite JSONs.
2. Create a JSON file. This can be called anything as long as it ends with ".json"
3. Using the JSON [Schema](#schema) below create your own fulgurite.
4. Now run `/reload` in-game for the changes to apply. You can use `/summon lightning_bolt ~ ~ ~` to test if it works.

## Schema

| Name        | Type                      | Description                   |
| ----------- | ------------------------- | ----------------------------- |
| `type`      | [Types](#types) | Type of fulgurite to generate |
| `predicate` | [Block Predicate](#block-predicate)       | The block to test for         |
| `block`     | [Block](#block)           | The block to place            |

## Types

"minecraft:root_system"

If `predicate` passes create a root system using `block` with `placement_attempts`, `column_max_height`, and `radius`.

Additional Properties

| Name                 | Type    | Default | Description                                         |
| -------------------- | ------- | ------- | --------------------------------------------------- |
| `placement_attempts` | Integer | 20      | The number of times to attempt to place this block. |
| `column_max_height`  | Integer | 100     | The max height of the root system.                  |
| `radius`             | Integer | 3       | The radius of the root system.                      |

"minecraft:replace_single_block"

If `predicate` passes replace a single block where the lightning hit with `block`. This is the legacy behavior for fulgurites.

## Block Predicate

| Name     | Type   | Description                                  |
| -------- | ------ | -------------------------------------------- |
| `tag`    | String | A block tag to match.                        |
| `blocks` | List   | A list of block ID's to match.               |
| `state`  | Object | A map of each Property-Value that must match |
| `nbt`    | String | NBT data to match.                           |

## Block

| Name         | Type   | Description                         |
| ------------ | ------ | ----------------------------------- |
| `Name`       | String | ID of the block.                    |
| `Properties` | Object | A map of all Property-Value to set. |

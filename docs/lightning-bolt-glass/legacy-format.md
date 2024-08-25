---
title: Legacy Format | Lightning Bolt Glass
---

# Legacy Format

::: warning
This page describes the old version of fulgurites **v1.0.0**! For newer format **v1.1.0+** see [Fulgurite](/lightning-bolt-glass/fulgurite)
:::

## Schema

| Name       | Type                                          | Description                                       |
| ---------- | --------------------------------------------- | ------------------------------------------------- |
| `source`   | String or [Block Predicate](#block-predicate) | The block to test for.                            |
| `result`   | String or [Block](#block)                     | The block to place                                |
| `function` | String                                        | ID of the function to call. **(Not Implemented)** |

## Block Predicate

| Name         | Type   | Description                                                        |
| ------------ | ------ | ------------------------------------------------------------------ |
| `block`      | String | ID of the block. Default: "minecraft:air"                          |
| `properties` | Object | A map of all Property-Value that must match. **(Not Implemented)** |
| `nbt`        | String | NBT data to match. **(Not Implemented)**                           |

## Block

| Name    | Type   | Description                                 |
| ------- | ------ | ------------------------------------------- |
| `block` | String | ID of the block. Default: "minecraft:glass" |

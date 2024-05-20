---
title: Crafting Table
---

# Crafting Table

A Crafting Table is made up of a [Marker entity](https://minecraft.fandom.com/wiki/Marker), [Item Display entity](https://minecraft.fandom.com/wiki/Item_Display), and a [Dropper Block](https://minecraft.fandom.com/wiki/Dropper).

## Marker

The marker entity is the primary target entity for the crafting table which stores useful data.

### Tags

| Name                   | Description                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `rcore_crafting_table` | Used to identify all crafting tables.                                                       |
| <TABLE_ID>             | ID of the crafting table used to identify this table. Example `rcore:custom_crafting_table` |

### NBT

The Marker entity contains custom NBT data stored in the `data` field. These fields are readonly and should **not** be modified.

| Name          | Type          | Description                                                                         |
| ------------- | ------------- | ----------------------------------------------------------------------------------- |
| `id`          | String        | ID of the crafting table                                                            |
| `tags`        | Array[String] | List of recipe tags that this table uses                                            |
| `last_recipe` | String        | The last recipe that was crafted. default: `null`                                   |
| `format`      | Integer       | Format version of this table. Used for upgrading tables in the future. default: `1` |
| `custom`      | Object        | Custom NBT data copied from [tables](/rcore-api/tables)                             |

## Item Display

Used to display the custom block model using `CustomModelData`

### Tags

| Name            | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| `rcore_display` | Used to identify all item displays.                                                 |
| <TABLE_ID>      | ID of the table that this display belongs to. Example `rcore:custom_crafting_table` |

### NBT

The `item.tag` field is populated from the `nbt` field in the table registry.

## Dropper

For the UI and collision.

### NBT

The `CustomName` field is populated from the `table_name` field in the table registry.

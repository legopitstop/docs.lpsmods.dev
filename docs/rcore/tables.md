---
title: Tables | LPS Rcore API
description: We are currently working on changing up the entire API system. Hopefully, it will be released soon! For now you can see the up-coming changes to the API.
keywords: legopitstop,minecraft,mod,datapack,resroucepack,morenbt,nbt,data
---

# Tables

Create your own crafting table using LPS Rcore API.

Tables are stored in `rcore:register tables`.

## Create Table

1. Create a MCFUNCTION file in your datapack called tables.mcfunction. This file can be located anywhere in your datapack.
2. Now using the [NBT Schema](#table-schema) and [examples](./example-tables.md) from below you can add all your tables to the created tables.mcfunction.
3. You now need to create a function tag located `data/rcore/tags/functions/register_tables.json` and enter the path to your tables function.
4. Now in-game run `/reload` to reload your datapack. Then run `/function rcore:reload` to reload all tables.

## Obtaining

To obtain your table using commands use the following commands in a MCFUNCTION file. Make sure to replace "example:my_table" with the ID of your table.

```mcfunction
data modify storage rcore:api find set value "example:my_table"
function rcore:crafting_table/drop
```

## Table Schema

| Name         | Type          | Description                                                                                             |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------- |
| `id`         | String        | ID of this table                                                                                        |
| `tags`       | Array[String] | List of recipe tags that this table uses.                                                               |
| `table_name` | TextComponent | The name displayed in the GUI. default is "Crafting"                                                    |
| `nbt`        | Object        | NBT data for the block. This is where you place the CustomModelData and display.Name data.              |
| `custom`     | Object        | Custom NBT data that should get copied over to the [crafting table](./crafting-table.md) block    |
| `conditions` |               | NOT IMPLEMENTED - Array of conditions that must pass for recipes to work.                               |
| `grid`       | Boolean       | EXPERIMENTAL - A grid on the top of the block that lets you craft items without having to open the GUI. |

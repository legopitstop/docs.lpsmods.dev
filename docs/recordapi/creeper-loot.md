---
title: Creeper Loot | Record API Documentation
description: This wiki contains all the added custom nbt. Everything inside this wiki is free to use. If you have any ideas for custom NBT tags feel free to leave a feature suggestion.
keywords: legopitstop,minecraft,datapack,resourcepack,record,music,sounds,api,customizable,creeper,nbt
---

# Creeper Loot

Record API introduces a way to easily make your disc drop from a creeper that has been killed by a skeleton shooting a bow and arrow.

## Register Creeper Drops

First you will need to create a MCFUNCTION file that will register all your item loot tables.

```txt
<datapack>/data/<namespace>/functions/record/register_creeper_drops.mcfunction
```

## Example

The following will add the loot table "example:item/music_disc_5" to the registry.

```mcfunction
data modify storage record:loot_tables creeper append value "example:item/music_disc_5"
```

## Add registry file to tag

Now you will need to add the MCFUNCTION file that you created above to the function tag located:

```txt
<datapack>/data/recordapi/tags/functions/test.json
```

Example

```json
{
  "replace": false,
  "values": ["example:record/register_creeper_discs"]
}
```

## Reload and test

Now in-game run `/reload` to reload the contents of the datapacks. Then run `/function record:reload` to re-register all loot tables. You can then test the loot table by running `/function record:creeper/test` which will drop a random music disc from the registry.

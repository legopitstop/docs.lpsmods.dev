---
title: CustomModelData | Record API
description: This wiki contains all the added custom nbt. Everything inside this wiki is free to use. If you have any ideas for custom NBT tags feel free to leave a feature suggestion.
keywords: legopitstop,minecraft,datapack,resourcepack,record,music,sounds,api,customizable,creeper,nbt
---

# Location

```txt
<resroucepack>/assets/record/modals/item/(DISC)_(DATA).json
```

## Disc

The id of the disc to use.

- `music_disc_11`
- `music_disc_13`
- `music_disc_blocks`
- `music_disc_cat`
- `music_disc_chirp`
- `music_disc_far`
- `music_disc_mall`
- `music_disc_mellohi`
- `music_disc_otherside`
- `music_disc_pigstep`
- `music_disc_stal`
- `music_disc_strad`
- `music_disc_wait`
- `music_disc_ward`

## Data

The CustomModalData value (Between 1-500). By default, all models reference the vanilla Minecraft texture.

## Example

Location This is using `music_disc_11` with a CustomModelData of `15`

```txt
<resroucepack>/assets/record/modals/item/music_disc_11_15.json
```

Model

```json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "test:item/music_disc_5"
  }
}
```

Loot Table

```json
{
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "minecraft:item",
          "name": "minecraft:music_disc_11",
          "functions": [
            {
              "function": "minecraft:set_nbt",
              "tag": "{id:\"test:music_disc_5\",record:{power_level:5,sound:\"example:music_disc.5\"},HideFlags:32,CustomModelData:15,display:{Name:'{\"translate\":\"item.example.music_disc_5\",\"italic\": false}',Lore:['{\"translate\":\"item.example.music_disc_5.desc\",\"color\":\"gray\",\"italic\": false}']}}"
            }
          ]
        }
      ]
    }
  ]
}
```

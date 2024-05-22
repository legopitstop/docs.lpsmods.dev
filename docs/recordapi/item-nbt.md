---
title: Item NBT
description: This wiki contains all the added custom nbt. Everything inside this wiki is free to use. If you have any ideas for custom NBT tags feel free to leave a feature suggestion.
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,resourcepack,record,music,sounds,api,customizable,creeper,nbt
---

# Item NBT

## Parameters

```
id = The custom id for the item
record - The root tag for all records
 ├ power_level (int) - The redstone power level when placed in a jukebox. *Currently does not work*
 └ sound: (str) - The sound event to play.
```

## Example

```
{
   id: "test:music_disc_5",
   record: {
      power_level: 5,
      sound: "example:music_disc.5"
   },
   HideFlags:32,
   CustomModelData:15,
   display: {
      Name: '{"translate":"item.example.music_disc_5", "italic": false}',
      Lore: [
         '{"translate":"item.example.music_disc_5.desc", "color": "gray", "italic": false}'
      ]
   }
}
```

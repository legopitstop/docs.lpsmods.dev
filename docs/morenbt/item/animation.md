---
title: animation
description: Add new NBT Tags to make customization easier! 
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# animation

Animated `CustomModelData` when held.

## Parameters

```
animation - The root tag.
 ├ looping: (bool) Make the animation run year-round.
 ├ run: (int) The number of times to run the animation. only if looping is false.
 ├ frametime: (int) The speed that it will flip through the models.
 └ frames: (int list) The CustomModelData integer to apply at that frame.
```

## Example

```snbt
{
  animation: {
    looping: true,
    frametime: 3,
    frames: [1, 2, 3, 2]
  }
}
```

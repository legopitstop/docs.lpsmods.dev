---
title: SkinAnimation
head:
  - - meta
    - name: keywords
      content: legopitstop,python,minecraft,skin,images,pypi,pillow,mojang,pythonpackage
---

# SkinAnimation

Animate the paperdoll

## Parameters

| Name          | Type                                 | Description                                                                                                   |
| ------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `master`      | [SkinCanvas](/mojangskin/SkinCanvas) | The SkinCanvas that contains the paperdoll.                                                                   |
| `length`      | int                                  | The entire length of the animation. (in ms)                                                                   |
| `loop`        | bool                                 | should this animation stop, loop, or stay on the last frame when finished (true, false, "hold_on_last_frame") |
| `start_delay` | int                                  | How long to wait in ms before playing this animation.                                                         |
| `loop_delay`  | int                                  | How long to wait in ms before looping this animation.                                                         |

## Methods

- [command](#command)
- [rotate](#rotate)
- [scale](#scale)
- [translate](#translate)
- [play](#play)
- [stop](#stop)

### command

Add a command

#### Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| `time` | int      | The time in the animation to trigger this |
| `tag`  | str      | The items's tag or id to modify           |
| `post` | Callable | The command to trigger                    |

### rotate

Add a rotation

#### Parameters

| Name   | Type | Description                               |
| ------ | ---- | ----------------------------------------- |
| `time` | int  | The time in the animation to trigger this |
| `tag`  | str  | The items's tag or id to modify           |
| `post` | int  | Set the new rotation                      |
| `rel`  | int  | Add the rotation to the current rotation  |

### scale

Add a scale

#### Parameters

| Name   | Type  | Description                               |
| ------ | ----- | ----------------------------------------- |
| `time` | int   | The time in the animation to trigger this |
| `tag`  | str   | The items's tag or id to modify           |
| `post` | float | Set the new scale                         |
| `rel`  | float | Add the scale to the current scale        |

### translate

Add a position

#### Parameters

| Name   | Type  | Description                               |
| ------ | ----- | ----------------------------------------- |
| `time` | int   | The time in the animation to trigger this |
| `tag`  | str   | The items's tag or id to modify           |
| `post` | float | Set the new scale                         |
| `rel`  | float | Add the scale to the current scale        |

### play

Start the animation

### stop

Stop the animation

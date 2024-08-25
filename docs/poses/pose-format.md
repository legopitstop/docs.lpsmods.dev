---
title: Pose Format | Armor Stand Poses
description: This datapack adds poses to armor stands like Bedrock Edition. Redstone is the same as bedrock. You can even create your data-driven poses!
keywords: legopitstop,minecraft,mods,datadriven,customizable,poses,armorstand,datapack,fabricmc
---

# Pose Format

## Parameters

| Name           | Type                                                               | Description                                                                             |
| -------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `id`           | String                                                             | ID of the pose. Saved and used to locate the next pose in the list. **(Datapack only)** |
| `power`        | Integer 0-15                                                       | Redstone power level to use this pose.                                                  |
| `display_name` | [Text](https://minecraft.wiki/w/Raw_JSON_text_format#Java_Edition) | Name of the pose to show the player when they interact with the armor stand.            |
| `Pose`         | [Pose Data](#pose-data)                                            | Rotation values of the armor stand pose data.                                           |

### Pose Data

| Name       | Type                 | Description        |
| ---------- | -------------------- | ------------------ |
| `Head`     | [ pitch, roll, yaw ] | Head rotation      |
| `Body`     | [ pitch, roll, yaw ] | Body rotation      |
| `LeftArm`  | [ pitch, roll, yaw ] | Left arm rotation  |
| `RightArm` | [ pitch, roll, yaw ] | Right arm rotation |
| `LeftLeg`  | [ pitch, roll, yaw ] | Left leg rotation  |
| `RightLeg` | [ pitch, roll, yaw ] | Right leg rotation |

## Example

::: code-group

```json [default.json]
{
  "power": 1,
  "display_name": { "translate": "pose.poses.default" },
  "Pose": {
    "Body": [0, 0, 0],
    "Head": [0, 0, 0],
    "LeftArm": [-10, 0, -10],
    "LeftLeg": [-1, 0, -1],
    "RightArm": [-15, 0, 10],
    "RightLeg": [1, 0, 1]
  }
}
```

```snbt [default.snbt]
{
    id: "default",
    power: 1,
    display_name: '{"text": "Default"}',
    Pose: {
        Body: [0f, 0f, 0f],
        Head: [0f, 0f, 0f],
        LeftArm: [-10f, 0f, -10f],
        LeftLeg: [-1f, 0f, -1f],
        RightArm: [-15f,0f, 10f],
        RightLeg: [1f, 0f, 1f]
    }
}
```

:::

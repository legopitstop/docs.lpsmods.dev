---
title: Pose Format | Armor Stand Poses Documentation
description: This datapack adds poses to armor stands like Bedrock Edition. Redstone is the same as bedrock. You can even create your data-driven poses!
keywords: legopitstop,minecraft,mods,datadriven,customizable,poses,armorstand,datapack,fabricmc,forge,neoforge
---

# Pose Format

## Parameters

| Name           | Type                                                               | Description                                                                             |
| -------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `id`           | String                                                             | ID of the pose. Saved and used to locate the next pose in the list. **(Datapack only)** |
| `power`        | Integer 0-15                                                       | Redstone power level to use this pose.                                                  |
| `display_name` | [Text](https://minecraft.wiki/w/Raw_JSON_text_format#Java_Edition) | Name of the pose to show the player when they interact with the armor stand.            |
| `pose`         | [Pose Data](#pose-data)                                            | Rotation values of the armor stand pose data.                                           |

### Pose Data

| Name       | Type                 | Description        |
| ---------- | -------------------- | ------------------ |
| `head`     | [ pitch, roll, yaw ] | Head rotation      |
| `body`     | [ pitch, roll, yaw ] | Body rotation      |
| `left_arm`  | [ pitch, roll, yaw ] | Left arm rotation  |
| `right_arm` | [ pitch, roll, yaw ] | Right arm rotation |
| `left_leg`  | [ pitch, roll, yaw ] | Left leg rotation  |
| `right_leg` | [ pitch, roll, yaw ] | Right leg rotation |

## Example

::: code-group

```json [default.json]
{
  "power": 1,
  "display_name": { "translate": "pose.poses.default" },
  "pose": {
    "body": [0, 0, 0],
    "head": [0, 0, 0],
    "left_arm": [-10, 0, -10],
    "left_leg": [-1, 0, -1],
    "right_arm": [-15, 0, 10],
    "right_leg": [1, 0, 1]
  }
}
```

```snbt [default.snbt]
{
    id: "default",
    power: 1,
    display_name: '{"text": "Default"}',
    pose: {
        body: [0f, 0f, 0f],
        head: [0f, 0f, 0f],
        left_arm: [-10f, 0f, -10f],
        left_leg: [-1f, 0f, -1f],
        right_arm: [-15f,0f, 10f],
        right_leg: [1f, 0f, 1f]
    }
}
```

:::

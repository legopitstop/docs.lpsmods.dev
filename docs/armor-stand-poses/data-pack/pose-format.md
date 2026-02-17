---
title: Pose Format | Armor Stand Poses Documentation
description: This datapack adds poses to armor stands like Bedrock Edition. Redstone is the same as bedrock. You can even create your data-driven poses!
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

:::tabs key:lpsm_asp_version

== 1.6.0+

```mcfunction [defaults.mcfunction]
data modify storage lpsm_asp:poses poses append value {id: "default", power: 1, display_name: '{"text": "Default"}', Pose:{Body:[0f,0f,0f],Head:[0f,0f,0f],LeftArm:[-10f,0f,-10f],LeftLeg:[-1f,0f,-1f],RightArm:[-15f,0f,10f],RightLeg:[1f,0f,1f]}}
```

== Legacy

> [!TIP] This page describes content that exists only in outdated versions of Armor Stand Poses
> This feature used to be in the game but has since been removed.

```mcfunction [defaults.mcfunction]
data modify storage poses:poses poses append value {id: "default", power: 1, display_name: '{"text": "Default"}', Pose:{Body:[0f,0f,0f],Head:[0f,0f,0f],LeftArm:[-10f,0f,-10f],LeftLeg:[-1f,0f,-1f],RightArm:[-15f,0f,10f],RightLeg:[1f,0f,1f]}}
```

:::

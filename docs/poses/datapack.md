---
title: Datapack
description: This datapack adds poses to armor stands like Bedrock Edition. Redstone is the same as bedrock. You can even create your data-driven poses!
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,mods,datadriven,customizable,poses,armorstand,datapack,fabricmc
---

# Datapack

## Custom Poses

Armor Stand Poses supports data-driven Poses letting you create your own!

1. First, you must create the function tag `data/armor_stand/tags/functions/register_poses.json` in your datapack. This should link to your MCFUNCTION file that will contain all the armor stand poses that should be registered. In this example, we will name it "example:armor_stand_poses"

```json
{
  "values": ["example:armor_stand_poses"]
}
```

2. Now in the MCFUNCTION file that you just created you can add your armor stand poses.

```mcfunction
data modify storage armor_stand:poses poses append value {power: 1, id: "example", display_name: '{"text": "Example Pose"}', Pose:{Body:[0f,0f,0f],Head:[0f,0f,0f],LeftArm:[-10f,0f,-10f],LeftLeg:[-1f,0f,-1f],RightArm:[-15f,0f,10f],RightLeg:[1f,0f,1f]}}
```

3. After you've added all your poses save the MCFUNCTION file and run `/reload` in-game to update the file. Now run `/function armor_stand:reload` to reload all poses.

## Pose Schema

| Name           | Type          | Description                                                                  |
| -------------- | ------------- | ---------------------------------------------------------------------------- |
| `id`           | String        | ID of the pose. Saved and used to locate the next pose in the list.          |
| `power`        | Integer 0-15  | Redstone power level to use this pose. (NOT IMPLEMENTED)                     |
| `display_name` | String        | Name of the pose to show the player when they interact with the armor stand. |
| `Pose`         | [Pose](#pose) | Rotation values of the armor stand pose data.                                |

### Pose

| Name       | Type                 | Description        |
| ---------- | -------------------- | ------------------ |
| `Head`     | [ pitch, roll, yaw ] | Head rotation      |
| `Body`     | [ pitch, roll, yaw ] | Body rotation      |
| `LeftArm`  | [ pitch, roll, yaw ] | Left arm rotation  |
| `RightArm` | [ pitch, roll, yaw ] | Right arm rotation |
| `LeftLeg`  | [ pitch, roll, yaw ] | Left leg rotation  |
| `RightLeg` | [ pitch, roll, yaw ] | Right leg rotation |

## Built-in poses

You can override built-in poses by creating a new pose file in the same namespace and path which will replace it. Below you can find a list of these paths.

[Source code](https://github.com/legopitstop/Datapacks/blob/main/Armorstand_Poses/data/armor_stand/functions/poses/defaults.mcfunction) for all built-in poses.

| Power | ID          |
| ----- | ----------- |
| `01`  | `default`   |
| `02`  | `none`      |
| `03`  | `solemn`    |
| `04`  | `Athena`    |
| `05`  | `brandish`  |
| `06`  | `honor`     |
| `07`  | `entertain` |
| `08`  | `salute`    |
| `09`  | `riposte`   |
| `10`  | `zombie`    |
| `11`  | `can_can_1` |
| `12`  | `can_can_2` |
| `13`  | `hero`      |
| `14`  | `default`   |
| `15`  | `default`   |

---
title: Armor Stand Poses
---

# Armor Stand Poses

## Custom Poses

Armor Stand Poses supports data-driven Poses letting you create your own!

1. Create a folder in the /data/namespace path in your datapack called `poses`. This is where you will be placing all your JSON files.
2. Create a JSON file. This can be called anything as long as it ends with '.json'
3. Using the JSON schema below create your own pose.
4. How run /reload in-game for the changes to apply. Then keep Right Clicking on an armor stand until it stops on your pose.

## Pose Schema

| Name           | Type          | Description                                                                                                      |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `power`        | Integer 0-15  | Redstone power level to use this pose. default = `0`                                                             |
| `display_name` | String        | Name of the pose to show the player when they interact with the armor stand. default = `pose.<namespace>.<name>` |
| `Pose`         | [Pose](#pose) | The pose data                                                                                                    |

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

[Source code](https://github.com/legopitstop/Fabric/tree/main/Armorstand_Poses/src/main/resources/data/minecraft/poses) for all built-in poses.

All built-in poses are in the "minecraft" namespace.

| Name      | Power | Name             | Description                                  |
| --------- | ----- | ---------------- | -------------------------------------------- |
| Default   | 1     | `default.json`   | This is the initial pose of the armor stand. |
| None      | 2     | `none.json`      |                                              |
| Solemn    | 3     | `solemn.json`    |                                              |
| Athena    | 4     | `athena.json`    |                                              |
| Brandish  | 5     | `brandish.json`  |                                              |
| Honor     | 6     | `honor.json`     |                                              |
| Entertain | 7     | `entertain.json` |                                              |
| Salute    | 8     | `salute.json`    |                                              |
| Riposte   | 9     | `riposte.json`   |                                              |
| Zombie    | 10    | `zombie.json`    |                                              |
| Can Can 1 | 11    | `can_can_1.json` |                                              |
| Can Can 2 | 12    | `can_can_2.json` |                                              |
| Hero      | 13    | `hero.json`      |                                              |

---
title: Data-Driven | Armor Stand Poses
description: This datapack adds poses to armor stands like Bedrock Edition. Redstone is the same as bedrock. You can even create your data-driven poses!
keywords: legopitstop,minecraft,mods,datadriven,customizable,poses,armorstand,datapack,fabricmc
---

# Data-Driven

Armor Stand Poses supports custom poses letting you create your own!

## Fabric

1. Create a folder in the `/data/<namespace>` path of your datapack called `pose`.
2. Create a JSON file in the created folder. This can be called anything as long as it ends with ".json"
3. Using the [Pose Format](/poses/pose-format) page, create your own pose.
4. Now to run `/reload` in-game for the changes to apply. Then keep right-clicking on an armor stand until it stops on your pose.

## Datapack

1. First, you must create the function tag `data/poses/tags/function/register_poses.json` in your datapack. This should link to your MCFUNCTION file that will contain all the armor stand poses that should be registered. In this example, we will name it "example:armor_stand_poses"

```json
{
  "values": ["example:armor_stand_poses"]
}
```

1. Now in the MCFUNCTION file that you just created you can add your armor stand poses.

::: code-group

```mcfunction [armor_stand_poses.mcfunction]
data modify storage poses:poses poses append value {power: 1, id: "example", display_name: '{"text": "Example Pose"}', Pose:{Body:[0f,0f,0f],Head:[0f,0f,0f],LeftArm:[-10f,0f,-10f],LeftLeg:[-1f,0f,-1f],RightArm:[-15f,0f,10f],RightLeg:[1f,0f,1f]}}
```

```snbt [snbt]
{
    power: 1,
    id: "example",
    display_name: '{"text": "Example Pose"}',
    Pose: {
        Body: [0f, 0f, 0f],
        Head: [0f, 0f, 0f],
        LeftArm: [-10f, 0f, -10f],
        LeftLeg: [-1f, 0f, -1f],
        RightArm: [-15f, 0f, 10f],
        RightLeg: [1f, 0f, 1f]
    }
}
```

:::

1. After you've added all your poses save the MCFUNCTION file and run `/reload` in-game to update the datapack. Now run `/function armor_stand:reload` to reload all poses.

## Generator

1. Go to the [Generator](/poses/generator) page
1. Select your preferred edition.
1. Select a preset to start with.
1. Use the controls on the right to change the rotations of each of the bones.
1. Download the resulting pack for the selected edition.

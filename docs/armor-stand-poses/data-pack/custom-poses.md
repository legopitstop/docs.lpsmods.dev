---
title: Custom Poses | Armor Stand Poses Documentation
description: This datapack adds poses to armor stands like Bedrock Edition. Redstone is the same as bedrock. You can even create your data-driven poses!
---

# Custom Poses

Armor Stand Poses supports custom poses letting you create your own!

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
   # Add multiple poses in the save file.
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

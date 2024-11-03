---
title: Datapack | Armor Stand Poses Documentation
description: This datapack adds poses to armor stands like Bedrock Edition. Redstone is the same as bedrock. You can even create your data-driven poses!
keywords: legopitstop,minecraft,mods,datadriven,customizable,poses,armorstand,datapack,fabricmc
---

# Datapack

## API

### from_id

Get pose from id.

```mcfunction
function poses:api/from_id {id: "default"}
```

### from_power

Get pose from power.

```mcfunction
function poses:api/from_power {power: 5}
```

### next

Get next pose.

```mcfunction
function poses:api/next
```

### set_pose

Set pose. Data is a [Pose](./pose-format.md)

```mcfunction
function poses:api/set_pose {power: 1, id: "default", display_name: "Default", Pose: {Head: [0,0,0], Body: [], LeftArm: [], RightArm: [], LeftLeg: [], RightLeg: []}}
```

```mcfunction
function poses:api/from_id {id: "default"}
function poses:api/from_power {power: 5}
function poses:api/next
function poses:api/set_pose {<pose schema>}
```

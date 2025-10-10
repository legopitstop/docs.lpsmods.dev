---
title: "mcutils:multiblock Component | @lpsmods/mc-utils Documentation"
description: Vanilla multiblock behavior. (like; doors, tall grass, beds)
---

# mcutils:multiblock

Vanilla multiblock behavior. (like; doors, tall grass, beds)

## Component

### Options

| Name              | Type     | Default        | Description |
| ----------------- | -------- | -------------- | ----------- |
| `part_state`      | string   | `mcutils:part` |             |
| `direction_state` | string   |                |             |
| `sync_states`     | boolean  | `false`        |             |
| `parts`           | string[] | `[]`           |             |

## Examples

### Tall Block

<<< @/public/examples/mc-utils/blocks/custom_tall_block.json{11-15}

### Tall Crop

<<< @/public/examples/mc-utils/blocks/custom_tall_crop.json{20-24}

### Large Crafting Table

<<< @/public/examples/mc-utils/blocks/large_crafting_table.json{16-20}

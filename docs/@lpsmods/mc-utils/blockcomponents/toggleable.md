---
title: "mcutils:toggleable Component | @lpsmods/mc-utils Documentation"
description: Toggleable block state behavior. (like; doors, trapdoors)
---

# mcutils:toggleable

Toggleable block state behavior. (like; doors, trapdoors)

## Component

### Options

| Name                | Type   | Default        | Description |
| ------------------- | ------ | -------------- | ----------- |
| `toggle_state`      | string | `mcutils:open` |             |
| `true_sound_event`  | string | `use.stone`    |             |
| `false_sound_event` | string | `use.stone`    |             |

## Examples

### Trapdoor

<<< @/public/examples/mc-utils/blocks/custom_trapdoor.json{22-26}

### Lever

<<< @/public/examples/mc-utils/blocks/custom_lever.json{19-24}

---
title: "mcutils:axe Component | @lpsmods/mc-utils Documentation"
description: Makes this item strip logs like an axe.
---

# mcutils:axe

Makes this item strip logs like an axe.

## Component

### Options

| Name           | Type                          | Default      | Description |
| -------------- | ----------------------------- | ------------ | ----------- |
| `size`         | number                        | `1`          |             |
| `sound_event`  | string                        | `use.gravel` |             |
| `interactions` | [Interaction](#interaction)[] | `[]`         |             |

#### Interaction

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| `block`           | string |             |
| `converted_block` | string |             |

## Examples

### Axe

<<< @/public/examples/mc-utils/items/custom_axe.json{8-12}

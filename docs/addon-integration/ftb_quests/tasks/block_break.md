---
title: ftb_quest:block_break | FTB Quests Integration
description: Counts broken blocks of the given type.
---

# ftb_quest:block_break

Counts broken blocks of the given type.

| Name       | Type   | Required | Description |
| ---------- | ------ | -------- | ----------- |
| `block_id` | string | yes      |             |
| `count`    | number |          |             |

## Example

```json
{
  "type": "ftb_quest:block_break",
  "block_id": "minecraft:stone",
  "count": 100
}
```

---
title: Item Format
description: This datapack adds 4 new items! (called bandages) All of these items will replenish your heart and hunger, while some have added effects.
---

# Item Format

Custom item format to make custom bandages.

## bandage

### Parameters

| Name      | Type                                       | Description                         |
| --------- | ------------------------------------------ | ----------------------------------- |
| `bandage` | array[[Effect Instance](#effect-instance)] | List of effects to apply when used. |

## Effect Instance

### Parameters

| Name        | Type                                                           | Description                                                     |
| ----------- | -------------------------------------------------------------- | --------------------------------------------------------------- |
| `effect`    | [Technical Name](https://minecraft.wiki/w/Effect#Descriptions) | Specifies the effect to be added.                               |
| `duration`  | integer                                                        | Specifies the effect's duration in seconds                      |
| `amplifier` | integer                                                        | Specifies the number of additional levels to add to the effect. |

## Example

```mcfunction
give @s bow{bandage:[{"effect":"speed", "duration":2, "amplifier":1}]}
```

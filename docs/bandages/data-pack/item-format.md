---
title: Item Format | Bandages Mod Wiki
description: Item format to make custom bandages.
---

# Item Format

Item format to make custom bandages.

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

This bandage gives the user [Speed](https://minecraft.wiki/w/Speed) for 2 seconds when used.

::: code-group

```mcfunction
give @s minecraft:bow{bandage:[{effect:"speed", duration:2, amplifier:1}]}
```

```snbt
{
    bandage: [
        {
            effect: "speed",
            duration: 2,
            amplifier: 1
        }
    ]
}
```

:::

## History

|       | Data pack Edition                                             |
| ----- | ------------------------------------------------------------- |
| 1.4.0 | Added custom data to create your own [Bandages](../Bandage.md) |

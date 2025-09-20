---
title: Example Foods | More NBT Tags Documentation
description: Add new NBT Tags to make customization easier!
---

# Example Foods

- Glow Berries item will simply give you the glowing effect when consumed. `on_consume`
- Milk Carton item will give you a glass bottle with NBT data when you consume the item. `using_converts_to`

## Give Function

```mcfunction
function more_nbt:example_items/foods
```

## Give Item Command

Glow Berries

::: code-group

```mcfunction [mcfunction]
give @p glow_berries{moreNBT:{nbt_format:"IgnoreFormatOverride"},display:{Lore:['{"text":"They actually make you glow!","color":"gray","italic":false}']},food:{on_consume:{add_mob_effect:[{target:"@p",effect:"minecraft:glowing"}]}}}
```

```snbt [snbt]
{
  moreNBT: {
    nbt_format: "IgnoreFormatOverride"
  },
  display: {
    Lore: [
      '{\"text\": \"They actually make you glow!\",\"color\": \"gray\",\"italic\": false}'
    ]
  },
  food: {
    on_consume: {
      add_mob_effect: [
        {
          target: "@p",
          effect: "minecraft:glowing"
        }
      ]
    }
  }
}
```

:::

Milk Carton

::: code-group

```mcfunction [mcfunction]
give @p potion{moreNBT:{nbt_format:"IgnoreFormatOverride"},CustomPotionColor:16777215,display:{Name:'{"text":"Milk Carton","italic":false}'},food:{using_converts_to:{id:"minecraft:glass_bottle",tag:{display:{Name:'{"text":"Empty Carton","italic":false}'}}}}}
```

```snbt [snbt]
{
  moreNBT: {
    "nbt_format": "IgnoreFormatOverride"
  },
  CustomPotionColor: 16777215,
  display: {
    Name: "{\"text\": \"Milk Carton\",\"italic\": false}"
  },
  food: {
    using_converts_to: {
      id: "minecraft:glass_bottle",
      tag: {
        display: {
          Name: "{\"text\": \"Empty Carton\",\"italic\": false}"
        }
      }
    }
  }
}
```

:::

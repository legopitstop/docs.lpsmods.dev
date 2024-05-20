---
title: Example Foods
---

# Example Foods

- Glow Berrie's item will simply give you the glowing effect when consumed. `on_consume`
- Milk Carton item will give you a glass bottle with NBT data when you consume the item. `using_converts_to`

## Give Function

```
function more_nbt:example_items/foods
```

## Give Item Command

Glow Berries

```
give @p glow_berries{moreNBT:{nbt_format:"IgnoreFormatOverride"},display:{Lore:['{"text":"They actually make you glow!","color":"gray","italic":false}']},food:{on_consume:{add_mob_effect:[{target:"@p",effect:"minecraft:glowing"}]}}}
```

Milk Carton

```
give @p potion{moreNBT:{nbt_format:"IgnoreFormatOverride"},CustomPotionColor:16777215,display:{Name:'{"text":"Milk Carton","italic":false}'},food:{using_converts_to:{id:"minecraft:glass_bottle",tag:{display:{Name:'{"text":"Empty Carton","italic":false}'}}}}}
```

## NBT (in JSON format)

Glow Berries

```json
{
  // custom
  "moreNBT": {
    "nbt_format": "IgnoreFormatOverride"
  },
  // vanilla
  "display": {
    "Lore": [
      "{\"text\": \"They actually make you glow!\",\"color\": \"gray\",\"italic\": false}"
    ]
  },
  // custom
  "food": {
    "on_consume": {
      "add_mob_effect": [
        {
          "target": "@p",
          "effect": "minecraft:glowing"
        }
      ]
    }
  }
}
```

Milk Carton

```json
{
  // custom
  "moreNBT": {
    "nbt_format": "IgnoreFormatOverride"
  },
  // vanilla
  "CustomPotionColor": 16777215,
  // vanilla
  "display": {
    "Name": "{\"text\": \"Milk Carton\",\"italic\": false}"
  },
  // custom
  "food": {
    "using_converts_to": {
      "id": "minecraft:glass_bottle",
      "tag": {
        "display": {
          "Name": "{\"text\": \"Empty Carton\",\"italic\": false}"
        }
      }
    }
  }
}
```

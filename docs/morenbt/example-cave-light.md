---
title: Example Cave Light
---

# Cave Light

## Data Command

```
data modify storage minecraft:entity entity.<entityID> set value {triggers:[{<trigger data>}]}
```

## Give Item Command

```

```

## NBT (in JSON format)

```json
{
  // custom
  "entity": {
    "player": {
      "triggers": [
        {
          "type": "minecraft:condition",
          "conditions": [],
          "events": {
            "add_mob_effect": [
              {
                "effect": "minecraft:night_vision",
                "target": "this"
              }
            ]
          }
        }
      ]
    }
  }
}
```

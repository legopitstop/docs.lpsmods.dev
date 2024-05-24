---
title: Example Cave Light
head:
  - - meta
    - name: keywords
      content: legopitstop,minecraft,datapack,customizable,mod
---

# Cave Light

## Data Command

```
data modify storage minecraft:entity entity.<entityID> set value {triggers:[{<trigger data>}]}
```

## Give Item Command

```

```

## NBT

```snbt
{
  // custom
  entity: {
    player: {
      triggers: [
        {
          type: "minecraft:condition",
          conditions: [],
          events: {
            add_mob_effect: [
              {
                effect: "minecraft:night_vision",
                target: "this"
              }
            ]
          }
        }
      ]
    }
  }
}
```

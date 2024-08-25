---
title: Example Cave Light
description: Add new NBT Tags to make customization easier!
keywords: legopitstop,minecraft,datapack,customizable,mod
---

# Cave Light

## Data Command

```mcfunction
data modify storage minecraft:entity entity.<entityID> set value {triggers:[{<trigger data>}]}
```

## Give Item Command

::: code-group

```mcfunction [mcfunction]

```

```snbt [snbt]
{
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

:::
